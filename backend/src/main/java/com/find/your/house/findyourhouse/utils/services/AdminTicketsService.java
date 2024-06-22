package com.find.your.house.findyourhouse.utils.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.find.your.house.findyourhouse.model.entities.Offer;
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

    public List<Ticket> getAllTickets() {
        try {
            return adminTicketsRepository.findAll();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public Boolean acceptTicket(Long id) {
        try {
            Optional<Ticket> ticket = adminTicketsRepository.findById(id);
            if (ticket.isPresent()) {
                Ticket finalTicket = ticket.get();
                Optional<Offer> offer = offerRepository.findById(finalTicket.getOffer().getId());
                if(offer.isPresent()) {
                    Offer finalOffer = offer.get();
                    finalOffer.setCanShow(true);
                    offerRepository.save(finalOffer);
                    adminTicketsRepository.deleteById(id);
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
