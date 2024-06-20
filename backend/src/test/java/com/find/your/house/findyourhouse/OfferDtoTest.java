package com.find.your.house.findyourhouse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.find.your.house.findyourhouse.model.dto.OfferDto;
import com.find.your.house.findyourhouse.model.entities.Photo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class OfferDtoTest {

    private OfferDto offerDto;

    @BeforeEach
    public void setUp() {
        offerDto = new OfferDto();
    }

    @Test
    public void testGettersAndSetters() {
        offerDto.setOfferType("Sale");
        assertEquals("Sale", offerDto.getOfferType());
        offerDto.setPropertyType("House");
        assertEquals("House", offerDto.getPropertyType());
        offerDto.setTitle("Beautiful House");
        assertEquals("Beautiful House", offerDto.getTitle());
        offerDto.setPrice(250000f);
        assertEquals(250000f, offerDto.getPrice());
        offerDto.setRent(1500f);
        assertEquals(1500f, offerDto.getRent());
        offerDto.setCaution(500);
        assertEquals(500, offerDto.getCaution());
        offerDto.setArea(120.5f);
        assertEquals(120.5f, offerDto.getArea());
        offerDto.setRoomCount(4);
        assertEquals(4, offerDto.getRoomCount());
        List<Photo> photos = new ArrayList<>();
        offerDto.setPhotos(photos);
        assertEquals(photos, offerDto.getPhotos());
        offerDto.setCity("New York");
        assertEquals("New York", offerDto.getCity());
        offerDto.setHouseNumber(123);
        assertEquals(123, offerDto.getHouseNumber());
        offerDto.setStreet("Main Street");
        assertEquals("Main Street", offerDto.getStreet());
        offerDto.setApartmentNumber(10);
        assertEquals(10, offerDto.getApartmentNumber());
        offerDto.setPricePerQuadraMeter(2000f);
        assertEquals(2000f, offerDto.getPricePerQuadraMeter());
        offerDto.setDescription("A beautiful house in the city center.");
        assertEquals("A beautiful house in the city center.", offerDto.getDescription());
        offerDto.setExhibitorName("John");
        assertEquals("John", offerDto.getExhibitorName());
        offerDto.setExhibitorSurname("Doe");
        assertEquals("Doe", offerDto.getExhibitorSurname());
        offerDto.setExhibitorPhoneNumber("123-456-7890");
        assertEquals("123-456-7890", offerDto.getExhibitorPhoneNumber());
        offerDto.setExhibitorEmail("john.doe@example.com");
        assertEquals("john.doe@example.com", offerDto.getExhibitorEmail());
        offerDto.setCanShow(true);
        assertTrue(offerDto.getCanShow());
    }

    @Test
    public void testConvertToJson() {
        offerDto.setOfferType("Sale");
        offerDto.setPropertyType("House");
        offerDto.setTitle("Beautiful House");
        offerDto.setPrice(250000f);
        offerDto.setRent(1500f);
        offerDto.setCaution(500);
        offerDto.setArea(120.5f);
        offerDto.setRoomCount(4);
        offerDto.setCity("New York");
        offerDto.setHouseNumber(123);
        offerDto.setStreet("Main Street");
        offerDto.setApartmentNumber(10);
        offerDto.setPricePerQuadraMeter(2000f);
        offerDto.setDescription("A beautiful house in the city center.");
        offerDto.setExhibitorName("John");
        offerDto.setExhibitorSurname("Doe");
        offerDto.setExhibitorPhoneNumber("123-456-7890");
        offerDto.setExhibitorEmail("john.doe@example.com");
        offerDto.setCanShow(true);
        String json = offerDto.convertToJson();
        assertNotNull(json);
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            OfferDto deserializedOfferDto = objectMapper.readValue(json, OfferDto.class);
            assertEquals(offerDto.getOfferType(), deserializedOfferDto.getOfferType());
            assertEquals(offerDto.getPropertyType(), deserializedOfferDto.getPropertyType());
            assertEquals(offerDto.getTitle(), deserializedOfferDto.getTitle());
            assertEquals(offerDto.getPrice(), deserializedOfferDto.getPrice());
            assertEquals(offerDto.getRent(), deserializedOfferDto.getRent());
            assertEquals(offerDto.getCaution(), deserializedOfferDto.getCaution());
            assertEquals(offerDto.getArea(), deserializedOfferDto.getArea());
            assertEquals(offerDto.getRoomCount(), deserializedOfferDto.getRoomCount());
            assertEquals(offerDto.getPhotos(), deserializedOfferDto.getPhotos());
            assertEquals(offerDto.getCity(), deserializedOfferDto.getCity());
            assertEquals(offerDto.getHouseNumber(), deserializedOfferDto.getHouseNumber());
            assertEquals(offerDto.getStreet(), deserializedOfferDto.getStreet());
            assertEquals(offerDto.getApartmentNumber(), deserializedOfferDto.getApartmentNumber());
            assertEquals(offerDto.getPricePerQuadraMeter(), deserializedOfferDto.getPricePerQuadraMeter());
            assertEquals(offerDto.getDescription(), deserializedOfferDto.getDescription());
            assertEquals(offerDto.getExhibitorName(), deserializedOfferDto.getExhibitorName());
            assertEquals(offerDto.getExhibitorSurname(), deserializedOfferDto.getExhibitorSurname());
            assertEquals(offerDto.getExhibitorPhoneNumber(), deserializedOfferDto.getExhibitorPhoneNumber());
            assertEquals(offerDto.getExhibitorEmail(), deserializedOfferDto.getExhibitorEmail());
            assertEquals(offerDto.getCanShow(), deserializedOfferDto.getCanShow());
        } catch (JsonProcessingException e) {
            fail("Failed to deserialize JSON", e);
        }
    }
}
