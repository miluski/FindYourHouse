package com.find.your.house.findyourhouse;

import com.find.your.house.findyourhouse.model.dto.PaymentDto;
import com.find.your.house.findyourhouse.model.entities.Payment;
import com.find.your.house.findyourhouse.model.entities.User;
import com.find.your.house.findyourhouse.utils.mappers.PaymentMapper;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class PaymentMapperTest {

    private final PaymentMapper paymentMapper = new PaymentMapper();

    @Test
    public void testConvertToPayment() {
        PaymentDto paymentDto = new PaymentDto();
        paymentDto.setAmount(1000L);
        paymentDto.setCheckoutUrl("https://example.com/checkout");
        paymentDto.setOrderID("ORDER123");
        User user = new User();
        paymentDto.setUser(user);
        Payment payment = paymentMapper.convertToPayment(paymentDto);
        assertEquals(paymentDto.getAmount(), payment.getAmount());
        assertEquals(paymentDto.getCheckoutUrl(), payment.getCheckoutUrl());
        assertEquals(paymentDto.getOrderID(), payment.getOrderID());
        assertEquals(paymentDto.getUser(), payment.getUser());
    }

    @Test
    public void testConvertToPaymentDto() {
        Payment payment = new Payment();
        payment.setAmount(2000L);
        payment.setCheckoutUrl("https://example.com/payment");
        payment.setOrderID("PAYMENT456");
        User user = new User();
        payment.setUser(user);
        PaymentDto paymentDto = paymentMapper.convertToPaymentDto(payment);
        assertEquals(payment.getAmount(), paymentDto.getAmount());
        assertEquals(payment.getCheckoutUrl(), paymentDto.getCheckoutUrl());
        assertEquals(payment.getOrderID(), paymentDto.getOrderID());
        assertEquals(payment.getUser(), paymentDto.getUser());
    }
}
