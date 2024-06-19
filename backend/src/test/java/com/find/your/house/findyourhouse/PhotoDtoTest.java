package com.find.your.house.findyourhouse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.find.your.house.findyourhouse.model.dto.PhotoDto;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class PhotoDtoTest {

    private PhotoDto photoDto;

    @BeforeEach
    public void setUp() {
        photoDto = new PhotoDto("image.jpg", "http://download.url/image.jpg", "image/jpeg", 1024);
    }

    @Test
    public void testConstructorAndGetters() {
        assertEquals("image.jpg", photoDto.getFileName());
        assertEquals("http://download.url/image.jpg", photoDto.getFileDownloadUri());
        assertEquals("image/jpeg", photoDto.getFileType());
        assertEquals(1024, photoDto.getSize());
    }

    @Test
    public void testSetters() {
        photoDto.setFileName("new_image.jpg");
        assertEquals("new_image.jpg", photoDto.getFileName());
        photoDto.setFileDownloadUri("http://download.url/new_image.jpg");
        assertEquals("http://download.url/new_image.jpg", photoDto.getFileDownloadUri());
        photoDto.setFileType("image/png");
        assertEquals("image/png", photoDto.getFileType());
        photoDto.setSize(2048);
        assertEquals(2048, photoDto.getSize());
    }

    @Test
    public void testConvertToJson() {
        String json = photoDto.convertToJson();
        assertNotNull(json);
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            PhotoDto deserializedPhotoDto = objectMapper.readValue(json, PhotoDto.class);
            assertEquals(photoDto.getFileName(), deserializedPhotoDto.getFileName());
            assertEquals(photoDto.getFileDownloadUri(), deserializedPhotoDto.getFileDownloadUri());
            assertEquals(photoDto.getFileType(), deserializedPhotoDto.getFileType());
            assertEquals(photoDto.getSize(), deserializedPhotoDto.getSize());
        } catch (JsonProcessingException e) {
            fail("Failed to deserialize JSON", e);
        }
    }
}
