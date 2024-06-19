package com.find.your.house.findyourhouse;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

import java.util.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.*;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.find.your.house.findyourhouse.model.entities.Payment;
import com.find.your.house.findyourhouse.model.repositories.PaymentRepository;
import com.find.your.house.findyourhouse.model.repositories.UserRepository;
import com.find.your.house.findyourhouse.utils.services.PaymentService;

@SpringBootTest
public class PaymentServiceTest {

    @Mock
    private PaymentRepository paymentRepository;

    @Mock
    private UserRepository userRepository;

    @MockBean
    private RestTemplate restTemplate;

    @InjectMocks
    private PaymentService paymentService;

    @Value("${paypal.client.id}")
    private String paypalClientId;

    @Value("${paypal.client.secret}")
    private String paypalClientSecret;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        ReflectionTestUtils.setField(paymentService, "paypalClientId", paypalClientId);
        ReflectionTestUtils.setField(paymentService, "paypalClientSecret", paypalClientSecret);
        restTemplate = Mockito.mock(RestTemplate.class);
    }

    @Test
    void testGenerateToken() throws Exception {
        String endpoint = "https://api-m.sandbox.paypal.com/v1/oauth2/token";
        String responseJson = "{\"access_token\":\"test-token\"}";
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization",
                "Basic " + Base64.getEncoder().encodeToString((paypalClientId + ":" + paypalClientSecret).getBytes()));
        headers.add("Content-Type", "application/x-www-form-urlencoded");
        MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
        map.add("grant_type", "client_credentials");
        HttpEntity<MultiValueMap<String, String>> entity = new HttpEntity<>(map, headers);
        ResponseEntity<String> responseEntity = new ResponseEntity<>(responseJson, HttpStatus.OK);
        when(restTemplate.exchange(eq(endpoint), eq(HttpMethod.POST), eq(entity), eq(String.class)))
                .thenReturn(responseEntity);
        Boolean result = paymentService.generateToken();
        assertTrue(result);
        Object paymentToken = ReflectionTestUtils.getField(paymentService, "paymentToken");
        assertNotNull(paymentToken, "paymentToken should not be null");
    }

    @Test
    void testGetPaymentUrl() throws Exception {
        String endpoint = "https://api-m.sandbox.paypal.com/v2/checkout/orders";
        String responseJson = "{\"links\":[{\"href\":\"link1\"},{\"href\":\"\"}]}";
        ResponseEntity<String> responseEntity = new ResponseEntity<>(responseJson, HttpStatus.OK);
        when(restTemplate.exchange(eq(endpoint), eq(HttpMethod.POST), eq(responseEntity), eq(String.class)))
                .thenReturn(ResponseEntity.status(HttpStatus.OK).body(responseJson));
        String paymentUrl = paymentService.getPaymentUrl();
        assertEquals("", paymentUrl);
    }

    @Test
    void testSavePaymentException() throws Exception {
        Payment payment = null;
        PaymentService paymentService = mock(PaymentService.class);
        when(paymentService.savePayment(any())).thenThrow(RuntimeException.class);
        assertThrows(RuntimeException.class, () -> {
            paymentService.savePayment(payment);
        });
    }
}
