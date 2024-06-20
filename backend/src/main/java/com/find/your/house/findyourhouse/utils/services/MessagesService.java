package com.find.your.house.findyourhouse.utils.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.find.your.house.findyourhouse.model.entities.*;
import com.find.your.house.findyourhouse.model.repositories.*;

@Service
public class MessagesService {

    private final MessagesRepository messagesRepository;

    private final UserRepository userRepository;

    @Autowired
    public MessagesService(MessagesRepository messagesRepository, UserRepository userRepository) {
        this.messagesRepository = messagesRepository;
        this.userRepository = userRepository;
    }

    public Boolean saveMessage(Message message) {
        try {
            User user = userRepository.findByEmail(message.getUser().getEmail());
            if (user != null) {
                message.setUser(user);
                messagesRepository.save(message);
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public List<Message> getAllUserMessages(String email) {
        try {
            User user = userRepository.findByEmail(email);
            if (user != null) {
                return messagesRepository.findAllByUser(user);
            } else {
                return null;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public void deleteMessagesByUser(User user) {
        List<Message> payments = messagesRepository.findAllByUser(user);
        if (payments.isEmpty()) {
            return;
        }
        messagesRepository.deleteAll(payments);
    }
}
