package com.find.your.house.findyourhouse;

import org.junit.jupiter.api.*;
import org.mockito.*;
import org.springframework.security.authentication.AuthenticationManager;

import com.find.your.house.findyourhouse.model.entities.User;
import com.find.your.house.findyourhouse.model.repositories.UserRepository;
import com.find.your.house.findyourhouse.utils.services.*;

import java.util.*;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private AuthenticationManager authenticationManager;

    @InjectMocks
    private UserService userService;
    @InjectMocks
    private TokenService tokenService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getUsers_ShouldReturnListOfUsers() {
        List<User> users = List.of(new User(), new User());
        when(userRepository.findAll()).thenReturn(users);
        List<User> result = userService.getUsers();
        Assertions.assertEquals(users, result);
    }

    @Test
    void getUserByEmail_ExistingEmail_ShouldReturnTrue() {
        String email = "test@example.com";
        when(userRepository.findByEmail(email)).thenReturn(new User());
        boolean result = userService.getUserByEmail(email);
        Assertions.assertTrue(result);
    }

    @Test
    void getUserByEmail_NonExistingEmail_ShouldReturnFalse() {
        String email = "test@example.com";
        when(userRepository.findByEmail(email)).thenReturn(null);
        boolean result = userService.getUserByEmail(email);
        Assertions.assertFalse(result);
    }

    @Test
    void getUserById_ExistingId_ShouldReturnTrue() {
        Long id = 1L;
        when(userRepository.findById(any())).thenReturn(Optional.of(new User()));
        boolean result = userService.getUserById(id);
        Assertions.assertTrue(result);
    }

    @Test
    void getUserById_NonExistingId_ShouldReturnFalse() {
        Long id = 1L;
        when(userRepository.findById(id)).thenReturn(Optional.empty());
        boolean result = userService.getUserById(id);
        Assertions.assertFalse(result);
    }

    @Test
    void getGoogleLoginUserObject_ValidToken_ShouldReturnUserObject() {
        userService = Mockito.mock(UserService.class);
        String googleToken = "valid_token";
        Map<String, Object> userData = new HashMap<>();
        userData.put("email", "test@example.com");
        userData.put("given_name", "John");
        userData.put("family_name", "Doe");
        when(userService.getUserData(any())).thenReturn(userData);
        when(userRepository.findByEmail("test@example.com")).thenReturn(null);
        User savedUser = new User();
        savedUser.setEmail("test@example.com");
        savedUser.setFirstName("John");
        savedUser.setLastName("Doe");
        when(userRepository.save(any(User.class))).thenReturn(savedUser);
        Map<String, Object> result = userService.getGoogleLoginUserObject(googleToken);
        Assertions.assertNotNull(result);
    }

    @Test
    void isGoogleUserRegistered_ExistingUser_ShouldReturnFalse() {
        userService = Mockito.mock(UserService.class);
        String googleToken = "valid_token";
        Map<String, Object> userData = new HashMap<>();
        userData.put("email", "test@example.com");
        when(userService.getGoogleLoginUserObject(googleToken)).thenReturn(userData);
        when(userRepository.findByEmail("test@example.com")).thenReturn(new User());
        boolean result = userService.isGoogleUserRegistered(googleToken);
        Assertions.assertFalse(result);
    }

    @Test
    void isGoogleUserRegistered_NonExistingUser_ShouldReturnFalseWithNotValidToken() {
        userService = Mockito.mock(UserService.class);
        String googleToken = "valid_token";
        Map<String, Object> userData = new HashMap<>();
        userData.put("email", "test@example.com");
        when(userService.getGoogleLoginUserObject(googleToken)).thenReturn(userData);
        when(userRepository.findByEmail("test@example.com")).thenReturn(null);
        when(userRepository.save(any(User.class))).thenReturn(new User());
        boolean result = userService.isGoogleUserRegistered(googleToken);
        Assertions.assertFalse(result);
    }

    @Test
    void isUserRegistered_ExceptionThrown_ShouldReturnFalse() {
        User user = new User();
        when(userRepository.save(user)).thenThrow(new RuntimeException());
        boolean result = userService.isUserRegistered(user);
        Assertions.assertFalse(result);
    }

    @Test
    void editUser_ExistingUser_ShouldReturnTrue() {
        Long id = 1L;
        User user = new User();
        user.setFirstName("John");
        when(userRepository.findById(id)).thenReturn(Optional.of(new User()));
        when(userRepository.save(any(User.class))).thenReturn(new User());
        boolean result = userService.editUser(id, user);
        Assertions.assertTrue(result);
    }

    @Test
    void editUser_NonExistingUser_ShouldReturnFalse() {
        Long id = 1L;
        User user = new User();
        user.setFirstName("John");
        when(userRepository.findById(id)).thenReturn(Optional.empty());
        boolean result = userService.editUser(id, user);
        Assertions.assertFalse(result);
    }

    @Test
    void deleteUser_ExistingUser_ShouldReturnTrue() {
        Long id = 1L;
        when(userRepository.findById(id)).thenReturn(Optional.of(new User()));
        boolean result = userService.deleteUser(id);
        Assertions.assertTrue(result);
    }

    @Test
    void deleteUser_NonExistingUser_ShouldReturnFalse() {
        Long id = 1L;
        when(userRepository.findById(id)).thenReturn(Optional.empty());
        boolean result = userService.deleteUser(id);
        Assertions.assertFalse(result);
    }

}