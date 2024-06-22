package com.find.your.house.findyourhouse.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.find.your.house.findyourhouse.model.dto.TicketDto;
import com.find.your.house.findyourhouse.utils.mappers.TicketMapper;
import com.find.your.house.findyourhouse.utils.services.AdminTicketsService;

@RestController
@RequestMapping("api/tickets")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST,
                RequestMethod.PATCH })
public class AdminTicketController {

        private final AdminTicketsService adminTicketsService;
        private final TicketMapper ticketMapper;

        @Autowired
        public AdminTicketController(AdminTicketsService adminTicketsService, TicketMapper ticketMapper) {
                this.adminTicketsService = adminTicketsService;
                this.ticketMapper = ticketMapper;
        }

        @GetMapping("/")
        public ResponseEntity<?> getAllTickets() {
                List<TicketDto> tickets = adminTicketsService.getAllTickets().stream()
                                .map(ticketMapper::convertToTicketDto).collect(Collectors.toList());
                return tickets != null ? ResponseEntity.status(HttpStatus.OK).body(tickets)
                                : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        @PostMapping("/create")
        public ResponseEntity<?> createTicket(@RequestBody TicketDto ticketDto) {
                try {
                        Boolean isCreated = adminTicketsService.createTicket(ticketMapper.convertToTicket(ticketDto));
                        return isCreated ? ResponseEntity.status(HttpStatus.CREATED).build()
                                        : ResponseEntity.status(HttpStatus.FORBIDDEN).build();
                } catch (Exception e) {
                        e.printStackTrace();
                        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
                }
        }

        @PostMapping("/accept/{id}")
        public ResponseEntity<?> acceptTicket(@PathVariable Long id) {
                Boolean isAccepted = adminTicketsService.acceptTicket(id);
                return isAccepted ? ResponseEntity.status(HttpStatus.OK).build()
                                : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        @DeleteMapping("/delete/{id}")
        public ResponseEntity<?> deleteTicket(@PathVariable Long id) {
                try {
                        Boolean isDeleted = adminTicketsService.deleteTicket(id);
                        return isDeleted ? ResponseEntity.status(HttpStatus.OK).build()
                                        : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
                } catch (Exception e) {
                        e.printStackTrace();
                        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
                }
        }
}
