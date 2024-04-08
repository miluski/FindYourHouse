package com.find.your.house.findyourhouse.model;

import java.io.Serializable;

public class Token implements Serializable {
    private String token;
    public Token(String token) {
        this.token = token;
    }
    public String getToken() {
        return token;
    }
}
