package com.find.your.house.findyourhouse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.find.your.house.findyourhouse.model.dto.TicketDto;
import com.find.your.house.findyourhouse.model.entities.Offer;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class TicketDtoTest {

    private TicketDto ticketDto;

    @BeforeEach
    public void setUp() {
        ticketDto = new TicketDto();
        ticketDto.setTopic("Support");
        ticketDto.setClientName("John Doe");
        ticketDto.setCategory("Technical");
        ticketDto.setDate("2024-06-15");
        Offer offer = new Offer();
        offer.setTitle("Sample Offer");
        ticketDto.setOffer(offer);
    }

    @Test
    public void testGettersAndSetters() {
        assertEquals("Support", ticketDto.getTopic());
        assertEquals("John Doe", ticketDto.getClientName());
        assertEquals("Technical", ticketDto.getCategory());
        assertEquals("2024-06-15", ticketDto.getDate());
        Offer offer = ticketDto.getOffer();
        assertNotNull(offer);
        assertEquals("Sample Offer", offer.getTitle());
    }

    @Test
    public void testConvertToJson() {
        String json = ticketDto.convertToJson();
        assertNotNull(json);
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            TicketDto deserializedTicketDto = objectMapper.readValue(json, TicketDto.class);
            assertEquals(ticketDto.getTopic(), deserializedTicketDto.getTopic());
            assertEquals(ticketDto.getClientName(), deserializedTicketDto.getClientName());
            assertEquals(ticketDto.getCategory(), deserializedTicketDto.getCategory());
            assertEquals(ticketDto.getDate(), deserializedTicketDto.getDate());
            Offer offer = ticketDto.getOffer();
            Offer deserializedOffer = deserializedTicketDto.getOffer();
            assertEquals(offer.getTitle(), deserializedOffer.getTitle());
        } catch (JsonProcessingException e) {
            fail("Failed to deserialize JSON", e);
        }
    }
}
