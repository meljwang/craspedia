package com.example.Craspedia.order;

import com.example.Craspedia.appuser.AppUser;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.HashMap;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "app_user_id")
    private AppUser appUser;

    private Double totalAmount;

    private LocalDateTime orderDate;

    private String orderStatus;

    @ElementCollection
    @CollectionTable(name = "order_products", joinColumns = @JoinColumn(name = "order_id"))
    @MapKeyColumn(name = "product_name")
    @Column(name = "quantity")
    private HashMap<String, Integer> productQuantities;

    public Order(Long id, AppUser appUser, Double totalAmount, LocalDateTime orderDate, String orderStatus, HashMap<String, Integer> productQuantities) {
        this.id = id;
        this.appUser = appUser;
        this.totalAmount = totalAmount;
        this.orderDate = orderDate;
        this.orderStatus = orderStatus;
        this.productQuantities = productQuantities;
    }

    public Order(AppUser appUser, LocalDateTime orderDate, Double totalAmount, String orderStatus, HashMap<String, Integer> productQuantities) {
        this.appUser = appUser;
        this.orderDate = orderDate;
        this.totalAmount = totalAmount;
        this.orderStatus = orderStatus;
        this.productQuantities = productQuantities;
    }

    public Order() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUser = appUser;
    }

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public LocalDateTime getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDateTime orderDate) {
        this.orderDate = orderDate;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public HashMap<String, Integer> getProductQuantities() {
        return productQuantities;
    }

    public void setProductQuantities(HashMap<String, Integer> productQuantities) {
        this.productQuantities = productQuantities;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", appUser=" + appUser +
                ", totalAmount=" + totalAmount +
                ", orderDate=" + orderDate +
                ", orderStatus='" + orderStatus + '\'' +
                ", productQuantities=" + productQuantities +
                '}';
    }
}
