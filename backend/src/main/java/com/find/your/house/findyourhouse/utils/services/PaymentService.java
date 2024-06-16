package com.find.your.house.findyourhouse.utils.services;

import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import org.springframework.http.*;
import org.springframework.util.*;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.*;
import com.find.your.house.findyourhouse.model.dto.PaymentDto;
import com.find.your.house.findyourhouse.model.entities.Payment;
import com.find.your.house.findyourhouse.model.entities.User;
import com.find.your.house.findyourhouse.model.repositories.PaymentRepository;
import com.find.your.house.findyourhouse.model.repositories.UserRepository;

@Service
public class PaymentService {

    @Value("${paypal.client.id}")
    private String paypalClientId;

    @Value("${paypal.client.secret}")
    private String paypalClientSecret;

    private String paymentToken;

    private final PaymentRepository paymentRepository;
    private final UserRepository userRepository;

    @Autowired
    public PaymentService(PaymentRepository paymentRepository, UserRepository userRepository) {
        this.paymentRepository = paymentRepository;
        this.userRepository = userRepository;
    }

    public Boolean generateToken() {
        String endpoint = "https://api-m.sandbox.paypal.com/v1/oauth2/token";
        String auth = paypalClientId + ":" + paypalClientSecret;
        String encodedAuth = Base64.getEncoder().encodeToString(auth.getBytes());
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Authorization", "Basic " + encodedAuth);
        httpHeaders.add("Content-Type", "application/x-www-form-urlencoded");
        MultiValueMap<String, String> map = new LinkedMultiValueMap<String, String>();
        map.add("grant_type", "client_credentials");
        HttpEntity<MultiValueMap<String, String>> entity = new HttpEntity<MultiValueMap<String, String>>(map,
                httpHeaders);
        paymentToken = getToken(endpoint, entity);
        return paymentToken != "";
    }

    public String getPaymentUrl() {
        RestTemplate restTemplate = new RestTemplate();
        String endpoint = "https://api-m.sandbox.paypal.com/v2/checkout/orders";
        try {
            ResponseEntity<String> response = restTemplate.exchange(endpoint, HttpMethod.POST, this.getPurchaseEntity(),
                    String.class);
            String responseBody = response.getBody();
            ObjectMapper mapper = new ObjectMapper();
            JsonNode rootNode;
            rootNode = mapper.readTree(responseBody);
            return rootNode.path("links").get(1).path("href").asText();
        } catch (Exception e) {
            e.printStackTrace();
            return "";
        }
    }

    public ResponseEntity<?> getPaymentStatus(PaymentDto paymentDto) {
        try {
            RestTemplate restTemplate = new RestTemplate();
            String endpoint = "https://api-m.sandbox.paypal.com/v2/checkout/orders/" + paymentDto.getOrderID()
                    + "/capture";
            ResponseEntity<?> response = restTemplate.exchange(endpoint, HttpMethod.POST,
                    this.getCompletePurchaseEntity(),
                    String.class);
            return response;
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
    }

    public Boolean savePayment(Payment payment) {
        try {
            User userOptional = userRepository.findByEmail(payment.getUser().getEmail());
            if (userOptional == null) {
                return false;
            } else {
                payment.setUser(userOptional);
                paymentRepository.save(payment);
                return true;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    private String getToken(String endpoint, HttpEntity<MultiValueMap<String, String>> entity) {
        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.exchange(endpoint, HttpMethod.POST, entity, String.class).getBody();
        ObjectMapper mapper = new ObjectMapper();
        JsonNode node;
        try {
            node = mapper.readTree(response);
            return node.get("access_token").asText();
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "";
        }
    }

    private HttpEntity<String> getCompletePurchaseEntity() {
        return new HttpEntity<>(this.getPaymentHeaders());
    }

    private HttpEntity<Map<String, Object>> getPurchaseEntity() {
        return new HttpEntity<>(this.getPayload(), this.getPaymentHeaders());
    }

    private HttpHeaders getPaymentHeaders() {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Content-Type", "application/json");
        httpHeaders.add("Authorization", "Bearer " + paymentToken);
        return httpHeaders;
    }

    private Map<String, Object> getPayload() {
        Map<String, Object> payload = new HashMap<>();
        payload.put("application_context", this.getApplicationContextMap());
        payload.put("intent", "CAPTURE");
        payload.put("purchase_units", this.getPurchaseUnitList());
        return payload;
    }

    private Map<String, Object> getApplicationContextMap() {
        Map<String, Object> applicationContextMap = new HashMap<>();
        applicationContextMap.put("return_url", "http://localhost:5173/payment");
        applicationContextMap.put("cancel_url", "http://localhost:5173/cancelled-payment");
        return applicationContextMap;
    }

    private List<Map<String, Object>> getPurchaseUnitList() {
        List<Map<String, Object>> purchaseUnitsList = new ArrayList<>();
        purchaseUnitsList.add(this.getPurchaseUnitMap());
        return purchaseUnitsList;
    }

    private Map<String, Object> getPurchaseUnitMap() {
        Map<String, Object> purchaseUnitMap = new HashMap<>();
        purchaseUnitMap.put("amount", this.getAmountMap());
        return purchaseUnitMap;
    }

    private Map<String, Object> getAmountMap() {
        Map<String, Object> amountMap = new HashMap<>();
        amountMap.put("currency_code", "PLN");
        amountMap.put("value", "10.00");
        return amountMap;
    }

}
