package com.find.your.house.findyourhouse.model.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "tickets")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "topic", nullable = false)
    private String topic;
    @Column(name = "client_name")
    private String clientName;
    @Column(name = "category", nullable = false)
    private String category;
    @Column(name = "date", nullable = false)
    private String date;
    @OneToOne
    @JoinColumn(name = "offer_id")
    private Offer offer;

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setOffer(Offer offer) {
        this.offer = offer;
    }

    public Offer getOffer() {
        return this.offer;
    }
}
