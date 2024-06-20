package com.find.your.house.findyourhouse.controller;

import com.find.your.house.findyourhouse.model.dto.OfferDto;
import com.find.your.house.findyourhouse.utils.services.FavoritesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favorites")
public class FavoritesController {

    @Autowired
    private FavoritesService favoriteService;

    @GetMapping("/{email}")
    public List<OfferDto> getFavorites(@PathVariable String email) {
        return favoriteService.getFavoritesByEmail(email);
    }
    @PostMapping("/{email}/{offerId}")
    public void addFavorite(@PathVariable String email, @PathVariable Long offerId) {
        favoriteService.addFavorite(email, offerId);
    }

    @DeleteMapping("/{email}/{offerId}")
    public void removeFavorite(@PathVariable String email, @PathVariable Long offerId) {
        favoriteService.removeFavorite(email, offerId);
    }
}
