package com.find.your.house.findyourhouse;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.*;

import org.junit.jupiter.api.*;
import org.mockito.*;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.*;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.find.your.house.findyourhouse.controller.*;
import com.find.your.house.findyourhouse.model.dto.OfferDto;
import com.find.your.house.findyourhouse.model.entities.Offer;
import com.find.your.house.findyourhouse.utils.mappers.*;
import com.find.your.house.findyourhouse.utils.services.*;

@WebMvcTest(OfferController.class)
public class OfferControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private OfferService offerService;

    @MockBean
    private OfferMapper offerMapper;

    @InjectMocks
    private OfferController offerController;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
        offerService = Mockito.mock(OfferService.class);
        offerMapper = Mockito.mock(OfferMapper.class);
        offerController = new OfferController(offerService, offerMapper);
        mockMvc = MockMvcBuilders.standaloneSetup(offerController).build();
    }

    @Test
    public void testGetAllOffers() throws Exception {
        Offer offer1 = new Offer();
        Offer offer2 = new Offer();
        ObjectMapper objectMapper = new ObjectMapper();
        List<Offer> offers = Arrays.asList(offer1, offer2);
        OfferDto offerDto1 = new OfferDto();
        OfferDto offerDto2 = new OfferDto();
        List<OfferDto> expectedOfferDtos = Arrays.asList(offerDto1, offerDto2);
        when(offerService.getAllOffers()).thenReturn(offers);
        when(offerMapper.convertToOfferDto(offer1)).thenReturn(offerDto1);
        when(offerMapper.convertToOfferDto(offer2)).thenReturn(offerDto2);
        mockMvc.perform(get("/api/offers"))
                .andExpect(status().isOk())
                .andExpect(content().json(objectMapper.writeValueAsString(expectedOfferDtos)));
    }

    @Test
    public void testGetOfferById() throws Exception {
        Long id = 1L;
        Offer offer = new Offer();
        OfferDto expectedOfferDto = new OfferDto();
        when(offerService.getOfferById(id)).thenReturn(Optional.of(offer));
        when(offerMapper.convertToOfferDto(offer)).thenReturn(expectedOfferDto);
        mockMvc.perform(get("/api/offers/id/" + id))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedOfferDto.convertToJson()));
    }

    @Test
    public void testGetOfferByIdWithNonExistingId() throws Exception {
        Long id = 1L;
        when(offerService.getOfferById(id)).thenReturn(Optional.empty());
        mockMvc.perform(get("/api/offers/id/" + id))
                .andExpect(status().isNotFound());
    }

    @Test
    public void testCreateOffer() throws Exception {
        OfferDto offerDto = new OfferDto();
        Offer offer = new Offer();
        when(offerMapper.convertToOffer(any())).thenReturn(offer);
        when(offerService.createOffer(any())).thenReturn(true);
        mockMvc.perform(post("/api/offers/create")
                .contentType(MediaType.APPLICATION_JSON)
                .content(offerDto.convertToJson()))
                .andExpect(status().isCreated());
    }

    @Test
    public void testCreateOfferReturnsBadRequest() throws Exception {
        OfferDto offerDto = new OfferDto();
        Offer offer = new Offer();
        when(offerMapper.convertToOffer(any())).thenReturn(offer);
        when(offerService.createOffer(any())).thenReturn(false);
        mockMvc.perform(post("/api/offers/create")
                .contentType(MediaType.APPLICATION_JSON)
                .content(offerDto.convertToJson()))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void testEditOffer() throws Exception {
        Long id = 1L;
        OfferDto offerDto = new OfferDto();
        Offer offer = new Offer();
        when(offerMapper.convertToOffer(any())).thenReturn(offer);
        when(offerService.editOffer(any(), any())).thenReturn(true);
        mockMvc.perform(patch("/api/offers/edit/" + id)
                .contentType(MediaType.APPLICATION_JSON)
                .content(offerDto.convertToJson()))
                .andExpect(status().isOk());
    }

    @Test
    public void testEditOfferReturnsBadRequest() throws Exception {
        Long id = 1L;
        OfferDto offerDto = new OfferDto();
        Offer offer = new Offer();
        when(offerMapper.convertToOffer(any())).thenReturn(offer);
        when(offerService.editOffer(any(), any())).thenReturn(false);
        mockMvc.perform(patch("/api/offers/edit/" + id)
                .contentType(MediaType.APPLICATION_JSON)
                .content(offerDto.convertToJson()))
                .andExpect(status().isBadRequest());
    }
}