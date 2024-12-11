package com.example.Craspedia.cart;

import com.example.Craspedia.appuser.AppUser;
import com.example.Craspedia.product.Product;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table
public class Cart {
    @Id
    @SequenceGenerator(name = "cart_sequence", sequenceName = "cart_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cart_sequence")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY) // A user can have multiple cart items
    @JoinColumn(name = "app_user_id", nullable = false) // Foreign key for AppUser
    @JsonBackReference
    private AppUser appUser;

    @ManyToOne(fetch = FetchType.LAZY) // A product can be in multiple users' carts
    @JoinColumn(name = "product_id", nullable = false) // Foreign key for Product
    @JsonBackReference
    private Product product;

    private Integer quantity;

    public Cart(Long id, AppUser appUser, Product product, Integer quantity) {
        this.id = id;
        this.appUser = appUser;
        this.product = product;
        this.quantity = quantity;
    }

    public Cart(AppUser appUser, Product product, Integer quantity) {
        this.appUser = appUser;
        this.product = product;
        this.quantity = quantity;
    }

    public Cart() {
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

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "id=" + id +
                ", appUser=" + appUser +
                ", product=" + product +
                ", quantity=" + quantity +
                '}';
    }
}
