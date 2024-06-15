package com.find.your.house.findyourhouse.model.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.find.your.house.findyourhouse.model.entities.Offer;

@Repository
public interface OfferRepository extends JpaRepository<Offer, Long>{
    Offer findById(long id);
}
