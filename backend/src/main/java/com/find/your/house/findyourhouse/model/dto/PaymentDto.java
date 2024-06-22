package com.find.your.house.findyourhouse.model.dto;

import java.io.Serializable;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.find.your.house.findyourhouse.model.entities.User;

public class PaymentDto implements Serializable {

    private String orderID;

    private String checkoutUrl;

    private User user;

    private Long amount;

    public String convertToJson() {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return objectMapper.writeValueAsString(this);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return null;
        }
    }

    public void setOrderID(String orderID) {
        this.orderID = orderID;
    }

    public String getOrderID() {
        return this.orderID;
    }

    public void setCheckoutUrl(String checkoutUrl) {
        this.checkoutUrl = checkoutUrl;
    }

    public String getCheckoutUrl() {
        return this.checkoutUrl;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Long getAmount() {
        return this.amount;
    }

    public void setAmount(Long amount) {
        this.amount = amount;
    }
}
