package com.find.your.house.findyourhouse.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.find.your.house.findyourhouse.model.dto.TokenDto;
import com.find.your.house.findyourhouse.utils.services.TokenService;

@RestController
@RequestMapping("api/tokens")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
        RequestMethod.DELETE })
public class TokenController {

    private final TokenService tokenService;

    @Autowired
    public TokenController(TokenService tokenService) {
        this.tokenService = tokenService;
    }

    @PostMapping("/auth/refresh")
    public ResponseEntity<?> refreshTokens(@RequestBody String refreshToken) {
        Map<String, TokenDto> newTokens = tokenService.getRefreshedTokens(refreshToken);
        return newTokens != null ? ResponseEntity.status(HttpStatus.OK).body(newTokens)
                : ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

}
