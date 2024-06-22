package com.find.your.house.findyourhouse;

import com.find.your.house.findyourhouse.model.dto.PhotoDto;
import com.find.your.house.findyourhouse.model.entities.Photo;
import com.find.your.house.findyourhouse.utils.mappers.PhotoMapper;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class PhotoMapperTest {

    private final PhotoMapper photoMapper = new PhotoMapper();

    @Test
    public void testConvertToPhoto() {
        PhotoDto photoDto = new PhotoDto("example.jpg", "/downloads/example.jpg", "image/jpeg", 1024);
        Photo photo = photoMapper.convertToPhoto(photoDto);
        assertEquals(photoDto.getFileName(), photo.getFileName());
        assertEquals(photoDto.getFileType(), photo.getFileType());
        assertEquals(photoDto.getSize(), photo.getFileSize());
    }

    @Test
    public void testConvertToPhotoDto() {
        Photo photo = new Photo();
        photo.setFileName("example.jpg");
        photo.setFileType("image/jpeg");
        photo.setFileSize(2048);
        PhotoDto photoDto = photoMapper.convertToPhotoDto(photo);
        assertEquals(photo.getFileName(), photoDto.getFileName());
        assertEquals(photo.getFileType(), photoDto.getFileType());
        assertEquals(photo.getFileSize(), photoDto.getSize());
    }
}