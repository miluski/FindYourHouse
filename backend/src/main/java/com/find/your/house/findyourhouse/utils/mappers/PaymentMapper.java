package com.find.your.house.findyourhouse.utils.mappers;

import org.springframework.stereotype.Component;

import com.find.your.house.findyourhouse.model.dto.PaymentDto;
import com.find.your.house.findyourhouse.model.entities.Payment;

@Component
public class PaymentMapper {
    public Payment convertToPayment(PaymentDto paymentDto) {
        Payment payment = new Payment();
        payment.setAmount(paymentDto.getAmount());
        payment.setCheckoutUrl(paymentDto.getCheckoutUrl());
        payment.setOrderID(paymentDto.getOrderID());
        payment.setUser(paymentDto.getUser());
        return payment;
    }

    public PaymentDto convertToPaymentDto(Payment payment) {
        PaymentDto paymentDto = new PaymentDto();
        paymentDto.setAmount(payment.getAmount());
        paymentDto.setCheckoutUrl(payment.getCheckoutUrl());
        paymentDto.setOrderID(payment.getOrderID());
        paymentDto.setUser(payment.getUser());
        return paymentDto;
    }
}
