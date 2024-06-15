package com.find.your.house.findyourhouse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.find.your.house.findyourhouse.model.dto.UserDto;

import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

public class UserDtoTest {

    private UserDto userDto;

    @BeforeEach
    public void setUp() {
        userDto = new UserDto();
        userDto.setFirstName("John");
        userDto.setLastName("Doe");
        userDto.setEmail("john.doe@example.com");
        userDto.setPassword("password");
        userDto.setPhoneNumber("+1234567890");
        userDto.setRole("user");
    }

    @Test
    public void testConstructorAndGetters() {
        assertEquals("John", userDto.getFirstName());
        assertEquals("Doe", userDto.getLastName());
        assertEquals("john.doe@example.com", userDto.getEmail());
        assertEquals("password", userDto.getPassword());
        assertEquals("+1234567890", userDto.getPhoneNumber());
        assertEquals("user", userDto.getRole());
    }

    @Test
    public void testSetters() {
        userDto.setFirstName("Jane");
        assertEquals("Jane", userDto.getFirstName());
        userDto.setLastName("Smith");
        assertEquals("Smith", userDto.getLastName());
        userDto.setEmail("jane.smith@example.com");
        assertEquals("jane.smith@example.com", userDto.getEmail());
        userDto.setPassword("newpassword");
        assertEquals("newpassword", userDto.getPassword());
        userDto.setPhoneNumber("+9876543210");
        assertEquals("+9876543210", userDto.getPhoneNumber());
        userDto.setRole("admin");
        assertEquals("admin", userDto.getRole());
    }

    @Test
    public void testConvertToJson() {
        String json = userDto.convertToJson();
        assertNotNull(json);
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            UserDto deserializedUserDto = objectMapper.readValue(json, UserDto.class);
            assertEquals(userDto.getFirstName(), deserializedUserDto.getFirstName());
            assertEquals(userDto.getLastName(), deserializedUserDto.getLastName());
            assertEquals(userDto.getEmail(), deserializedUserDto.getEmail());
            assertEquals(userDto.getPassword(), deserializedUserDto.getPassword());
            assertEquals(userDto.getPhoneNumber(), deserializedUserDto.getPhoneNumber());
            assertEquals(userDto.getRole(), deserializedUserDto.getRole());
        } catch (JsonProcessingException e) {
            fail("Failed to deserialize JSON", e);
        }
    }
}
