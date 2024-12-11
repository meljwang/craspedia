package com.example.Craspedia.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Craspedia.cart.Cart;
import com.example.Craspedia.cart.CartRepository;
import com.example.Craspedia.product.Product;
import com.example.Craspedia.product.ProductRepository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class OrderService {
    private final CartRepository cartRepository;
    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;

    @Autowired
    public OrderService(CartRepository cartRepository, OrderRepository orderRepository, ProductRepository productRepository) {
        this.cartRepository = cartRepository;
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
    }
    public List<Order> getAllOrders() {
        return this.orderRepository.findAll();
    }

    public List<Order> getAllOrderByUser(Long id) {
        return this.orderRepository.getAllOrderByUser(id);
    }

    public Order getOrderById(Long id) {
        boolean exist = this.orderRepository.existsById(id);
        if (!exist) {
            throw new IllegalStateException("Order with id " + id + " does not exist");
        }
        return this.orderRepository.findById(id).get();
    }

    public Order createOrder(Long userId) {
    // Fetch cart items for the user
        List<Cart> cartItems = cartRepository.findByUserId(userId);
        if (cartItems.isEmpty()) {
            throw new IllegalStateException("Cart is empty");
        }

        // Calculate total amount
        double totalAmount = 0;
        HashMap<String, Integer> productQuantities = new HashMap<>();
        for (Cart cartItem : cartItems) {
            Product product = cartItem.getProduct();
            int quantity = cartItem.getQuantity();
            productQuantities.put(product.getName(), quantity);
            totalAmount += product.getPrice() * quantity;
        }

        // Create a new order
        Order order = new Order();
        order.setAppUser(cartItems.get(0).getAppUser());
        order.setOrderDate(LocalDateTime.now());
        order.setTotalAmount(totalAmount);
        order.setProductQuantities(productQuantities);

        // Save the order
        Order savedOrder = orderRepository.save(order);

        // Clear user's cart
        cartRepository.deleteAll(cartItems);

        return savedOrder;
    }

}
