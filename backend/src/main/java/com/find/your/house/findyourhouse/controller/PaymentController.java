package com.find.your.house.findyourhouse.controller;

import java.util.*;

import org.springframework.http.*;
import org.springframework.util.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.*;
import com.find.your.house.findyourhouse.model.Payment;

import org.springframework.beans.factory.annotation.Value;

@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,
        RequestMethod.PATCH })
@RestController
@RequestMapping("api/payment")
public class PaymentController {
    @Value("${paypal.client.id}")
    private String paypalClientId;
    @Value("${paypal.client.secret}")
    private String paypalClientSecret;
    private String accessToken;

    @GetMapping("/checkout")
    public ResponseEntity<String> checkoutToPayment() throws JsonMappingException, JsonProcessingException {
        Boolean isTokenGenerated = generateToken();
        return isTokenGenerated ? ResponseEntity.ok("{ \"checkoutUrl\":" + "\"" + startPayment() + "\"" + "}")
                : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body(Boolean.toString(isTokenGenerated));
    }

    @PostMapping("/complete")
    public ResponseEntity<String> completePayment(@RequestBody Payment payment) {
        try {
            String endpoint = "https://api-m.sandbox.paypal.com/v2/checkout/orders/" + payment.getOrderID()
                    + "/capture";
            HttpHeaders httpHeaders = new HttpHeaders();
            RestTemplate restTemplate = new RestTemplate();
            httpHeaders.add("Content-Type", "application/json");
            httpHeaders.add("Authorization", "Bearer " + accessToken);
            HttpEntity<String> entity = new HttpEntity<>(httpHeaders);
            ResponseEntity<String> responseEntity = restTemplate.exchange(endpoint, HttpMethod.POST, entity,
                    String.class);
            HttpStatusCode statusCode = responseEntity.getStatusCode();
            return statusCode == HttpStatus.OK || statusCode == HttpStatus.CREATED ? ResponseEntity.ok(responseEntity.getBody())
                    : ResponseEntity.status(HttpStatus.FORBIDDEN).body(statusCode.toString());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PostMapping("/check-gateway")
    public ResponseEntity<String> checkGateway(@RequestBody String url) {
        try {
            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
            return response.getStatusCode() == HttpStatus.OK ? ResponseEntity.ok("PayPal gateway is available")
                    : ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body("PayPal gateway is not available");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred: " + e.getMessage() + " " + url);
        }
    }

    private Boolean generateToken() throws JsonMappingException, JsonProcessingException {
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
        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.exchange(endpoint, HttpMethod.POST, entity, String.class).getBody();
        ObjectMapper mapper = new ObjectMapper();
        JsonNode node = mapper.readTree(response);
        accessToken = node.get("access_token").asText();
        return accessToken != "";
    }

    private String startPayment() throws JsonMappingException, JsonProcessingException {
        HttpHeaders httpHeaders = new HttpHeaders();
        RestTemplate restTemplate = new RestTemplate();
        String endpoint = "https://api-m.sandbox.paypal.com/v2/checkout/orders";
        Map<String, Object> amountMap = new HashMap<>();
        amountMap.put("currency_code", "PLN");
        amountMap.put("value", "5000.00");
        Map<String, Object> purchaseUnitMap = new HashMap<>();
        purchaseUnitMap.put("amount", amountMap);
        List<Map<String, Object>> purchaseUnitsList = new ArrayList<>();
        purchaseUnitsList.add(purchaseUnitMap);
        Map<String, Object> payload = new HashMap<>();
        Map<String, Object> applicationContextMap = new HashMap<>();
        applicationContextMap.put("return_url", "http://localhost:5173/approved-payment");
        applicationContextMap.put("cancel_url", "http://localhost:5173/cancelled-payment");
        payload.put("application_context", applicationContextMap);
        payload.put("intent", "CAPTURE");
        payload.put("purchase_units", purchaseUnitsList);
        httpHeaders.add("Content-Type", "application/json");
        httpHeaders.add("Authorization", "Bearer " + accessToken);
        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(payload, httpHeaders);
        ResponseEntity<String> response = restTemplate.exchange(endpoint, HttpMethod.POST, entity, String.class);
        String responseBody = response.getBody();
        ObjectMapper mapper = new ObjectMapper();
        JsonNode rootNode = mapper.readTree(responseBody);
        return rootNode.path("links").get(1).path("href").asText();
    }
}
