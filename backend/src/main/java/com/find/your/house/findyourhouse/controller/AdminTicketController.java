package com.find.your.house.findyourhouse.controller;

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

        @PostMapping("/create")
        public ResponseEntity<?> createAdminMessage(@RequestBody TicketDto ticketDto) {
                try {
                        Boolean isCreated = adminTicketsService.createTicket(ticketMapper.convertToTicket(ticketDto));
                        return isCreated ? ResponseEntity.status(HttpStatus.CREATED).build()
                                        : ResponseEntity.status(HttpStatus.FORBIDDEN).build();
                } catch (Exception e) {
                        e.printStackTrace();
                        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
                }
        }

        @DeleteMapping("/delete/{id}")
        public ResponseEntity<?> deleteAdminMessage(@PathVariable Long id) {
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
