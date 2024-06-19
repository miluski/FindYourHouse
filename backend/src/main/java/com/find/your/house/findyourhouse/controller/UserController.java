package com.find.your.house.findyourhouse.controller;

import java.util.*;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;

import com.find.your.house.findyourhouse.model.dto.*;
import com.find.your.house.findyourhouse.utils.mappers.UserMapper;
import com.find.your.house.findyourhouse.utils.services.UserService;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/users")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
        RequestMethod.DELETE })
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;

    @Autowired
    public UserController(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

    @GetMapping
    public Optional<List<UserDto>> getUsers() {
        List<UserDto> users = userService.getUsers()
                .stream()
                .map(userMapper::convertToUserDto)
                .collect(Collectors.toList());
        return Optional.ofNullable(users);
    }

    @GetMapping("/email/{email}")
    public Boolean getUserByEmail(@PathVariable String email) {
        return userService.getUserByEmail(email);
    }

    @GetMapping("/id/{id}")
    public Boolean getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PostMapping("/auth/google/login")
    public ResponseEntity<?> proxyLoginGoogleApi(@RequestBody String googleToken) {
        Map<String, Object> responseMap = userService.getGoogleLoginUserObject(googleToken);
        return responseMap != null ? ResponseEntity.status(HttpStatus.OK).body(responseMap)
                : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();

    }

    @PostMapping("/auth/google/register")
    public Boolean proxyRegisterGoogleApi(@RequestBody String googleToken) {
        return userService.isGoogleUserRegistered(googleToken);
    }

    @PostMapping("/auth/register")
    public Boolean registerUser(@RequestBody UserDto userDto) {
        return userService.isUserRegistered(userMapper.convertToUser(userDto));
    }

    @PostMapping("/auth/login")
    public ResponseEntity<?> loginUser(@RequestBody UserDto userDto) {
        Map<String, Object> responseMap = userService.getLoginUserObject(userMapper.convertToUser(userDto));
        return responseMap != null ? ResponseEntity.status(HttpStatus.OK).body(responseMap)
                : ResponseEntity.status(HttpStatus.NOT_FOUND).build();

    }

    @DeleteMapping("/delete/{email}")
    public ResponseEntity<?> deleteUser(@PathVariable String email) {
        Boolean isDeletedProperly = userService.deleteUser(email);
        return isDeletedProperly ? ResponseEntity.status(HttpStatus.OK).build()
                : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PatchMapping("/edit/{id}")
    public ResponseEntity<?> editUser(@PathVariable Long id, @RequestBody UserDto userDto) {
        Boolean isEditedProperly = userService.editUser(id, userMapper.convertToUser(userDto));
        return isEditedProperly ? ResponseEntity.status(HttpStatus.OK).build()
                : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

}
