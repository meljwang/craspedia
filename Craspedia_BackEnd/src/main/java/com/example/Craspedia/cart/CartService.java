package com.example.Craspedia.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Craspedia.appuser.AppUser;
import com.example.Craspedia.product.Product;

import java.util.List;

@Service
public class CartService {

    private final CartRepository cartRepository;

    @Autowired
    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public List<Cart> getCartByUser(Long userId) {
        return cartRepository.findByUserId(userId);
    }

    public void addCart(Cart cart) {
        cartRepository.save(cart);
    }

    public void removeCart(Long cartId) {
        cartRepository.deleteById(cartId);
    }

    public List<Cart> getAllCart() {
        return cartRepository.findAll();
    }

    public void removeCartForUser(Long id) {
        cartRepository.deleteAllOfUserCart(id);
    }

}
