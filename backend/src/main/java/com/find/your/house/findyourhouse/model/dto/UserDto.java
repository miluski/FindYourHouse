package com.find.your.house.findyourhouse.model.dto;

import java.io.Serializable;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class UserDto implements Serializable {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phoneNumber;
    private String role;

    public String convertToJson() {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return objectMapper.writeValueAsString(this);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return null;
        }
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getRole() {
        return this.role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPassword() {
        return password;
    }
    
    public void setPassword(String password) {
        this.password = password;
    }
}
