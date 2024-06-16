package com.find.your.house.findyourhouse;
import com.find.your.house.findyourhouse.model.entities.User;
import com.find.your.house.findyourhouse.model.repositories.UserRepository;
import com.find.your.house.findyourhouse.utils.services.UserDetailsServiceImpl;

import org.junit.jupiter.api.*;
import org.mockito.*;
import org.springframework.security.core.userdetails.*;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class UserDetailsServiceImplTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserDetailsServiceImpl userDetailsService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void loadUserByUsername_UserExists_ShouldReturnUserDetails() {
        String email = "test@example.com";
        User user = new User();
        user.setEmail(email);
        user.setPassword("password");
        when(userRepository.findByEmail(email)).thenReturn(user);
        UserDetails userDetails = userDetailsService.loadUserByUsername(email);
        assertNotNull(userDetails);
        assertEquals(email, userDetails.getUsername());
        assertEquals(user.getPassword(), userDetails.getPassword());
        assertTrue(userDetails.getAuthorities().isEmpty());
        verify(userRepository, times(1)).findByEmail(email);
    }

    @Test
    void loadUserByUsername_UserDoesNotExist_ShouldThrowUsernameNotFoundException() {
        String email = "test@example.com";
        when(userRepository.findByEmail(email)).thenReturn(null);
        assertThrows(UsernameNotFoundException.class, () -> {
            userDetailsService.loadUserByUsername(email);
        });
        verify(userRepository, times(1)).findByEmail(email);
    }
}