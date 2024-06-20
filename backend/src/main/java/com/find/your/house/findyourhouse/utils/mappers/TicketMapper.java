package com.find.your.house.findyourhouse.utils.mappers;

import org.springframework.stereotype.Component;

import com.find.your.house.findyourhouse.model.dto.TicketDto;
import com.find.your.house.findyourhouse.model.entities.Ticket;

@Component
public class TicketMapper {
    public Ticket convertToTicket(TicketDto ticketDto) {
        Ticket ticket = new Ticket();
        ticket.setCategory(ticketDto.getCategory());
        ticket.setClientName(ticketDto.getClientName());
        ticket.setDate(ticketDto.getDate());
        ticket.setOffer(ticketDto.getOffer());
        ticket.setTopic(ticketDto.getTopic());
        return ticket;
    }

    public TicketDto convertToTicketDto(Ticket ticket) {
        TicketDto ticketDto = new TicketDto();
        ticketDto.setCategory(ticket.getCategory());
        ticketDto.setClientName(ticket.getClientName());
        ticketDto.setDate(ticket.getDate());
        ticketDto.setOffer(ticket.getOffer());
        ticketDto.setTopic(ticket.getTopic());
        ticketDto.setId(ticket.getId());
        return ticketDto;
    }

}
