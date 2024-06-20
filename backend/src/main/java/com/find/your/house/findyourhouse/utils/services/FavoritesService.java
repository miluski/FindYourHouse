package com.find.your.house.findyourhouse.utils.services;

import com.find.your.house.findyourhouse.model.dto.OfferDto;
import com.find.your.house.findyourhouse.model.entities.Favorites;
import com.find.your.house.findyourhouse.model.entities.Offer;
import com.find.your.house.findyourhouse.model.entities.User;
import com.find.your.house.findyourhouse.model.repositories.FavoritesRepository;
import com.find.your.house.findyourhouse.model.repositories.OfferRepository;
import com.find.your.house.findyourhouse.model.repositories.UserRepository;
import com.find.your.house.findyourhouse.utils.mappers.OfferMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FavoritesService {

    @Autowired
    private FavoritesRepository favoriteRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OfferRepository offerRepository;

    @Autowired
    private FavoritesRepository favoritesRepository;

    @Autowired
    private OfferMapper offerMapper;

    public List<OfferDto> getFavoritesByEmail(String email) {
        List<Favorites> favorites = favoritesRepository.findByUserEmail(email);
        return favorites.stream()
                .map(fav -> offerMapper.convertToOfferDto(fav.getOffer()))
                .collect(Collectors.toList());
    }

    public void addFavorite(String email, Long offerId) {
        User user = userRepository.findByEmail(email);
        Offer offer = offerRepository.findById(offerId).orElseThrow();
        Favorites favorite = new Favorites();
        favorite.setUser(user);
        favorite.setOffer(offer);
        favoriteRepository.save(favorite);
    }

    public void removeFavorite(String email, Long offerId) {
        List<Favorites> favorites = favoriteRepository.findByUserEmail(email);
        favorites.stream()
                .filter(fav -> fav.getOffer().getId().equals(offerId))
                .findFirst()
                .ifPresent(favoriteRepository::delete);
    }
}
