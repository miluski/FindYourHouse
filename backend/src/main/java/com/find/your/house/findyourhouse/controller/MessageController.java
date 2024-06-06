package com.find.your.house.findyourhouse.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.*;

import com.find.your.house.findyourhouse.model.Message;

@RestController
@RequestMapping("api/messages")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST,
                RequestMethod.PATCH })
public class MessageController {
        @Autowired
        private MessageRepository messageRepository;

        @Autowired
        private OfferRepository offerRepository;

        @PostMapping("/admin/create")
        public ResponseEntity<String> createMessage(@RequestBody Message message) {
                try {
                        if (message.getOffer() != null && message.getOffer().getId() == null) {
                                offerRepository.save(message.getOffer());
                        }
                        messageRepository.save(message);
                        return ResponseEntity.ok().body(null);
                } catch (Exception e) {
                        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
                }
        }

        @DeleteMapping("/delete/{id}")
        public BodyBuilder deleteMessage(@PathVariable Long id) {
                try {
                        Optional<Message> message = messageRepository.findById(id);
                        if (message.isPresent()) {
                                messageRepository.deleteById(id);
                                return ResponseEntity.status(HttpStatus.OK);
                        } else
                                return ResponseEntity.status(HttpStatus.NOT_FOUND);
                } catch (Exception e) {
                        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR);
                }
        }
}
