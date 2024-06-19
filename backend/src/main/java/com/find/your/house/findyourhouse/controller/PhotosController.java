package com.find.your.house.findyourhouse.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.find.your.house.findyourhouse.model.dto.PhotoDto;
import com.find.your.house.findyourhouse.utils.services.PhotoStorageService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("api/photos")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
        RequestMethod.DELETE })
public class PhotosController {

    private final PhotoStorageService fileStorageService;

    @Autowired
    public PhotosController(PhotoStorageService fileStorageService) {
        this.fileStorageService = fileStorageService;
    }

    @GetMapping("/download/{filename:.+}")
    public ResponseEntity<?> downloadPhoto(@PathVariable String filename,
            HttpServletRequest request) {
        String contentType = null;
        try {
            Resource resource = fileStorageService.loadPhotoAsResource(filename);
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
            return ResponseEntity.status(HttpStatus.OK)
                    .contentType(MediaType.parseMediaType(contentType))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" +
                            resource.getFilename() + "\"")
                    .body(resource);
        } catch (IOException ex) {
            contentType = "application/octet-stream";
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @PostMapping("/upload")
    public ResponseEntity<?> uploadPhoto(@RequestParam("file") MultipartFile photo) {
        try {
            String fileName = fileStorageService.storePhoto(photo);
            String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                    .path("/api/photos/download/")
                    .path(fileName)
                    .toUriString();
            PhotoDto photoDto = new PhotoDto(fileName, fileDownloadUri, photo.getContentType(), photo.getSize());
            return ResponseEntity.status(HttpStatus.OK).body(photoDto);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

}
