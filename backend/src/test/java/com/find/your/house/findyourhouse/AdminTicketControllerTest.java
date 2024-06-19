package com.find.your.house.findyourhouse;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.junit.jupiter.api.*;
import org.mockito.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.*;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.*;
import org.springframework.test.web.servlet.*;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.find.your.house.findyourhouse.controller.AdminTicketController;
import com.find.your.house.findyourhouse.model.dto.*;
import com.find.your.house.findyourhouse.model.repositories.*;
import com.find.your.house.findyourhouse.utils.mappers.OfferMapper;
import com.find.your.house.findyourhouse.utils.mappers.TicketMapper;
import com.find.your.house.findyourhouse.utils.services.*;

@WebMvcTest(AdminTicketController.class)
public class AdminTicketControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Mock
    private OfferMapper offerMapper;

    @Mock
    private OfferRepository offerRepository;

    @Mock
    private AdminTicketsRepository adminTicketsRepository;

    @MockBean
    private TicketMapper ticketMapper;

    @MockBean
    private AdminTicketsService adminTicketsService;
    
    @InjectMocks
    private AdminTicketController adminTicketController;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
        adminTicketsService = Mockito.mock(AdminTicketsService.class);
        ticketMapper = Mockito.mock(TicketMapper.class);
        adminTicketController = new AdminTicketController(adminTicketsService, ticketMapper);
        mockMvc = MockMvcBuilders.standaloneSetup(adminTicketController).build();
    }

    @Test
    public void testCreateAdminMessageWithValidTicket() throws Exception {
        TicketDto ticketDto = new TicketDto();
        ticketDto.setTopic("mockTopic");
        ticketDto.setCategory("mockCategory");
        ticketDto.setDate("mockDate");
        ticketDto.setOffer(offerMapper.convertToOffer(new OfferDto()));
        when(adminTicketsService.createTicket(any())).thenReturn(true);
        mockMvc.perform(post("/api/tickets/create")
                .content(ticketDto.convertToJson())
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated());
    }

    @Test
    public void testCreateAdminMessageWithInvalidTicket() throws Exception {
        TicketDto ticketDto = new TicketDto();
        when(adminTicketsService.createTicket(any())).thenReturn(false);
        mockMvc.perform(post("/api/tickets/create")
                .contentType(MediaType.APPLICATION_JSON)
                .content(ticketDto.convertToJson()))
                .andExpect(status().isForbidden());
    }

    @Test
    public void testCreateAdminMessageWithException() throws Exception {
        TicketDto ticketDto = new TicketDto();
        when(adminTicketsService.createTicket(any())).thenThrow(new RuntimeException("Error"));
        mockMvc.perform(post("/api/tickets/create")
                .contentType(MediaType.APPLICATION_JSON)
                .content(ticketDto.convertToJson()))
                .andExpect(status().isInternalServerError())
                .andExpect(content().string("Error"));
    }

    @Test
    public void testDeleteAdminMessageWithExistingId() throws Exception {
        when(adminTicketsService.deleteTicket(any())).thenReturn(true);
        mockMvc.perform(delete("/api/tickets/delete/1"))
                .andExpect(status().isOk());
    }

    @Test
    public void testDeleteAdminMessageWithNonExistingId() throws Exception {
        when(adminTicketsService.deleteTicket(any())).thenReturn(false);
        mockMvc.perform(delete("/api/tickets/delete/1"))
                .andExpect(status().isNotFound());
    }

    @Test
    public void testDeleteAdminMessageWithException() throws Exception {
        when(adminTicketsService.deleteTicket(any())).thenThrow(new RuntimeException("Error"));
        mockMvc.perform(delete("/api/tickets/delete/1"))
                .andExpect(status().isInternalServerError());
    }
}