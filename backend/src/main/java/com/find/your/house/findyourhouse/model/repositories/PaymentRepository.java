package com.find.your.house.findyourhouse.model.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.find.your.house.findyourhouse.model.entities.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {

}
