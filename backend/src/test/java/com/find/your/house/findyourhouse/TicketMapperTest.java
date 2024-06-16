package com.find.your.house.findyourhouse;

import com.find.your.house.findyourhouse.model.dto.TicketDto;
import com.find.your.house.findyourhouse.model.entities.Offer;
import com.find.your.house.findyourhouse.model.entities.Ticket;
import com.find.your.house.findyourhouse.utils.mappers.TicketMapper;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TicketMapperTest {

    private final TicketMapper ticketMapper = new TicketMapper();

    @Test
    public void testConvertToTicket() {
        TicketDto ticketDto = new TicketDto();
        ticketDto.setTopic("Topic");
        ticketDto.setClientName("Client Name");
        ticketDto.setCategory("Category");
        ticketDto.setDate("2024-06-16");
        ticketDto.setOffer(new Offer());
        Ticket ticket = ticketMapper.convertToTicket(ticketDto);
        assertEquals(ticketDto.getTopic(), ticket.getTopic());
        assertEquals(ticketDto.getClientName(), ticket.getClientName());
        assertEquals(ticketDto.getCategory(), ticket.getCategory());
        assertEquals(ticketDto.getDate(), ticket.getDate());
        assertEquals(ticketDto.getOffer(), ticket.getOffer());
    }

    @Test
    public void testConvertToTicketDto() {
        Ticket ticket = new Ticket();
        ticket.setTopic("Topic");
        ticket.setClientName("Client Name");
        ticket.setCategory("Category");
        ticket.setDate("2024-06-16");
        ticket.setOffer(new Offer());
        TicketDto ticketDto = ticketMapper.convertToTicketDto(ticket);
        assertEquals(ticket.getTopic(), ticketDto.getTopic());
        assertEquals(ticket.getClientName(), ticketDto.getClientName());
        assertEquals(ticket.getCategory(), ticketDto.getCategory());
        assertEquals(ticket.getDate(), ticketDto.getDate());
        assertEquals(ticket.getOffer(), ticketDto.getOffer());
    }
}
