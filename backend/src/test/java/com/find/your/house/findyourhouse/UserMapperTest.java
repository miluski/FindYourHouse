package com.find.your.house.findyourhouse;

import com.find.your.house.findyourhouse.model.dto.UserDto;
import com.find.your.house.findyourhouse.model.entities.User;
import com.find.your.house.findyourhouse.utils.mappers.UserMapper;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class UserMapperTest {

    private final UserMapper userMapper = new UserMapper();

    @Test
    public void testConvertToUser() {
        UserDto userDto = new UserDto();
        userDto.setFirstName("John");
        userDto.setLastName("Doe");
        userDto.setEmail("john.doe@example.com");
        userDto.setPhoneNumber("1234567890");
        userDto.setRole("USER");
        User user = userMapper.convertToUser(userDto);
        assertEquals(userDto.getFirstName(), user.getFirstName());
        assertEquals(userDto.getLastName(), user.getLastName());
        assertEquals(userDto.getEmail(), user.getEmail());
        assertEquals(userDto.getPhoneNumber(), user.getPhoneNumber());
        assertEquals(userDto.getRole(), user.getRole());
    }

    @Test
    public void testConvertToUserDto() {
        User user = new User();
        user.setFirstName("Jane");
        user.setLastName("Smith");
        user.setEmail("jane.smith@example.com");
        user.setPhoneNumber("9876543210");
        user.setRole("ADMIN");
        UserDto userDto = userMapper.convertToUserDto(user);
        assertEquals(user.getFirstName(), userDto.getFirstName());
        assertEquals(user.getLastName(), userDto.getLastName());
        assertEquals(user.getEmail(), userDto.getEmail());
        assertEquals(user.getPhoneNumber(), userDto.getPhoneNumber());
        assertEquals(user.getRole(), userDto.getRole());
    }
}
