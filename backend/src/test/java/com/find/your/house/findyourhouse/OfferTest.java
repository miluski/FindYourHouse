package com.find.your.house.findyourhouse;
import org.junit.jupiter.api.Test;

import com.find.your.house.findyourhouse.model.entities.Offer;
import com.find.your.house.findyourhouse.model.entities.Photo;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

public class OfferTest {

    @Test
    public void testGettersAndSetters() {
        Offer offer = new Offer();
        offer.setId(1L);
        assertEquals(1L, offer.getId());
        offer.setOfferType("Sale");
        assertEquals("Sale", offer.getOfferType());
        offer.setPropertyType("House");
        assertEquals("House", offer.getPropertyType());
        offer.setTitle("Beautiful House for Sale");
        assertEquals("Beautiful House for Sale", offer.getTitle());
        offer.setPrice(100000.0f);
        assertEquals(100000.0f, offer.getPrice());
        offer.setRent(1000.0f);
        assertEquals(1000.0f, offer.getRent());
        offer.setCaution(5000);
        assertEquals(5000, offer.getCaution());
        offer.setArea(150.0f);
        assertEquals(150.0f, offer.getArea());
        offer.setRoomCount(5);
        assertEquals(5, offer.getRoomCount());
        List<Photo> photos = new ArrayList<>();
        Photo photo1 = new Photo();
        photo1.setFileName("photo1.jpg");
        photos.add(photo1);
        offer.setPhotos(photos);
        assertEquals(1, offer.getPhotos().size());
        assertEquals("photo1.jpg", offer.getPhotos().get(0).getFileName());
        offer.setCity("New York");
        assertEquals("New York", offer.getCity());
        offer.setHouseNumber(123);
        assertEquals(123, offer.getHouseNumber());
        offer.setStreet("Main Street");
        assertEquals("Main Street", offer.getStreet());
        offer.setApartmentNumber(456);
        assertEquals(456, offer.getApartmentNumber());
        offer.setPricePerQuadraMeter(669.0f);
        assertEquals(669.0f, offer.getPricePerQuadraMeter());
        offer.setDescription("Spacious house with garden");
        assertEquals("Spacious house with garden", offer.getDescription());
        offer.setExhibitorName("John");
        assertEquals("John", offer.getExhibitorName());
        offer.setExhibitorSurname("Doe");
        assertEquals("Doe", offer.getExhibitorSurname());
        offer.setExhibitorPhoneNumber("+1234567890");
        assertEquals("+1234567890", offer.getExhibitorPhoneNumber());
        offer.setExhibitorEmail("john.doe@example.com");
        assertEquals("john.doe@example.com", offer.getExhibitorEmail());
        offer.setCanShow(true);
        assertTrue(offer.getCanShow());
    }
}

