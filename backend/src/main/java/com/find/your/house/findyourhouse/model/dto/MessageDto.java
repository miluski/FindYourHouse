package com.find.your.house.findyourhouse.model.dto;

import java.io.Serializable;

public class MessageDto implements Serializable {
    private Long id;
    private String content;
    private String type;
    private UserDto userDto;
    private String fromEmail;
    private String fromNameAndSurname;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public UserDto getUser() {
        return userDto;
    }

    public void setUser(UserDto userDto) {
        this.userDto = userDto;
    }

    public String getFromEmail() {
        return this.fromEmail;
    }
    
    public void setFromEmail(String fromEmail) {
        this.fromEmail = fromEmail;
    }
    
    public String getFromNameAndSurname() {
        return this.fromNameAndSurname;
    }
    
    public void setFromNameAndSurname(String fromNameAndSurname) {
        this.fromNameAndSurname = fromNameAndSurname;
    }
}
