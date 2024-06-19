package com.find.your.house.findyourhouse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import com.find.your.house.findyourhouse.model.dto.PaymentDto;
import com.find.your.house.findyourhouse.utils.mappers.PaymentMapper;
import com.find.your.house.findyourhouse.utils.services.PaymentService;

@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,
        RequestMethod.PATCH })
@RestController
@RequestMapping("api/payment")
public class PaymentController {

    private final PaymentService paymentService;

    private final PaymentMapper paymentMapper;

    @Autowired
    public PaymentController(PaymentService paymentService, PaymentMapper paymentMapper) {
        this.paymentService = paymentService;
        this.paymentMapper = paymentMapper;
    }

    @GetMapping("/checkout")
    public ResponseEntity<?> checkoutToPayment() {
        Boolean isTokenGenerated = paymentService.generateToken();
        PaymentDto paymentDto = new PaymentDto();
        paymentDto.setCheckoutUrl(paymentService.getPaymentUrl());
        return isTokenGenerated ? ResponseEntity.status(HttpStatus.OK).body(paymentDto)
                : ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).build();
    }

    @PostMapping("/complete")
    public ResponseEntity<?> completePayment(@RequestBody PaymentDto paymentDto) {
        ResponseEntity<?> response = paymentService.getPaymentStatus(paymentDto);
        HttpStatusCode statusCode = response.getStatusCode();
        if (statusCode == HttpStatus.OK || statusCode == HttpStatus.CREATED) {
            Boolean isProperlySaved = paymentService.savePayment(paymentMapper.convertToPayment(paymentDto));
            return isProperlySaved ? ResponseEntity.status(HttpStatus.OK).body(response.getBody())
                    : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
    }

    @PostMapping("/check-gateway")
    public ResponseEntity<?> checkGateway(@RequestBody String url) {
        try {
            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
            HttpStatusCode statusCode = response.getStatusCode();
            return statusCode == HttpStatus.OK ? ResponseEntity.status(HttpStatus.OK).build()
                    : ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).build();
        }
    }

}
