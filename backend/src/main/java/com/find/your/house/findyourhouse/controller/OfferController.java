package com.find.your.house.findyourhouse.controller;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.find.your.house.findyourhouse.model.Offer;
import com.find.your.house.findyourhouse.model.UploadFileResponse;
import com.find.your.house.findyourhouse.utils.FileStorageService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("api/offers")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
        RequestMethod.DELETE })
public class OfferController {
    @Autowired
    private OfferRepository offerRepository;

    @Autowired
    FileStorageService fileStorageService;

    @GetMapping
    private Iterable<Offer> getAllOffers() {
        return offerRepository.findAll();
    }

    @GetMapping("/id/{id}")
    private Optional<Offer> getOfferById(@PathVariable Long id) {
        return offerRepository.findById(id);
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    private Offer createOffer(@RequestBody Offer offer) {
        offerRepository.save(offer);
        return offer;
    }

    @PostMapping("/upload")
    public ResponseEntity<?> handleFileUpload(@RequestParam("file") MultipartFile file) {
        try {
            String fileName = fileStorageService.storeFile(file);
            String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                    .path("/api/offers/download/")
                    .path(fileName)
                    .toUriString();
            return new ResponseEntity<>(new UploadFileResponse(fileName, fileDownloadUri,
                    file.getContentType(), file.getSize()), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/download/{filename:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String filename, HttpServletRequest request) {
        Resource resource = fileStorageService.loadFileAsResource(filename);
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
            contentType = "application/octet-stream";
        }
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

    @PatchMapping("/edit/{id}")
    private Offer editOffer(@PathVariable Long id, @RequestBody Offer offer) {
        Offer offerToEdit = offerRepository.findById(id).get();
        if (offer.getApartmentNumber() != null) {
            offerToEdit.setApartmentNumber(offer.getApartmentNumber());
        }
        if (offer.getArea() != null) {
            offerToEdit.setArea(offer.getArea());
        }
        if (offer.getCaution() != null) {
            offerToEdit.setCaution(offer.getCaution());
        }
        if (offer.getCity() != null) {
            offerToEdit.setCity(offer.getCity());
        }
        if (offer.getDescription() != null) {
            offerToEdit.setDescription(offer.getDescription());
        }
        if (offer.getExhibitorEmail() != null) {
            offerToEdit.setExhibitorEmail(offer.getExhibitorEmail());
        }
        if (offer.getExhibitorName() != null) {
            offerToEdit.setExhibitorName(offer.getExhibitorName());
        }
        if (offer.getExhibitorSurname() != null) {
            offerToEdit.setExhibitorSurname(offer.getExhibitorSurname());
        }
        if (offer.getHouseNumber() != null) {
            offerToEdit.setHouseNumber(offer.getHouseNumber());
        }
        if (offer.getOfferType() != null) {
            offerToEdit.setOfferType(offer.getOfferType());
        }
        if (offer.getExhibitorEmail() != null) {
            offerToEdit.setExhibitorEmail(offer.getExhibitorEmail());
        }
        if (offer.getPhotos() != null) {
            offerToEdit.setPhotos(offer.getPhotos());
        }
        if (offer.getPrice() != null) {
            offerToEdit.setArea(offer.getPrice());
        }
        if (offer.getPricePerQuadraMeter() != null) {
            offerToEdit.setArea(offer.getPricePerQuadraMeter());
        }
        if (offer.getPropertyType() != null) {
            offerToEdit.setPropertyType(offer.getPropertyType());
        }
        if (offer.getRent() != null) {
            offerToEdit.setRent(offer.getRent());
        }
        if (offer.getRoomCount() != null) {
            offerToEdit.setRoomCount(offer.getRoomCount());
        }
        if (offer.getStreet() != null) {
            offerToEdit.setStreet(offer.getStreet());
        }
        if (offer.getTitle() != null) {
            offerToEdit.setTitle(offer.getTitle());
        }
        offerRepository.save(offerToEdit);
        return offer;
    }
}
