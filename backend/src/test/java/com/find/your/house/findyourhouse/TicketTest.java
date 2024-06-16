package com.find.your.house.findyourhouse;

import org.junit.jupiter.api.Test;

import com.find.your.house.findyourhouse.model.entities.Offer;
import com.find.your.house.findyourhouse.model.entities.Ticket;

import static org.junit.jupiter.api.Assertions.*;

public class TicketTest {

    @Test
    public void testGettersAndSetters() {
        Ticket ticket = new Ticket();
        ticket.setTopic("Technical Support");
        assertEquals("Technical Support", ticket.getTopic());
        ticket.setClientName("John Doe");
        assertEquals("John Doe", ticket.getClientName());
        ticket.setCategory("Support");
        assertEquals("Support", ticket.getCategory());
        ticket.setDate("2024-06-17");
        assertEquals("2024-06-17", ticket.getDate());
        Offer offer = new Offer();
        ticket.setOffer(offer);
        assertEquals(offer, ticket.getOffer());
    }
}
