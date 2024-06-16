package com.find.your.house.findyourhouse;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.find.your.house.findyourhouse.utils.SecurityConfig;

@SpringBootTest
@AutoConfigureMockMvc
class SecurityConfigTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void securityFilterChain_UnauthenticatedRequest_ReturnsUnauthorized() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/protected-endpoint"))
                .andExpect(MockMvcResultMatchers.status().isUnauthorized());
    }

    @Test
    @WithMockUser
    void authenticationManager_WithValidUser_ReturnsAuthenticationManager() {
        SecurityConfig securityConfig = new SecurityConfig();
        assertNotNull(securityConfig.authenticationManager());
    }

    @Test
    void passwordEncoder_WithValidPassword_ReturnsEncodedPassword() {
        SecurityConfig securityConfig = new SecurityConfig();
        PasswordEncoder passwordEncoder = securityConfig.passwordEncoder();
        String password = "password123";
        String encodedPassword = passwordEncoder.encode(password);
        assertTrue(passwordEncoder.matches(password, encodedPassword));
    }
}