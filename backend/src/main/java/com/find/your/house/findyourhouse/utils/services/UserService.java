package com.find.your.house.findyourhouse.utils.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.find.your.house.findyourhouse.model.dto.TokenDto;
import com.find.your.house.findyourhouse.model.entities.User;
import com.find.your.house.findyourhouse.model.repositories.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final TokenService tokenService;

    @Autowired
    public UserService(UserRepository userRepository, AuthenticationManager authenticationManager,
            TokenService tokenService) {
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.tokenService = tokenService;
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public Boolean getUserByEmail(String email) {
        return userRepository.findByEmail(email) != null;
    }

    public Boolean getUserById(Long id) {
        return userRepository.findById(id).isPresent();
    }

    public Map<String, Object> getGoogleLoginUserObject(String googleToken) {
        Map<String, Object> body = getUserData(googleToken);
        Map<String, Object> responseMap = new HashMap<>();
        boolean isAuthenticated = isAuthenticated((String) body.get("email"), "");
        User user = isAuthenticated ? userRepository.findByEmail((String) body.get("email")) : saveUser(body);
        responseMap.putAll(this.saveToken(body));
        responseMap.put("email", user.getEmail());
        responseMap.put("name", user.getFirstName());
        responseMap.put("surname", user.getLastName());
        responseMap.put("phoneNumber", user.getPhoneNumber());
        responseMap.put("role", user.getRole());
        return responseMap;
    }

    public Map<String, Object> getLoginUserObject(User user) {
        Map<String, Object> responseMap = new HashMap<>();
        try {
            boolean isAuthenticated = isAuthenticated(user.getEmail(), user.getPassword());
            if (isAuthenticated) {
                TokenDto refreshToken = tokenService.getRefreshToken(user.getEmail(), user.getPassword());
                User foundedUser = userRepository.findByEmail(user.getEmail());
                responseMap.put("accessToken", tokenService.getToken(user.getEmail(), user.getPassword()));
                responseMap.put("refreshToken", refreshToken);
                responseMap.put("email", foundedUser.getEmail());
                responseMap.put("name", foundedUser.getFirstName());
                responseMap.put("surname", foundedUser.getLastName());
                responseMap.put("phoneNumber", foundedUser.getPhoneNumber());
                responseMap.put("role", foundedUser.getRole());
                User userToEdit = userRepository.findByEmail(user.getEmail());
                userToEdit.setRefreshToken(refreshToken.getToken());
                userRepository.save(userToEdit);
                return responseMap;
            } else {
                return null;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public Boolean isGoogleUserRegistered(String googleToken) {
        Map<String, Object> body = getUserData(googleToken);
        boolean isUserExists = userRepository.findByEmail((String) body.get("email")) != null;
        return isUserExists ? false : saveUser(body) != null ? true : false;
    }

    public Boolean isUserRegistered(User user) {
        try {
            user.setPassword(new Argon2PasswordEncoder(16, 32, 1, 4096, 3).encode(user.getPassword()));
            user.setRole("USER");
            user.setRefreshToken("");
            userRepository.save(user);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public Boolean editUser(Long id, User user) {
        try {
            Optional<User> userToEdit = userRepository.findById(id);
            if (userToEdit.isPresent()) {
                User finalUserToEdit = userToEdit.get();
                if (user.getFirstName() != null) {
                    finalUserToEdit.setFirstName(user.getFirstName());
                }
                if (user.getLastName() != null) {
                    finalUserToEdit.setLastName(user.getLastName());
                }
                if (user.getEmail() != null) {
                    finalUserToEdit.setEmail(user.getEmail());
                }
                if (user.getPhoneNumber() != null) {
                    finalUserToEdit.setPhoneNumber(user.getPhoneNumber());
                }
                if (user.getPassword() != null) {
                    finalUserToEdit.setPassword(user.getPassword());
                }
                userRepository.save(finalUserToEdit);
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public Boolean deleteUser(Long id) {
        try {
            Optional<User> user = userRepository.findById(id);
            if (user.isPresent()) {
                userRepository.deleteById(id);
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    private Map<String, TokenDto> saveToken(Map<String, Object> body) {
        Map<String, TokenDto> tokens = new HashMap<>();
        TokenDto refreshToken = tokenService.getRefreshToken((String) body.get("email"), "");
        tokens.put("accessToken", tokenService.getToken((String) body.get("email"), ""));
        tokens.put("refreshToken", refreshToken);
        User userToEdit = userRepository.findByEmail((String) body.get("email"));
        userToEdit.setRefreshToken(refreshToken.getToken());
        userRepository.save(userToEdit);
        return tokens;
    }

    private boolean isAuthenticated(String email, String password) {
        try {
            Authentication authenticationRequest = new UsernamePasswordAuthenticationToken(email,
                    password);
            this.authenticationManager.authenticate(authenticationRequest);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    private User saveUser(Map<String, Object> body) {
        User user = new User();
        user.setEmail((String) body.get("email"));
        user.setFirstName((String) body.get("given_name"));
        user.setLastName((String) body.get("family_name"));
        user.setPassword(new Argon2PasswordEncoder(16, 32, 1, 4096, 3).encode(""));
        user.setRole("GOOGLE_USER");
        user.setRefreshToken("");
        user.setPhoneNumber("");
        return userRepository.save(user);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public Map<String, Object> getUserData(String accessToken) {
        String endpoint = "https://www.googleapis.com/oauth2/v1/userinfo?access_token=" + accessToken;
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Map> response = restTemplate.getForEntity(endpoint, Map.class);
        return response.getBody();
    }
}
