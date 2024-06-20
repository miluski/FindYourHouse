package com.find.your.house.findyourhouse.model.repositories;

import com.find.your.house.findyourhouse.model.entities.Favorites;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FavoritesRepository extends JpaRepository<Favorites, Long> {
    List<Favorites> findByUserEmail(String email);
}