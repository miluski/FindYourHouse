package com.find.your.house.findyourhouse.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import com.find.your.house.findyourhouse.model.*;
import com.find.your.house.findyourhouse.utils.JwtTokenUtil;

@RestController
@RequestMapping("api/tokens")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
        RequestMethod.DELETE })
public class TokenController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @PostMapping("/auth/refresh")
    public ResponseEntity<Map<String, Token>> refreshTokens(@RequestBody String refreshToken)
            throws Exception {
        try {
            User user = userRepository.findByEmail(jwtTokenUtil.getEmail(refreshToken));
            if (user != null && refreshToken.equals(user.getRefreshToken())) {
                Map<String, Token> newTokens = new HashMap<>();
                newTokens.put("accessToken", getToken(user.getEmail(), user.getPassword()));
                Token newRefreshToken = getRefreshToken(user.getEmail(), user.getPassword());
                newTokens.put("refreshToken", newRefreshToken);
                user.setRefreshToken(newRefreshToken.getToken());
                userRepository.save(user);
                return ResponseEntity.ok(newTokens);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }

    public Token getToken(String email, String password) {
        final UserDetails userDetails = org.springframework.security.core.userdetails.User
                .withUsername(email)
                .password(password).authorities("USER").build();
        final String token = jwtTokenUtil.generateToken(userDetails.getUsername());
        return new Token(token);
    }

    public Token getRefreshToken(String email, String password) {
        final UserDetails userDetails = org.springframework.security.core.userdetails.User
                .withUsername(email)
                .password(password).authorities("USER").build();
        final String token = jwtTokenUtil.generateRefreshToken(userDetails.getUsername());
        return new Token(token);
    }
}
