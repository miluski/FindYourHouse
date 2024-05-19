package com.find.your.house.findyourhouse.controller;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.find.your.house.findyourhouse.model.Message;

@Repository
public interface MessageRepository extends CrudRepository<Message, Long>{
}
