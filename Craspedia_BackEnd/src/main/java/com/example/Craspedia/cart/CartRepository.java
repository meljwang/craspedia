package com.example.Craspedia.cart;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
    // Correct query referencing the Cart entity and its appUser relationship
    @Query("SELECT c FROM Cart c WHERE c.appUser.id = ?1")
    List<Cart> findByUserId(Long userId);

    @Modifying
    @Transactional
    @Query("DELETE FROM Cart c WHERE c.appUser.id = ?1")
    void deleteAllOfUserCart(Long userId);
    
}

