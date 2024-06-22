package com.find.your.house.findyourhouse;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.*;
import org.mockito.*;
import org.springframework.dao.OptimisticLockingFailureException;

import com.find.your.house.findyourhouse.model.entities.*;
import com.find.your.house.findyourhouse.model.repositories.*;
import com.find.your.house.findyourhouse.utils.services.AdminTicketsService;

public class AdminTicketsServiceTest {

    @Mock
    private AdminTicketsRepository adminTicketsRepository;

    @Mock
    private OfferRepository offerRepository;

    @InjectMocks
    private AdminTicketsService adminTicketsService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testCreateTicketWithValidOffer() {
        Ticket ticket = new Ticket();
        ticket.setOffer(new Offer());
        when(offerRepository.save(ticket.getOffer())).thenReturn(ticket.getOffer());
        when(adminTicketsRepository.save(ticket)).thenReturn(ticket);
        boolean result = adminTicketsService.createTicket(ticket);
        assertTrue(result);
        verify(offerRepository, times(1)).save(ticket.getOffer());
        verify(adminTicketsRepository, times(1)).save(ticket);
    }

    @Test
    public void testCreateTicketWithNullOffer() {
        Ticket ticket = new Ticket();
        when(adminTicketsRepository.save(ticket)).thenReturn(ticket);
        boolean result = adminTicketsService.createTicket(ticket);
        assertTrue(result);
        verify(offerRepository, never()).save(any());
        verify(adminTicketsRepository, times(1)).save(ticket);
    }

    @Test
    public void testDeleteTicketWithExistingId() {
        Long id = 1L;
        Ticket ticket = new Ticket();
        when(adminTicketsRepository.findById(id)).thenReturn(Optional.of(ticket));
        boolean result = adminTicketsService.deleteTicket(id);
        assertTrue(result);
        verify(adminTicketsRepository, times(1)).findById(id);
        verify(adminTicketsRepository, times(1)).deleteById(id);
    }

    @Test
    public void testDeleteTicketWithNonExistingId() {
        Long id = 1L;
        when(adminTicketsRepository.findById(id)).thenReturn(Optional.empty());
        boolean result = adminTicketsService.deleteTicket(id);
        assertFalse(result);
        verify(adminTicketsRepository, times(1)).findById(id);
        verify(adminTicketsRepository, never()).deleteById(any());
    }

    @Test
    public void testCreateTicketThrowsIllegalArgumentException() {
        Ticket ticket = new Ticket();
        when(adminTicketsRepository.save(ticket)).thenThrow(IllegalArgumentException.class);
        assertThrows(IllegalArgumentException.class, () -> adminTicketsService.createTicket(ticket));
    }

    @Test
    public void testCreateTicketThrowsOptimisticLockingFailureException() {
        Ticket ticket = new Ticket();
        when(adminTicketsRepository.save(ticket)).thenThrow(OptimisticLockingFailureException.class);
        assertThrows(OptimisticLockingFailureException.class, () -> adminTicketsService.createTicket(ticket));
    }

    @Test
    public void testDeleteTicketThrowsIllegalArgumentException() {
        Long id = 1L;
        when(adminTicketsRepository.findById(id)).thenThrow(IllegalArgumentException.class);
        assertThrows(IllegalArgumentException.class, () -> adminTicketsService.deleteTicket(id));
    }
}