package com.find.your.house.findyourhouse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.find.your.house.findyourhouse.model.dto.MessageDto;
import com.find.your.house.findyourhouse.model.entities.Message;
import com.find.your.house.findyourhouse.utils.mappers.MessagesMapper;
import com.find.your.house.findyourhouse.utils.services.MessagesService;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
        RequestMethod.DELETE })
public class MessagesController {

    private final MessagesService messagesService;

    private final MessagesMapper messagesMapper;

    @Autowired
    public MessagesController(MessagesService messagesService, MessagesMapper messagesMapper) {
        this.messagesService = messagesService;
        this.messagesMapper = messagesMapper;
    }

    @PostMapping("/create")
    public ResponseEntity<?> createMessage(@RequestBody MessageDto messageDto) {
        Boolean isSaved = messagesService.saveMessage(messagesMapper.convertToMessage(messageDto));
        return isSaved ? ResponseEntity.status(HttpStatus.OK).build()
                : ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    @GetMapping("/get/{email}")
    public ResponseEntity<?> getAllUserMessages(@PathVariable String email) {
        List<Message> userMessages = messagesService.getAllUserMessages(email);
        return userMessages != null ? ResponseEntity.status(HttpStatus.OK).body(userMessages)
                : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
