package com.find.your.house.findyourhouse.model;

public class Payment {
    private String orderID;
    
    public Payment(String orderID) {
        this.orderID = orderID;
    }

    public Payment() {
    }

    public void setOrderID(String orderID) {
        this.orderID = orderID;
    }

    public String getOrderID() {
        return this.orderID;
    }
}
