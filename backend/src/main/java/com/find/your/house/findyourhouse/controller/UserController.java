package com.find.your.house.findyourhouse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.http.*;
import com.find.your.house.findyourhouse.model.*;
import com.find.your.house.findyourhouse.utils.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.authentication.*;

@RestController
@RequestMapping("api/users")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
        RequestMethod.DELETE })
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @GetMapping
    public Iterable<User> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/email/{email}")
    public Boolean getUserByEmail(@PathVariable String email) {
        return userRepository.findByEmail(email) != null ? true : false;
    }

    @SuppressWarnings("null")
    @GetMapping("/id/{id}")
    public Boolean getUserById(@PathVariable Long id) {
        return userRepository.findById(id) != null ? true : false;
    }

    @PreAuthorize(value = "")
    @PostMapping("/auth/register")
    public User registerUser(@RequestBody User user) {
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        return userRepository.save(user);
    }

    @PostMapping("/auth/login")
    public ResponseEntity<Token> loginUser(@RequestBody User user)
            throws Exception {
        try {
            Authentication authenticationRequest = new UsernamePasswordAuthenticationToken(user.getEmail(),
                    user.getPassword());
            Authentication authenticationResponse = this.authenticationManager.authenticate(authenticationRequest);
            if (authenticationResponse.isAuthenticated()) {
                final UserDetails userDetails = org.springframework.security.core.userdetails.User
                        .withUsername(user.getEmail())
                        .password(user.getPassword()).authorities("USER").build();
                final String token = jwtTokenUtil.generateToken(userDetails.getUsername());
                return ResponseEntity.ok(new Token(token));
            } else
                return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }

    @SuppressWarnings("null")
    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }

    @SuppressWarnings("null")
    @PatchMapping("/edit/{id}")
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
