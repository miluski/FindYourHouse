package com.find.your.house.findyourhouse.utils.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.find.your.house.findyourhouse.model.entities.Ticket;
import com.find.your.house.findyourhouse.model.repositories.*;

@Service
public class AdminTicketsService {
    private final AdminTicketsRepository adminTicketsRepository;
    private final OfferRepository offerRepository;

    @Autowired
    public AdminTicketsService(AdminTicketsRepository adminTicketsRepository, OfferRepository offerRepository) {
        this.adminTicketsRepository = adminTicketsRepository;
        this.offerRepository = offerRepository;
    }

    public Boolean createTicket(Ticket ticket) {
        if (ticket.getOffer() != null && ticket.getOffer().getId() == null) {
            offerRepository.save(ticket.getOffer());
        }
        Ticket createdTicket = adminTicketsRepository.save(ticket);
        return createdTicket != null;
    }

    public Boolean deleteTicket(Long id) throws IllegalArgumentException {
        Optional<Ticket> ticket = adminTicketsRepository.findById(id);
        if (ticket.isPresent()) {
            adminTicketsRepository.deleteById(id);
            return true;
        } else
            return false;
    }
}
