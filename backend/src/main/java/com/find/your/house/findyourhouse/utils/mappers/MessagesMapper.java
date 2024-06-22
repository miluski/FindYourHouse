package com.find.your.house.findyourhouse.utils.mappers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.find.your.house.findyourhouse.model.dto.MessageDto;
import com.find.your.house.findyourhouse.model.entities.Message;

@Component
public class MessagesMapper {
    private final UserMapper userMapper;

    @Autowired
    public MessagesMapper(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    public Message convertToMessage(MessageDto messageDto) {
        Message message = new Message();
        message.setContent(messageDto.getContent());
        message.setId(messageDto.getId());
        message.setType(messageDto.getType());
        message.setUser(userMapper.convertToUser(messageDto.getUser()));
        message.setFromEmail(messageDto.getFromEmail());
        message.setFromNameAndSurname(messageDto.getFromNameAndSurname());
        return message;
    }

    public MessageDto convertToMessageDto(Message message) {
        MessageDto messageDto = new MessageDto();
        messageDto.setContent(message.getContent());
        messageDto.setId(message.getId());
        messageDto.setType(message.getType());
        messageDto.setUser(userMapper.convertToUserDto(message.getUser()));
        messageDto.setFromEmail(message.getFromEmail());
        messageDto.setFromNameAndSurname(message.getFromNameAndSurname());
        return messageDto;
    }
}
