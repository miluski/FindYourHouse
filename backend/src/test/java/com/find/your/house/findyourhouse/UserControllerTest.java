package com.find.your.house.findyourhouse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.find.your.house.findyourhouse.controller.UserController;
import com.find.your.house.findyourhouse.model.dto.UserDto;
import com.find.your.house.findyourhouse.model.entities.User;
import com.find.your.house.findyourhouse.utils.mappers.UserMapper;
import com.find.your.house.findyourhouse.utils.services.UserService;
import org.junit.jupiter.api.*;
import org.mockito.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.*;
import java.util.stream.Collectors;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(UserController.class)
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @MockBean
    private UserMapper userMapper;


    @InjectMocks
    private UserController userController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        userService = Mockito.mock(UserService.class);
        userMapper = Mockito.mock(UserMapper.class);
        userController = new UserController(userService, userMapper);
        mockMvc = MockMvcBuilders.standaloneSetup(userController).build();
    }

    @Test
    void testGetUsers() throws Exception {
        UserDto userDto1 = new UserDto();
        UserDto userDto2 = new UserDto();
        List<User> users = Arrays.asList(userDto1, userDto2)
                .stream()
                .map(userMapper::convertToUser)
                .collect(Collectors.toList());
        when(userService.getUsers()).thenReturn(users);
        when(userMapper.convertToUserDto(any())).thenReturn(userDto1);
        mockMvc.perform(get("/api/users"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.length()").value(2));
    }

    @Test
    void testGetUserByEmail() throws Exception {
        String email = "test@example.com";
        when(userService.getUserByEmail(email)).thenReturn(true);
        mockMvc.perform(get("/api/users/email/{email}", email))
                .andExpect(status().isOk())
                .andExpect(content().string("true"));
    }

    @Test
    void testGetUserById() throws Exception {
        Long id = 1L;
        when(userService.getUserById(id)).thenReturn(true);
        mockMvc.perform(get("/api/users/id/{id}", id))
                .andExpect(status().isOk())
                .andExpect(content().string("true"));
    }

    @Test
    void testProxyLoginGoogleApi() throws Exception {
        String googleToken = "testToken";
        when(userService.getGoogleLoginUserObject(googleToken)).thenReturn(null);
        mockMvc.perform(post("/api/users/auth/google/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(googleToken))
                .andExpect(status().isInternalServerError());
    }

    @Test
    void testProxyRegisterGoogleApi() throws Exception {
        String googleToken = "testToken";
        when(userService.isGoogleUserRegistered(googleToken)).thenReturn(true);
        mockMvc.perform(post("/api/users/auth/google/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(googleToken))
                .andExpect(status().isOk())
                .andExpect(content().string("true"));
    }

    @Test
    void testRegisterUser() throws Exception {
        UserDto userDto = new UserDto();
        when(userMapper.convertToUser(any())).thenReturn(new User());
        mockMvc.perform(post("/api/users/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(userDto)))
                .andExpect(content().string("false"));
    }

    @Test
    void testLoginUser() throws Exception {
        UserDto userDto = new UserDto();
        when(userMapper.convertToUser(userDto)).thenReturn(new User());
        when(userService.getLoginUserObject(any())).thenReturn(null);
        mockMvc.perform(post("/api/users/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(userDto)))
                .andExpect(status().isNotFound());
    }

    @Test
    void testDeleteUser() throws Exception {
        String email = "test@test.com";
        when(userService.deleteUser(email)).thenReturn(true);
        mockMvc.perform(delete("/api/users/delete/{email}", email))
                .andExpect(status().isOk());
    }

    @Test
    void testEditUser() throws Exception {
        Long id = 1L;
        UserDto userDto = new UserDto();
        when(userMapper.convertToUser(userDto)).thenReturn(new User());
        when(userService.editUser(any(), any())).thenReturn(true);
        mockMvc.perform(patch("/api/users/edit/{id}", id)
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(userDto)))
                .andExpect(status().isOk());
    }

    private String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}