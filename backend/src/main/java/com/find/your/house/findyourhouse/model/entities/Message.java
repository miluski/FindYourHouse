package com.find.your.house.findyourhouse.model.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "messages")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "content", nullable = false)
    private String content;
    @Column(name = "type", nullable = false)
    private String type;
    @Column(name="fromEmail", nullable = false)
    private String fromEmail;
    @Column(name="fromNameAndSurname", nullable = false)
    private String fromNameAndSurname;
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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
