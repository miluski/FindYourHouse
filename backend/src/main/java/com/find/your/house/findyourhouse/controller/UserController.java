package com.find.your.house.findyourhouse.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.http.*;
import com.find.your.house.findyourhouse.model.*;
import com.find.your.house.findyourhouse.utils.*;
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

    @GetMapping("/id/{id}")
    public Boolean getUserById(@PathVariable Long id) {
        return userRepository.findById(id) != null ? true : false;
    }

    @PostMapping("/auth/google/login")
    public ResponseEntity<Token> proxyLoginGoogleApi(@RequestBody String accessToken) {
        Map<String, Object> body = getUserData(accessToken);
        boolean isAuthenticated = isAuthenticated((String) body.get("email"), "");
        if (isAuthenticated) {
            return ResponseEntity.ok(getToken((String) body.get("email"), ""));
        } else {
            saveUser(body);
            isAuthenticated = isAuthenticated((String) body.get("email"), "");
            return isAuthenticated == true ? ResponseEntity.ok(getToken((String) body.get("email"), ""))
                    : ResponseEntity.status(HttpStatus.ACCEPTED).body(new Token((String) body.get("email")));
        }
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
        return userRepository.save(user) != null ? true : false;
    }

    @PostMapping("/auth/login")
    public ResponseEntity<Token> loginUser(@RequestBody User user)
            throws Exception {
        try {
            boolean isAuthenticated = isAuthenticated(user.getEmail(), user.getPassword())
                    && user.getRole() != "GOOGLE_USER";
            return isAuthenticated == true ? ResponseEntity.ok(getToken(user.getEmail(), user.getPassword()))
                    : ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
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

    private Token getToken(String email, String password) {
        final UserDetails userDetails = org.springframework.security.core.userdetails.User
                .withUsername(email)
                .password(password).authorities("USER").build();
        final String token = jwtTokenUtil.generateToken(userDetails.getUsername());
        return new Token(token);
    }

    private User saveUser(Map<String, Object> body) {
        User user = new User();
        user.setEmail((String) body.get("email"));
        user.setFirstName((String) body.get("given_name"));
        user.setLastName((String) body.get("family_name"));
        user.setPassword(new BCryptPasswordEncoder().encode(""));
        user.setRole("GOOGLE_USER");
        user.setPhoneNumber("");
        return userRepository.save(user);
    }
}
