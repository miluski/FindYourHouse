package com.find.your.house.findyourhouse;

import com.find.your.house.findyourhouse.controller.TokenController;
import com.find.your.house.findyourhouse.model.dto.TokenDto;
import com.find.your.house.findyourhouse.utils.services.TokenService;
import org.junit.jupiter.api.*;
import org.mockito.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.*;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Map;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.hamcrest.Matchers.is;

@WebMvcTest(TokenController.class)
class TokenControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TokenService tokenService;

    @InjectMocks
    private TokenController tokenController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        tokenService = Mockito.mock(TokenService.class);
        tokenController = new TokenController(tokenService);
        mockMvc = MockMvcBuilders.standaloneSetup(tokenController).build();
    }

    @Test
    void refreshTokens_ValidRefreshToken_ShouldReturnNewTokens() throws Exception {
        String refreshToken = "valid_refresh_token";
        Map<String, TokenDto> newTokens = Map.of("accessToken", new TokenDto("new_access_token"),
                "refreshToken", new TokenDto("new_refresh_token"));
        when(tokenService.getRefreshedTokens(any())).thenReturn(newTokens);
        mockMvc.perform(post("/api/tokens/auth/refresh")
                .contentType(MediaType.APPLICATION_JSON)
                .content(refreshToken))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.accessToken.token", is("new_access_token")))
                .andExpect(jsonPath("$.refreshToken.token", is("new_refresh_token")));
    }

    @Test
    void refreshTokens_InvalidRefreshToken_ShouldReturnForbidden() throws Exception {
        String refreshToken = "invalid_refresh_token";
        when(tokenService.getRefreshedTokens(any())).thenReturn(null);
        mockMvc.perform(post("/api/tokens/auth/refresh")
                .contentType(MediaType.APPLICATION_JSON)
                .content(refreshToken))
                .andExpect(status().isForbidden());
    }
}