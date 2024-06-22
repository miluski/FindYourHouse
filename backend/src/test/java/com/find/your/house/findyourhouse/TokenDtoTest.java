package com.find.your.house.findyourhouse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.find.your.house.findyourhouse.model.dto.TokenDto;

import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

public class TokenDtoTest {

    private TokenDto tokenDto;

    @BeforeEach
    public void setUp() {
        tokenDto = new TokenDto("sample-token-value");
    }

    @Test
    public void testConstructorAndGetters() {
        assertEquals("sample-token-value", tokenDto.getToken());
    }

    @Test
    public void testSetters() {
        tokenDto.setToken("new-token-value");
        assertEquals("new-token-value", tokenDto.getToken());
    }

    @Test
    public void testConvertToJson() {
        String json = tokenDto.convertToJson();
        assertNotNull(json);
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            TokenDto deserializedTokenDto = objectMapper.readValue(json, TokenDto.class);
            assertEquals(tokenDto.getToken(), deserializedTokenDto.getToken());
        } catch (JsonProcessingException e) {
            fail("Failed to deserialize JSON", e);
        }
    }
}
