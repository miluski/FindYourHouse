package com.find.your.house.findyourhouse.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.find.your.house.findyourhouse.model.Offer;

@RestController
@RequestMapping("api/offers")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
        RequestMethod.DELETE })
public class OfferController {
    @Autowired
    private OfferRepository offerRepository;

    @GetMapping
    private Iterable<Offer> getAllOffers() {
        return offerRepository.findAll();
    }

    @GetMapping("/id/{id}")
    private Optional<Offer> getOfferById(@PathVariable Long id) {
        return offerRepository.findById(id);
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    private Offer createOffer(@RequestBody Offer offer) {
        offerRepository.save(offer);
        return offer;
    }

    @DeleteMapping("/delete/{id}")
    private void deleteOffer(@PathVariable Long id) {
        offerRepository.deleteById(id);
    }

    @PatchMapping("/edit/{id}")
    private Offer editOffer(@PathVariable Long id, @RequestBody Offer offer) {
        Offer offerToEdit = offerRepository.findById(id).get();
        if (offer.getOfferHeader() != null) {
            offerToEdit.setOfferHeader(offer.getOfferHeader());
        }
        if (offer.getDescription() != null) {
            offerToEdit.setDescription(offer.getDescription());
        }
        if (offer.getFinishingCondition() != null) {
            offerToEdit.setFinishingCondition(offer.getFinishingCondition());
        }
        if (offer.getRoomsCount() != null) {
            offerToEdit.setRoomsCount(offer.getRoomsCount());
        }
        if (offer.getSurface() != null) {
            offerToEdit.setSurface(offer.getSurface());
        }
        if (offer.getLocalization() != null) {
            offerToEdit.setLocalization(offer.getLocalization());
        }
        if (offer.getPrice() != null) {
            offerToEdit.setPrice(offer.getPrice());
        }
        if (offer.getPricePerQuadraMeter() != null) {
            offerToEdit.setPricePerQuadraMeter(offer.getPricePerQuadraMeter());
        }
        if (offer.getPhotoLocation() != null) {
            offerToEdit.setPhotoLocation(offer.getPhotoLocation());
        }
        offerRepository.save(offerToEdit);
        return offer;
    }
}
