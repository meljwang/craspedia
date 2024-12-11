package com.example.Craspedia.order;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("SELECT o FROM Order o WHERE o.appUser.id = :userId")
    List<Order> getAllOrderByUser(@Param("userId") Long userId);

    List<Order> findByAppUser_Id(Long userId);
}