package com.find.your.house.findyourhouse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.find.your.house.findyourhouse.model.dto.PaymentDto;
import com.find.your.house.findyourhouse.model.entities.User;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class PaymentDtoTest {

    private PaymentDto paymentDto;

    @BeforeEach
    public void setUp() {
        paymentDto = new PaymentDto();
    }

    @Test
    public void testGettersAndSetters() {
        paymentDto.setOrderID("12345");
        assertEquals("12345", paymentDto.getOrderID());
        paymentDto.setCheckoutUrl("http://checkout.url");
        assertEquals("http://checkout.url", paymentDto.getCheckoutUrl());
        User user = new User();
        paymentDto.setUser(user);
        assertEquals(user, paymentDto.getUser());
        paymentDto.setAmount(5000L);
        assertEquals(5000L, paymentDto.getAmount());
    }

    @Test
    public void testConvertToJson() {
        paymentDto.setOrderID("12345");
        paymentDto.setCheckoutUrl("http://checkout.url");
        User user = new User();
        paymentDto.setUser(user);
        paymentDto.setAmount(5000L);
        String json = paymentDto.convertToJson();
        assertNotNull(json);
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            PaymentDto deserializedPaymentDto = objectMapper.readValue(json, PaymentDto.class);
            assertEquals(paymentDto.getOrderID(), deserializedPaymentDto.getOrderID());
            assertEquals(paymentDto.getCheckoutUrl(), deserializedPaymentDto.getCheckoutUrl());
            assertEquals(paymentDto.getUser().getClass(), deserializedPaymentDto.getUser().getClass());
            assertEquals(paymentDto.getAmount(), deserializedPaymentDto.getAmount());
        } catch (JsonProcessingException e) {
            fail("Failed to deserialize JSON", e);
        }
    }
}
