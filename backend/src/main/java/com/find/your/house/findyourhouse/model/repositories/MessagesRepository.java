package com.find.your.house.findyourhouse.model.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.find.your.house.findyourhouse.model.entities.*;

public interface MessagesRepository extends JpaRepository<Message, Long> {
    @Transactional
    void deleteByUser(User user);
    List<Message> findAllByUser(User user);
}
