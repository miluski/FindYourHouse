package com.find.your.house.findyourhouse.controller;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.find.your.house.findyourhouse.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long>{
    User findByEmail(String email);
    User findById(long id);
    void deleteById(long id);
}
