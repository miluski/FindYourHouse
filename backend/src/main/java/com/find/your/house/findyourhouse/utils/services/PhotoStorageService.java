package com.find.your.house.findyourhouse.utils.services;

import org.springframework.core.io.*;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.net.MalformedURLException;
import java.nio.file.*;
import java.util.UUID;

@Service
public class PhotoStorageService {
    private final Path fileStorageLocation = Paths.get("C:/photos");

    public String storePhoto(MultipartFile photo) {
        try {
            if (photo == null) {
                throw new RuntimeException("Photo is null!");
            }
            String fileName = UUID.randomUUID().toString() + "_" + photo.getOriginalFilename();
            if (fileName.contains("..")) {
                throw new RuntimeException("Filename contains invalid path sequence " + fileName);
            }
            Path targetLocation = this.fileStorageLocation.resolve(fileName);
            Files.copy(photo.getInputStream(), targetLocation);
            return fileName;
        } catch (Exception ex) {
            throw new RuntimeException("Could not store photo. Please try again!", ex);
        }
    }

    public Resource loadPhotoAsResource(String fileName) {
        try {
            Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());
            if (resource.exists()) {
                return resource;
            } else {
                throw new RuntimeException("Photo not found " + fileName);
            }
        } catch (MalformedURLException ex) {
            throw new RuntimeException("Photo not found " + fileName, ex);
        }
    }
}