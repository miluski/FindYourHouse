package com.find.your.house.findyourhouse;

import com.find.your.house.findyourhouse.controller.PaymentController;
import com.find.your.house.findyourhouse.model.dto.PaymentDto;
import com.find.your.house.findyourhouse.utils.mappers.PaymentMapper;
import com.find.your.house.findyourhouse.utils.services.PaymentService;
import org.junit.jupiter.api.*;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.*;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

class PaymentControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PaymentService paymentService;

    @MockBean
    private PaymentMapper paymentMapper;

    @MockBean
    private ResponseEntity<?> responseEntity;

    @InjectMocks
    private PaymentController paymentController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        paymentService = Mockito.mock(PaymentService.class);
        paymentMapper = Mockito.mock(PaymentMapper.class);
        responseEntity = Mockito.mock(ResponseEntity.class);
        paymentController = new PaymentController(paymentService, paymentMapper);
        mockMvc = MockMvcBuilders.standaloneSetup(paymentController).build();
    }

    @Test
    void testCheckoutToPayment() throws Exception {
        when(paymentService.generateToken()).thenReturn(true);
        when(paymentService.getPaymentUrl()).thenReturn("https://example.com/payment");
        mockMvc.perform(get("/api/payment/checkout"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.checkoutUrl").value("https://example.com/payment"));
    }

    @Test
    void testCompletePayment_Success() throws Exception {
        PaymentDto paymentDto = new PaymentDto();
        paymentDto.setAmount(100L);
        when(paymentService.getPaymentStatus(any()))
                .thenReturn(ResponseEntity.status(HttpStatus.OK).build());
        when(paymentService.savePayment(any())).thenReturn(true);
        mockMvc.perform(post("/api/payment/complete")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"amount\": 100.0}"))
                .andExpect(status().isOk());
    }

    @Test
    void testCompletePayment_Failure() throws Exception {
        PaymentDto paymentDto = new PaymentDto();
        paymentDto.setAmount(100L);
        when(paymentService.getPaymentStatus(any(PaymentDto.class)))
                .thenReturn(ResponseEntity.status(HttpStatus.FORBIDDEN).build());
        mockMvc.perform(post("/api/payment/complete")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"amount\": 100.0}"))
                .andExpect(status().isForbidden());
    }

    @Test
    void testCheckGateway_Available() throws Exception {
        String url = "https://catfact.ninja/fact";
        mockMvc.perform(post("/api/payment/check-gateway")
                .contentType(MediaType.TEXT_PLAIN)
                .content(url))
                .andExpect(status().isOk());
    }

    @Test
    void testCheckGateway_Unavailable() throws Exception {
        String url = "https://example.com/unavailable-gateway";
        mockMvc.perform(post("/api/payment/check-gateway")
                .contentType(MediaType.TEXT_PLAIN)
                .content(url))
                .andExpect(status().isServiceUnavailable());
    }
}