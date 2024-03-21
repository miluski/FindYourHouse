package com.find.your.house.findyourhouse.controller;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.find.your.house.findyourhouse.model.Offer;

@Repository
public interface OfferRepository extends CrudRepository<Offer, Long>{
    Offer findById(long id);
}
