package com.find.your.house.findyourhouse.model.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.find.your.house.findyourhouse.model.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    User findByEmail(String email);
    User findById(long id);
    void deleteById(long id);
}
