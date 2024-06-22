package com.find.your.house.findyourhouse;

import com.find.your.house.findyourhouse.model.dto.TokenDto;
import com.find.your.house.findyourhouse.model.entities.User;
import com.find.your.house.findyourhouse.model.repositories.UserRepository;
import com.find.your.house.findyourhouse.utils.services.*;

import org.junit.jupiter.api.*;
import org.mockito.*;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class TokenServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private JwtTokenUtilService jwtTokenUtil;

    @InjectMocks
    private TokenService tokenService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        tokenService = new TokenService(userRepository, jwtTokenUtil);
    }

    @Test
    public void testGetRefreshedTokens_UserDoesNotExist() {
        String refreshToken = "valid-refresh-token";
        String email = "user@example.com";
        when(jwtTokenUtil.getEmail(refreshToken)).thenReturn(email);
        when(userRepository.findByEmail(email)).thenReturn(null);
        Map<String, TokenDto> tokens = tokenService.getRefreshedTokens(refreshToken);
        assertNull(tokens);
        verify(userRepository, never()).save(any(User.class));
    }

    @Test
    public void testGetRefreshedTokens_TokenDoesNotMatch() {
        String email = "user@example.com";
        String password = "password";
        String refreshToken = "valid-refresh-token";
        User user = new User();
        user.setEmail(email);
        user.setPassword(password);
        user.setRefreshToken("different-refresh-token");
        when(jwtTokenUtil.getEmail(refreshToken)).thenReturn(email);
        when(userRepository.findByEmail(email)).thenReturn(user);
        Map<String, TokenDto> tokens = tokenService.getRefreshedTokens(refreshToken);
        assertNull(tokens);
        verify(userRepository, never()).save(any(User.class));
    }

    @Test
    public void testGetRefreshedTokens_ExceptionThrown() {
        String refreshToken = "valid-refresh-token";
        when(jwtTokenUtil.getEmail(refreshToken)).thenThrow(new RuntimeException("Error"));
        Map<String, TokenDto> tokens = tokenService.getRefreshedTokens(refreshToken);
        assertNull(tokens);
    }

    @Test
    void getRefreshedTokens_InvalidRefreshToken_ShouldReturnNull() {
        String refreshToken = "invalid_refresh_token";
        when(userRepository.findByEmail(any())).thenReturn(null);
        Map<String, TokenDto> newTokens = tokenService.getRefreshedTokens(refreshToken);
        assertNull(newTokens);
    }

}