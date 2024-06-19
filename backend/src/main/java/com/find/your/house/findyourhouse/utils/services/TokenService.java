package com.find.your.house.findyourhouse.utils.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.find.your.house.findyourhouse.model.dto.TokenDto;
import com.find.your.house.findyourhouse.model.entities.User;
import com.find.your.house.findyourhouse.model.repositories.UserRepository;

@Service
public class TokenService {

    private final UserRepository userRepository;
    private final JwtTokenUtilService jwtTokenUtil;

    @Autowired
    public TokenService(UserRepository userRepository, JwtTokenUtilService jwtTokenUtil) {
        this.userRepository = userRepository;
        this.jwtTokenUtil = jwtTokenUtil;
    }

    public Map<String, TokenDto> getRefreshedTokens(String refreshToken) {
        try {
            User user = userRepository.findByEmail(jwtTokenUtil.getEmail(refreshToken));
            refreshToken = refreshToken.substring(0, refreshToken.length() - 1);
            if (user != null && refreshToken.equals(user.getRefreshToken())) {
                Map<String, TokenDto> newTokens = new HashMap<>();
                newTokens.put("accessToken", getToken(user.getEmail(), user.getPassword()));
                TokenDto newRefreshToken = getRefreshToken(user.getEmail(), user.getPassword());
                newTokens.put("refreshToken", newRefreshToken);
                user.setRefreshToken(newRefreshToken.getToken());
                userRepository.save(user);
                return newTokens;
            } else {
                return null;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public TokenDto getToken(String email, String password) {
        final UserDetails userDetails = org.springframework.security.core.userdetails.User
                .withUsername(email)
                .password(password).authorities("USER").build();
        final String token = jwtTokenUtil.generateToken(userDetails.getUsername());
        return new TokenDto(token);
    }

    public TokenDto getRefreshToken(String email, String password) {
        final UserDetails userDetails = org.springframework.security.core.userdetails.User
                .withUsername(email)
                .password(password).authorities("USER").build();
        final String token = jwtTokenUtil.generateRefreshToken(userDetails.getUsername());
        return new TokenDto(token);
    }
}
