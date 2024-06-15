package com.find.your.house.findyourhouse.model.entities;

import java.util.*;
import jakarta.persistence.*;

@Entity
@Table(name = "offers")
public class Offer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="offer_type", nullable = false)
    private String offerType;
    @Column(name="property_type", nullable = false)
    private String propertyType;
    @Column(name="title", nullable = false)
    private String title;
    @Column(name="price", nullable = false)
    private Float price;
    @Column(name="rent", nullable = false)
    private Float rent;
    @Column(name="caution", nullable = false)
    private Integer caution;
    @Column(name="area", nullable = false)
    private Float area;
    @Column(name="room_count", nullable = false)
    private Integer roomCount;
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @Column(name="photos", nullable = false)
    private List<Photo> photos = new ArrayList<>();
    @Column(name="city", nullable = false)
    private String city;
    @Column(name="house_number")
    private Integer houseNumber;
    @Column(name="street", nullable = false)
    private String street;
    @Column(name="apartment_number")
    private Integer apartmentNumber;
    @Column(name="price_per_quadra_meter", nullable = false)
    private Float pricePerQuadraMeter;
    @Column(length = 10000, name="description", nullable = false)
    private String description;
    @Column(name="exhibitor_name")
    private String exhibitorName;
    @Column(name="exhibitor_surname")
    private String exhibitorSurname;
    @Column(name="exhibitor_phone_number")
    private String exhibitorPhoneNumber;
    @Column(name="exhibitor_email", nullable = false)
    private String exhibitorEmail;
    @Column(name="can_show", nullable = false)
    private Boolean canShow;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
        return this.canShow;
    }

    public void setCanShow(Boolean canShow) {
        this.canShow = canShow;
    }
}
