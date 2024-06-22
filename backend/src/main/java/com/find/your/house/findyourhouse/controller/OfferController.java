package com.find.your.house.findyourhouse.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import com.find.your.house.findyourhouse.model.dto.*;
import com.find.your.house.findyourhouse.utils.services.*;
import com.find.your.house.findyourhouse.model.entities.Offer;
import com.find.your.house.findyourhouse.utils.mappers.OfferMapper;

@RestController
@RequestMapping("api/offers")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
        RequestMethod.DELETE })
public class OfferController {

    private final OfferService offerService;
    private final OfferMapper offerMapper;

    @Autowired
    public OfferController(OfferService offerService, OfferMapper offerMapper) {
        this.offerService = offerService;
        this.offerMapper = offerMapper;
    }

    @GetMapping
    private Optional<List<OfferDto>> getAllOffers() {
        List<OfferDto> offers = offerService.getAllOffers()
                .stream()
                .map(offerMapper::convertToOfferDto)
                .collect(Collectors.toList());
        return Optional.ofNullable(offers);
    }

    @GetMapping("/id/{id}")
    private ResponseEntity<?> getOfferById(@PathVariable Long id) {
        Offer offer = offerService.getOfferById(id).orElse(null);
        return offer != null ? ResponseEntity.status(HttpStatus.OK).body(offerMapper.convertToOfferDto(offer))
                : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PostMapping("/create")
    private ResponseEntity<?> createOffer(@RequestBody OfferDto offer) {
        Boolean isSavedProperly = offerService.createOffer(offerMapper.convertToOffer(offer));
        return isSavedProperly ? ResponseEntity.status(HttpStatus.CREATED).build()
                : ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @PatchMapping("/edit/{id}")
    private ResponseEntity<?> editOffer(@PathVariable Long id, @RequestBody OfferDto offerDto) {
        Boolean isEditedProperly = offerService.editOffer(id, offerMapper.convertToOffer(offerDto));
        return isEditedProperly ? ResponseEntity.status(HttpStatus.OK).build()
                : ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

}
