package com.find.your.house.findyourhouse.utils.mappers;

import org.springframework.stereotype.Component;

import com.find.your.house.findyourhouse.model.dto.OfferDto;
import com.find.your.house.findyourhouse.model.entities.Offer;

@Component
public class OfferMapper {
    public Offer convertToOffer(OfferDto offerDto) {
        Offer offer = new Offer();
        offerDto.setId(offer.getId());
        offer.setOfferType(offerDto.getOfferType());
        offer.setPropertyType(offerDto.getPropertyType());
        offer.setTitle(offerDto.getTitle());
        offer.setPrice(offerDto.getPrice());
        offer.setRent(offerDto.getRent());
        offer.setCaution(offerDto.getCaution());
        offer.setArea(offerDto.getArea());
        offer.setRoomCount(offerDto.getRoomCount());
        offer.setPhotos(offerDto.getPhotos());
        offer.setCity(offerDto.getCity());
        offer.setHouseNumber(offerDto.getHouseNumber());
        offer.setStreet(offerDto.getStreet());
        offer.setApartmentNumber(offerDto.getApartmentNumber());
        offer.setPricePerQuadraMeter(offerDto.getPricePerQuadraMeter());
        offer.setDescription(offerDto.getDescription());
        offer.setExhibitorName(offerDto.getExhibitorName());
        offer.setExhibitorPhoneNumber(offerDto.getExhibitorPhoneNumber());
        offer.setExhibitorEmail(offerDto.getExhibitorEmail());
        offer.setCanShow(offerDto.getCanShow());
        return offer;
    }

    public OfferDto convertToOfferDto(Offer offer) {
        OfferDto offerDto = new OfferDto();
        offerDto.setId(offer.getId());
        offerDto.setOfferType(offer.getOfferType());
        offerDto.setPropertyType(offer.getPropertyType());
        offerDto.setTitle(offer.getTitle());
        offerDto.setPrice(offer.getPrice());
        offerDto.setRent(offer.getRent());
        offerDto.setCaution(offer.getCaution());
        offerDto.setArea(offer.getArea());
        offerDto.setRoomCount(offer.getRoomCount());
        offerDto.setPhotos(offer.getPhotos());
        offerDto.setCity(offer.getCity());
        offerDto.setHouseNumber(offer.getHouseNumber());
        offerDto.setStreet(offer.getStreet());
        offerDto.setApartmentNumber(offer.getApartmentNumber());
        offerDto.setPricePerQuadraMeter(offer.getPricePerQuadraMeter());
        offerDto.setDescription(offer.getDescription());
        offerDto.setExhibitorName(offer.getExhibitorName());
        offerDto.setExhibitorPhoneNumber(offer.getExhibitorPhoneNumber());
        offerDto.setExhibitorEmail(offer.getExhibitorEmail());
        offerDto.setCanShow(offer.getCanShow());
        return offerDto;
    }
}
