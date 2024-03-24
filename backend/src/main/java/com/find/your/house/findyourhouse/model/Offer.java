package com.find.your.house.findyourhouse.model;

import jakarta.persistence.*;

@Entity
@Table(name = "offers")
public class Offer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long developerId;
    private String offerHeader;
    private String description;
    private String finishingCondition;
    private Long roomsCount;
    private String surface;
    private String localization;
    private Long price;
    private Long pricePerQuadraMeter;
    private String photoLocation;
    public void setOfferHeader(String offerHeader) {
        this.offerHeader = offerHeader;
    }
    public String getOfferHeader() {
        return this.offerHeader;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getDescription() {
        return this.description;
    }
    public void setFinishingCondition(String finishingCondition) {
        this.finishingCondition = finishingCondition;
    }
    public String getFinishingCondition() {
        return this.finishingCondition;
    }
    public void setRoomsCount(Long roomsCount) {
        this.roomsCount = roomsCount;
    }
    public Long getRoomsCount() {
        return this.roomsCount;
    }
    public void setSurface(String surface) {
        this.surface = surface;
    }
    public String getSurface() {
        return this.surface;
    }
    public void setLocalization(String localization) {
        this.localization = localization;
    }
    public String getLocalization() {
        return this.localization;
    }
    public void setPrice(Long price) {
        this.price = price;
    }
    public Long getPrice() {
        return this.price;
    }
    public void setPricePerQuadraMeter(Long pricePerQuadraMeter) {
        this.pricePerQuadraMeter = pricePerQuadraMeter;
    }
    public Long getPricePerQuadraMeter() {
        return this.pricePerQuadraMeter;
    }
    public void setPhotoLocation(String photoLocation) {
        this.photoLocation = photoLocation;
    }
    public String getPhotoLocation() {
        return this.photoLocation;
    }
    public void setDeveloperId(Long developerId) {
        this.developerId = developerId;
    }
    public Long getDeveloperId() {
        return this.developerId;
    }
}
