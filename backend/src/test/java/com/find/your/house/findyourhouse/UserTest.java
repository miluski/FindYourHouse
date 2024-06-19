package com.find.your.house.findyourhouse;

import org.junit.jupiter.api.Test;

import com.find.your.house.findyourhouse.model.entities.User;

import static org.junit.jupiter.api.Assertions.*;

public class UserTest {

    @Test
    public void testGettersAndSetters() {
        User user = new User();
        user.setFirstName("John");
        assertEquals("John", user.getFirstName());
        user.setLastName("Doe");
        assertEquals("Doe", user.getLastName());
        user.setEmail("john.doe@example.com");
        assertEquals("john.doe@example.com", user.getEmail());
        user.setPhoneNumber("+1234567890");
        assertEquals("+1234567890", user.getPhoneNumber());
        user.setPassword("password123");
        assertEquals("password123", user.getPassword());
        user.setRole("ROLE_USER");
        assertEquals("ROLE_USER", user.getRole());
        user.setRefreshToken("refresh_token_value");
        assertEquals("refresh_token_value", user.getRefreshToken());
    }
}
