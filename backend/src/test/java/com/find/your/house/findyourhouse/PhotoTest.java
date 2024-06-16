package com.find.your.house.findyourhouse;

import org.junit.jupiter.api.Test;

import com.find.your.house.findyourhouse.model.entities.Photo;

import static org.junit.jupiter.api.Assertions.*;

public class PhotoTest {

    @Test
    public void testGettersAndSetters() {
        Photo photo = new Photo();
        photo.setId(1L);
        assertEquals(1L, photo.getId());
        photo.setFileName("test.jpg");
        assertEquals("test.jpg", photo.getFileName());
        photo.setFileType("image/jpeg");
        assertEquals("image/jpeg", photo.getFileType());
        photo.setFileSize(1024L);
        assertEquals(1024L, photo.getFileSize());
        photo.setFilePath("/path/to/file.jpg");
        assertEquals("/path/to/file.jpg", photo.getFilePath());
    }
    
}
