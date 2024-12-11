package com.example.Craspedia.product;

import jakarta.persistence.*;

@Entity
@Table
public class Product {
    @Id
    @SequenceGenerator(name = "product_sequence", sequenceName = "product_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_sequence")
    private Long id;
    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Double price;

    private String description;

    private String category;

    private String imageUrl; // to be stored in AWS S3

    private Integer stockQuantity;

    public Product() {
    }

    public Product(Long id, String name, Double price, String imageUrl, String description, String category, Integer stockQuantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this.category = category;
        this.stockQuantity = stockQuantity;
    }

    public Product(String name, String description, String category, Double price, String imageUrl, Integer stockQuantity) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
        this.imageUrl = imageUrl;
        this.stockQuantity = stockQuantity;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Integer getStockQuantity() {
        return stockQuantity;
    }

    public void setStockQuantity(Integer stockQuantity) {
        this.stockQuantity = stockQuantity;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", description='" + description + '\'' +
                ", category='" + category + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", stockQuantity=" + stockQuantity +
                '}';
    }
}
