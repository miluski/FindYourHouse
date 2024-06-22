package com.find.your.house.findyourhouse.utils.mappers;

import org.springframework.stereotype.Component;

import com.find.your.house.findyourhouse.model.dto.UserDto;
import com.find.your.house.findyourhouse.model.entities.User;

@Component
public class UserMapper {
    public User convertToUser(UserDto userDto) {
        User user = new User();
        user.setEmail(userDto.getEmail());
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setPhoneNumber(userDto.getPhoneNumber());
        user.setPassword(userDto.getPassword());
        user.setRole(userDto.getRole());
        return user;
    }
    public UserDto convertToUserDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setEmail(user.getEmail());
        userDto.setFirstName(user.getFirstName());
        userDto.setLastName(user.getLastName());
        userDto.setPhoneNumber(user.getPhoneNumber());
        userDto.setPassword(user.getPassword());
        userDto.setRole(user.getRole());
        return userDto;
    }
}
