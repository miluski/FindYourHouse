package com.find.your.house.findyourhouse;

import org.junit.jupiter.api.Test;

import com.find.your.house.findyourhouse.model.entities.Payment;
import com.find.your.house.findyourhouse.model.entities.User;

import static org.junit.jupiter.api.Assertions.*;

public class PaymentTest {

    @Test
    public void testGettersAndSetters() {
        Payment payment = new Payment();
        payment.setOrderID("ORD123");
        assertEquals("ORD123", payment.getOrderID());
        payment.setCheckoutUrl("https://example.com/checkout");
        assertEquals("https://example.com/checkout", payment.getCheckoutUrl());
        payment.setAmount(5000L);
        assertEquals(5000L, payment.getAmount());
        User user = new User();
        user.setFirstName("John");
        user.setLastName("Doe");
        payment.setUser(user);
        assertEquals(user, payment.getUser());
    }

    @Test
    public void testUserRelationship() {
        Payment payment = new Payment();
        assertNull(payment.getUser());
        User user = new User();
        user.setFirstName("Jane");
        user.setLastName("Smith");
        payment.setUser(user);
        assertEquals(user, payment.getUser());
    }
}
