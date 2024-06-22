package com.find.your.house.findyourhouse;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.util.ReflectionTestUtils;

import com.find.your.house.findyourhouse.utils.services.JwtTokenUtilService;

import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
public class JwtTokenUtilServiceTest {

    @InjectMocks
    private JwtTokenUtilService jwtTokenUtilService;
    private final String secret = "4526e6b7b51381e028bfcff5a5ee1d2d2d187a9b7ff2ff902cab06a473ac4e21";
    private final Long expiration = 3600000L;
    private final Long refreshExpiration = 7200000L;

    @BeforeEach
    public void setUp() {
        ReflectionTestUtils.setField(jwtTokenUtilService, "secret", secret);
        ReflectionTestUtils.setField(jwtTokenUtilService, "expiration", expiration);
        ReflectionTestUtils.setField(jwtTokenUtilService, "refreshExpiration", refreshExpiration);
    }

    @Test
    public void testGenerateToken() {
        String username = "testuser";
        String token = jwtTokenUtilService.generateToken(username);
        assertNotNull(token);
        Claims claims = Jwts.parserBuilder().setSigningKey(getSignKey()).build().parseClaimsJws(token).getBody();
        assertEquals(username, claims.getSubject());
        assertTrue(claims.getExpiration().after(new Date()));
    }

    @Test
    public void testGenerateRefreshToken() {
        String username = "testuser";
        String refreshToken = jwtTokenUtilService.generateRefreshToken(username);
        assertNotNull(refreshToken);
        Claims claims = Jwts.parserBuilder().setSigningKey(getSignKey()).build().parseClaimsJws(refreshToken).getBody();
        assertEquals(username, claims.getSubject());
        assertTrue(claims.getExpiration().after(new Date()));
    }

    @Test
    public void testValidateToken() {
        String username = "testuser";
        String token = jwtTokenUtilService.generateToken(username);
        assertTrue(jwtTokenUtilService.validateToken(token, username));
    }

    @Test
    public void testIsTokenExpired() {
        String token = Jwts.builder()
                .setClaims(new HashMap<>())
                .setSubject("testuser")
                .setIssuedAt(new Date(System.currentTimeMillis() - expiration - 1000))
                .setExpiration(new Date(System.currentTimeMillis() - 1000))
                .signWith(getSignKey(), SignatureAlgorithm.HS256)
                .compact();
        assertThrows(ExpiredJwtException.class, () -> {
            jwtTokenUtilService.isTokenExpired(token);
        });
    }

    @Test
    public void testGetEmail() {
        String username = "testuser";
        String token = jwtTokenUtilService.generateToken(username);
        String tokenEmail = jwtTokenUtilService.getEmail(token);
        assertEquals(username, tokenEmail);
    }

    @Test
    public void testGetAllClaimsFromToken() {
        String username = "testuser";
        String token = jwtTokenUtilService.generateToken(username);
        Claims claims = jwtTokenUtilService.getAllClaimsFromToken(token);
        assertEquals(username, claims.getSubject());
    }

    private Key getSignKey() {
        return new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
    }
}
