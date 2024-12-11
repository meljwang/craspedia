package com.example.Craspedia.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT stockQuantity FROM Product WHERE id = :id")
    int getStockQuantityById(Long id);

    @Query("UPDATE Product SET stockQuantity = :stockQuantity WHERE id = :id")
    void updateStockQuantity(Long id, int stockQuantity);
}
