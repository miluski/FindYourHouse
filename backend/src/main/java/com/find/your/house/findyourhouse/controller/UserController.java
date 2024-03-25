package com.find.your.house.findyourhouse.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.find.your.house.findyourhouse.model.User;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public Iterable<User> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/email/{email}")
    public User getUserByEmail(@PathVariable String email) {
        return userRepository.findByEmail(email);
    }

    @SuppressWarnings("null")
    @GetMapping("/id/{id}")
    public Optional<User> getUserById(@PathVariable Long id) {
        return userRepository.findById(id);
    }

    @SuppressWarnings("null")
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @SuppressWarnings("null")
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }

    @SuppressWarnings("null")
    @PatchMapping("/{id}")
    public void editUser(@PathVariable Long id, @RequestBody User user) {
        User userToEdit = userRepository.findById(id).get();
        if (user.getFirstName() != null) {
            userToEdit.setFirstName(user.getFirstName());
        }
        if (user.getLastName() != null) {
            userToEdit.setLastName(user.getLastName());
        }
        if (user.getEmail() != null) {
            userToEdit.setEmail(user.getEmail());
        }
        if (user.getPhoneNumber() != null) {
            userToEdit.setPhoneNumber(user.getPhoneNumber());
        }
        if (user.getPassword() != null) {
            userToEdit.setPassword(user.getPassword());
        }
        userRepository.save(userToEdit);
    }

}
