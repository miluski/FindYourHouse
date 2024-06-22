package com.find.your.house.findyourhouse.model.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "payments")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "order_id", nullable = false)
    private String orderID;

    @Column(name = "checkout_url", nullable = true)
    private String checkoutUrl;

    @Column(name = "amount", nullable = false)
    private Long amount;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

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
