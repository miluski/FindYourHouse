package com.find.your.house.findyourhouse.model.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.find.your.house.findyourhouse.model.entities.Photo;

public class OfferDto implements Serializable {
    private String offerType;
    private String propertyType;
    private String title;
    private Float price;
    private Float rent;
    private Integer caution;
    private Float area;
    private Integer roomCount;
    private List<Photo> photos = new ArrayList<>();
    private String city;
    private Integer houseNumber;
    private String street;
    private Integer apartmentNumber;
    private Float pricePerQuadraMeter;
    private String description;
    private String exhibitorName;
    private String exhibitorSurname;
    private String exhibitorPhoneNumber;
    private String exhibitorEmail;
    private Boolean canShow;

    public String convertToJson() {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return objectMapper.writeValueAsString(this);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return null;
        }
    }

    public String getOfferType() {
        return offerType;
    }

    public void setOfferType(String offerType) {
        this.offerType = offerType;
    }

    public String getPropertyType() {
        return propertyType;
    }

    public void setPropertyType(String propertyType) {
        this.propertyType = propertyType;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public Float getRent() {
        return rent;
    }

    public void setRent(Float rent) {
        this.rent = rent;
    }

    public Integer getCaution() {
        return caution;
    }

    public void setCaution(Integer caution) {
        this.caution = caution;
    }

    public Float getArea() {
        return area;
    }

    public void setArea(Float area) {
        this.area = area;
    }

    public Integer getRoomCount() {
        return roomCount;
    }

    public void setRoomCount(Integer roomCount) {
        this.roomCount = roomCount;
    }

    public List<Photo> getPhotos() {
        return photos;
    }

    public void setPhotos(List<Photo> photos) {
        this.photos = photos;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Integer getHouseNumber() {
        return houseNumber;
    }

    public void setHouseNumber(Integer houseNumber) {
        this.houseNumber = houseNumber;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public Integer getApartmentNumber() {
        return apartmentNumber;
    }

    public void setApartmentNumber(Integer apartmentNumber) {
        this.apartmentNumber = apartmentNumber;
    }

    public Float getPricePerQuadraMeter() {
        return pricePerQuadraMeter;
    }

    public void setPricePerQuadraMeter(Float pricePerQuadraMeter) {
        this.pricePerQuadraMeter = pricePerQuadraMeter;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getExhibitorName() {
        return exhibitorName;
    }

    public void setExhibitorName(String exhibitorName) {
        this.exhibitorName = exhibitorName;
    }

    public String getExhibitorSurname() {
        return exhibitorSurname;
    }

    public void setExhibitorSurname(String exhibitorSurname) {
        this.exhibitorSurname = exhibitorSurname;
    }

    public String getExhibitorPhoneNumber() {
        return exhibitorPhoneNumber;
    }

    public void setExhibitorPhoneNumber(String exhibitorPhoneNumber) {
        this.exhibitorPhoneNumber = exhibitorPhoneNumber;
    }

    public String getExhibitorEmail() {
        return exhibitorEmail;
    }

    public void setExhibitorEmail(String exhibitorEmail) {
        this.exhibitorEmail = exhibitorEmail;
    }

    public Boolean getCanShow() {
        return canShow;
    }

    public void setCanShow(Boolean canShow) {
        this.canShow = canShow;
    }
}
