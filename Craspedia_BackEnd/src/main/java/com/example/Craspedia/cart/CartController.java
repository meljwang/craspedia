package com.example.Craspedia.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cart")
public class CartController {
    private final CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping
    public List<Cart> getAllCart() {
        return cartService.getAllCart();
    }

    @GetMapping(path = "{appUserId}")
    public List<Cart> getCartByUser(@PathVariable("appUserId") Long id) {
        return cartService.getCartByUser(id);
    }

    @PostMapping
    public void addCart(@RequestBody Cart cart) {
        cartService.addCart(cart);
    }


    @DeleteMapping(path = "{cartId}")
    public void removeCart(@PathVariable("cartId") Long id) {
        cartService.removeCart(id);
    }

    @DeleteMapping(path = "/user/{appUserId}")
    public void removeCartForUser(@PathVariable("appUserId") Long appUserId) {
        cartService.removeCartForUser(appUserId);
    }


}
