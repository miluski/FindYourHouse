package com.find.your.house.findyourhouse;

import com.find.your.house.findyourhouse.model.entities.Offer;
import com.find.your.house.findyourhouse.model.repositories.OfferRepository;
import com.find.your.house.findyourhouse.utils.services.OfferService;

import org.junit.jupiter.api.*;
import org.mockito.*;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class OfferServiceTest {

    @Mock
    private OfferRepository offerRepository;

    @InjectMocks
    private OfferService offerService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAllOffers() {
        Offer offer1 = new Offer();
        Offer offer2 = new Offer();
        List<Offer> expectedOffers = Arrays.asList(offer1, offer2);
        when(offerRepository.findAll()).thenReturn(expectedOffers);
        List<Offer> actualOffers = offerService.getAllOffers();
        assertEquals(expectedOffers, actualOffers);
    }

    @Test
    public void testGetOfferByIdWithExistingId() {
        Long id = 1L;
        Offer expectedOffer = new Offer();
        when(offerRepository.findById(id)).thenReturn(Optional.of(expectedOffer));
        Optional<Offer> actualOffer = offerService.getOfferById(id);
        assertTrue(actualOffer.isPresent());
        assertEquals(expectedOffer, actualOffer.get());
    }

    @Test
    public void testGetOfferByIdWithNonExistingId() {
        Long id = 1L;
        when(offerRepository.findById(id)).thenReturn(Optional.empty());
        Optional<Offer> actualOffer = offerService.getOfferById(id);
        assertFalse(actualOffer.isPresent());
    }

    @Test
    public void testCreateOffer() {
        Offer offer = new Offer();
        when(offerRepository.save(offer)).thenReturn(offer);
        Boolean result = offerService.createOffer(offer);
        assertTrue(result);
        verify(offerRepository, times(1)).save(offer);
    }

    @Test
    public void testCreateOfferReturnsFalseOnException() {
        Offer offer = new Offer();
        when(offerRepository.save(offer)).thenThrow(new RuntimeException());
        Boolean result = offerService.createOffer(offer);
        assertFalse(result);
        verify(offerRepository, times(1)).save(offer);
    }

    @Test
    public void testEditOfferWithExistingId() {
        Long id = 1L;
        Offer offer = new Offer();
        Offer existingOffer = new Offer();
        when(offerRepository.findById(id)).thenReturn(Optional.of(existingOffer));
        when(offerRepository.save(existingOffer)).thenReturn(existingOffer);
        Boolean result = offerService.editOffer(id, offer);
        assertTrue(result);
        verify(offerRepository, times(1)).findById(id);
        verify(offerRepository, times(1)).save(existingOffer);
    }

    @Test
    public void testEditOfferWithNonExistingId() {
        Long id = 1L;
        Offer offer = new Offer();
        when(offerRepository.findById(id)).thenReturn(Optional.empty());
        Boolean result = offerService.editOffer(id, offer);
        assertFalse(result);
        verify(offerRepository, times(1)).findById(id);
        verify(offerRepository, never()).save(any());
    }

    @Test
    public void testEditOfferReturnsFalseOnException() {
        Long id = 1L;
        Offer offer = new Offer();
        Offer existingOffer = new Offer();
        when(offerRepository.findById(id)).thenReturn(Optional.of(existingOffer));
        when(offerRepository.save(existingOffer)).thenThrow(new RuntimeException());
        Boolean result = offerService.editOffer(id, offer);
        assertFalse(result);
        verify(offerRepository, times(1)).findById(id);
        verify(offerRepository, times(1)).save(existingOffer);
    }
}