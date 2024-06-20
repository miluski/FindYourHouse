package com.find.your.house.findyourhouse.utils.services;

import java.util.*;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.find.your.house.findyourhouse.model.entities.Offer;
import com.find.your.house.findyourhouse.model.repositories.OfferRepository;

@Service
public class OfferService {
    private final OfferRepository offerRepository;

    @Autowired
    public OfferService(OfferRepository offerRepository) {
        this.offerRepository = offerRepository;
    }

    public List<Offer> getAllOffers() {
        return offerRepository.findAll();
    }

    public Optional<Offer> getOfferById(Long id) {
        try {
            return offerRepository.findById(id);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            return Optional.empty();
        }
    }

    public Boolean createOffer(Offer offer) {
        try {
            offerRepository.save(offer);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public List<Offer> searchOffers(String query, String offerType) {
        List<Offer> allOffers = offerRepository.findAll();
        return allOffers.stream()
                .filter(offer -> (offer.getTitle().contains(query) || offer.getDescription().contains(query) || offer.getCity().contains(query) || offer.getStreet().contains(query))
                        && offer.getOfferType().equalsIgnoreCase(offerType))
                .collect(Collectors.toList());
    }


    public Boolean editOffer(Long id, Offer offer) {
        try {
            Optional<Offer> offerToEdit = offerRepository.findById(id);
            if (offerToEdit.isPresent()) {
                Offer finalOfferToEdit = offerToEdit.get();
                if (offer.getApartmentNumber() != null) {
                    finalOfferToEdit.setApartmentNumber(offer.getApartmentNumber());
                }
                if (offer.getArea() != null) {
                    finalOfferToEdit.setArea(offer.getArea());
                }
                if (offer.getCaution() != null) {
                    finalOfferToEdit.setCaution(offer.getCaution());
                }
                if (offer.getCity() != null) {
                    finalOfferToEdit.setCity(offer.getCity());
                }
                if (offer.getDescription() != null) {
                    finalOfferToEdit.setDescription(offer.getDescription());
                }
                if (offer.getExhibitorEmail() != null) {
                    finalOfferToEdit.setExhibitorEmail(offer.getExhibitorEmail());
                }
                if (offer.getExhibitorName() != null) {
                    finalOfferToEdit.setExhibitorName(offer.getExhibitorName());
                }
                if (offer.getExhibitorSurname() != null) {
                    finalOfferToEdit.setExhibitorSurname(offer.getExhibitorSurname());
                }
                if (offer.getHouseNumber() != null) {
                    finalOfferToEdit.setHouseNumber(offer.getHouseNumber());
                }
                if (offer.getOfferType() != null) {
                    finalOfferToEdit.setOfferType(offer.getOfferType());
                }
                if (offer.getExhibitorEmail() != null) {
                    finalOfferToEdit.setExhibitorEmail(offer.getExhibitorEmail());
                }
                if (offer.getPhotos() != null) {
                    finalOfferToEdit.setPhotos(offer.getPhotos());
                }
                if (offer.getPrice() != null) {
                    finalOfferToEdit.setArea(offer.getPrice());
                }
                if (offer.getPricePerQuadraMeter() != null) {
                    finalOfferToEdit.setArea(offer.getPricePerQuadraMeter());
                }
                if (offer.getPropertyType() != null) {
                    finalOfferToEdit.setPropertyType(offer.getPropertyType());
                }
                if (offer.getRent() != null) {
                    finalOfferToEdit.setRent(offer.getRent());
                }
                if (offer.getRoomCount() != null) {
                    finalOfferToEdit.setRoomCount(offer.getRoomCount());
                }
                if (offer.getStreet() != null) {
                    finalOfferToEdit.setStreet(offer.getStreet());
                }
                if (offer.getTitle() != null) {
                    finalOfferToEdit.setTitle(offer.getTitle());
                }
                offerRepository.save(finalOfferToEdit);
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }

    }
}
