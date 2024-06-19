package com.find.your.house.findyourhouse;

import com.find.your.house.findyourhouse.model.dto.OfferDto;
import com.find.your.house.findyourhouse.model.entities.Offer;
import com.find.your.house.findyourhouse.utils.mappers.OfferMapper;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class OfferMapperTest {

    private final OfferMapper offerMapper = new OfferMapper();

    @Test
    public void testConvertToOffer() {
        OfferDto offerDto = new OfferDto();
        offerDto.setOfferType("Sale");
        offerDto.setPropertyType("House");
        offerDto.setTitle("Spacious Villa");
        offerDto.setPrice(500000.0f);
        offerDto.setRent(0.0f);
        offerDto.setCaution(10000);
        offerDto.setArea(250.0f);
        offerDto.setRoomCount(5);
        Offer offer = offerMapper.convertToOffer(offerDto);
        assertEquals(offerDto.getOfferType(), offer.getOfferType());
        assertEquals(offerDto.getPropertyType(), offer.getPropertyType());
        assertEquals(offerDto.getTitle(), offer.getTitle());
        assertEquals(offerDto.getPrice(), offer.getPrice());
        assertEquals(offerDto.getRent(), offer.getRent());
        assertEquals(offerDto.getCaution(), offer.getCaution());
        assertEquals(offerDto.getArea(), offer.getArea());
        assertEquals(offerDto.getRoomCount(), offer.getRoomCount());
    }

    @Test
    public void testConvertToOfferDto() {
        // Given
        Offer offer = new Offer();
        offer.setOfferType("Rent");
        offer.setPropertyType("Apartment");
        offer.setTitle("Cozy Apartment");
        offer.setPrice(1500.0f);
        offer.setRent(1500.0f);
        offer.setCaution(2000);
        offer.setArea(100.0f);
        offer.setRoomCount(3);
        OfferDto offerDto = offerMapper.convertToOfferDto(offer);
        assertEquals(offer.getOfferType(), offerDto.getOfferType());
        assertEquals(offer.getPropertyType(), offerDto.getPropertyType());
        assertEquals(offer.getTitle(), offerDto.getTitle());
        assertEquals(offer.getPrice(), offerDto.getPrice());
        assertEquals(offer.getRent(), offerDto.getRent());
        assertEquals(offer.getCaution(), offerDto.getCaution());
        assertEquals(offer.getArea(), offerDto.getArea());
        assertEquals(offer.getRoomCount(), offerDto.getRoomCount());
    }
}