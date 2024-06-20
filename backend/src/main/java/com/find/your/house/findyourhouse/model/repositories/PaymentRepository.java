package com.find.your.house.findyourhouse.model.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.find.your.house.findyourhouse.model.entities.Payment;
import com.find.your.house.findyourhouse.model.entities.User;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {
    @Transactional
    void deleteByUser(User user);
    List<Payment> findByUser(User user);
}
