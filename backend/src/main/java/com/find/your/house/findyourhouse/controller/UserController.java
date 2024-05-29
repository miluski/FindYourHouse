package com.find.your.house.findyourhouse.controller;

import java.io.IOException;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.http.*;
import com.find.your.house.findyourhouse.model.*;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.security.authentication.*;

@RestController
@RequestMapping("api/users")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
        RequestMethod.DELETE })
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenController tokenController;

    @GetMapping
    public Iterable<User> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/email/{email}")
    public Boolean getUserByEmail(@PathVariable String email) {
        return userRepository.findByEmail(email) != null;
    }

    @GetMapping("/id/{id}")
    public Boolean getUserById(@PathVariable Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.isPresent();
    }

    @PostMapping("/auth/google/login")
    public ResponseEntity<Map<String, Token>> proxyLoginGoogleApi(@RequestBody String accessToken) throws IOException {
        Map<String, Object> body = getUserData(accessToken);
        boolean isAuthenticated = isAuthenticated((String) body.get("email"), "");
        if (isAuthenticated) {
            Map<String, Token> tokens = this.saveToken(body);
            return ResponseEntity.ok(tokens);
        } else {
            saveUser(body);
            isAuthenticated = isAuthenticated((String) body.get("email"), "");
            Map<String, Token> tokens = this.saveToken(body);
            return isAuthenticated ? ResponseEntity.ok(tokens)
                    : ResponseEntity.status(HttpStatus.ACCEPTED).body(tokens);
        }
    }

    private Map<String, Token> saveToken(Map<String, Object> body) {
        Map<String, Token> tokens = new HashMap<>();
        Token refreshToken = tokenController.getRefreshToken((String) body.get("email"), "");
        tokens.put("accessToken", tokenController.getToken((String) body.get("email"), ""));
        tokens.put("refreshToken", refreshToken);
        User userToEdit = userRepository.findByEmail((String) body.get("email"));
        userToEdit.setRefreshToken(refreshToken.getToken());
        userRepository.save(userToEdit);
        return tokens;
    }

    @PostMapping("/auth/google/register")
    public boolean proxyRegisterGoogleApi(@RequestBody String accessToken) {
        Map<String, Object> body = getUserData(accessToken);
        boolean isUserExists = userRepository.findByEmail((String) body.get("email")) != null;
        return isUserExists ? false : saveUser(body) != null ? true : false;
    }

    @PostMapping("/auth/register")
    public boolean registerUser(@RequestBody User user) {
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        user.setRole("USER");
        user.setRefreshToken("");
        return userRepository.save(user) != null ? true : false;
    }

    @PostMapping("/auth/login")
    public ResponseEntity<Map<String, Token>> loginUser(@RequestBody User user)
            throws Exception {
        try {
            Map<String, Token> tokens = new HashMap<>();
            boolean isAuthenticated = isAuthenticated(user.getEmail(), user.getPassword());
            if (isAuthenticated) {
                Token refreshToken = tokenController.getRefreshToken(user.getEmail(), user.getPassword());
                tokens.put("accessToken", tokenController.getToken(user.getEmail(), user.getPassword()));
                tokens.put("refreshToken", refreshToken);
                User userToEdit = userRepository.findByEmail(user.getEmail());
                userToEdit.setRefreshToken(refreshToken.getToken());
                userRepository.save(userToEdit);
                return ResponseEntity.ok(tokens);
            } else {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
            }
        } catch (Exception e) {
            Map<String, Token> tokens = new HashMap<>();
            tokens.put(e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(tokens);
        }
    }

    @DeleteMapping("/delete/{id}")
    public Boolean deleteUser(@PathVariable Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            userRepository.deleteById(id);
            return true;
        } else
            return false;
    }

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

    @SuppressWarnings({ "rawtypes", "unchecked" })
    private Map<String, Object> getUserData(String accessToken) {
        String endpoint = "https://www.googleapis.com/oauth2/v1/userinfo?access_token=" + accessToken;
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Map> response = restTemplate.getForEntity(endpoint, Map.class);
        return response.getBody();
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
        user.setPassword(new BCryptPasswordEncoder().encode(""));
        user.setRole("GOOGLE_USER");
        user.setRefreshToken("");
        user.setPhoneNumber("");
        return userRepository.save(user);
    }
}
