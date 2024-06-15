package com.find.your.house.findyourhouse.utils.mappers;

import org.springframework.stereotype.Component;

import com.find.your.house.findyourhouse.model.dto.PhotoDto;
import com.find.your.house.findyourhouse.model.entities.Photo;

@Component
public class PhotoMapper {

    public Photo convertToPhoto(PhotoDto photoDto) {
        Photo photo = new Photo();
        photo.setFileName(photoDto.getFileName());
        photo.setFileType(photoDto.getFileType());
        photo.setFileSize(photoDto.getSize());
        return photo;
    }

    public PhotoDto convertToPhotoDto(Photo photo) {
        PhotoDto photoDto = new PhotoDto(photo.getFileName(), null, photo.getFileType(), photo.getFileSize());
        return photoDto;
    }
}
