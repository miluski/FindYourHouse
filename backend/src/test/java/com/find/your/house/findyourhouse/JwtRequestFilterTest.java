package com.find.your.house.findyourhouse;

import com.find.your.house.findyourhouse.utils.JwtRequestFilter;
import com.find.your.house.findyourhouse.utils.services.*;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import org.junit.jupiter.api.*;
import org.mockito.*;
import org.springframework.security.core.userdetails.UserDetails;

import static org.mockito.Mockito.*;

class JwtRequestFilterTest {

    @Mock
    private JwtTokenUtilService jwtTokenUtil;

    @Mock
    private UserDetailsServiceImpl userDetailsServiceImpl;

    @Mock
    private HttpServletRequest request;

    @Mock
    private HttpServletResponse response;

    @Mock
    private FilterChain filterChain;

    @InjectMocks
    private JwtRequestFilter jwtRequestFilter;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void doFilterInternal_ValidToken_ShouldSetAuthentication() throws ServletException, java.io.IOException {
        String token = "valid_token";
        String username = "test@example.com";
        UserDetails userDetails = mock(UserDetails.class);
        when(request.getHeader("Authorization")).thenReturn("Bearer " + token);
        when(jwtTokenUtil.getEmail(token)).thenReturn(username);
        when(userDetailsServiceImpl.loadUserByUsername(username)).thenReturn(userDetails);
        when(jwtTokenUtil.validateToken(token, userDetails.getUsername())).thenReturn(true);
        jwtRequestFilter.doFilterInternal(request, response, filterChain);
        verify(userDetailsServiceImpl, times(1)).loadUserByUsername(username);
        verify(jwtTokenUtil, times(1)).validateToken(token, userDetails.getUsername());
        verify(filterChain, times(1)).doFilter(request, response);
        verify(response, never()).setStatus(HttpServletResponse.SC_UNAUTHORIZED);
    }

    @Test
    void doFilterInternal_NoToken_ShouldContinueFilterChain() throws ServletException, java.io.IOException {
        when(request.getHeader("Authorization")).thenReturn(null);
        jwtRequestFilter.doFilterInternal(request, response, filterChain);
        verify(userDetailsServiceImpl, never()).loadUserByUsername(anyString());
        verify(jwtTokenUtil, never()).validateToken(anyString(), anyString());
        verify(filterChain, times(1)).doFilter(request, response);
        verify(request, times(1)).getHeader("Authorization");
        verify(response, never()).setStatus(HttpServletResponse.SC_UNAUTHORIZED);
    }
}