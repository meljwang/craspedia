package com.example.Craspedia.product;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/product")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getProducts() {
        return productService.getProducts();
    }

    @GetMapping(path = "{productId}")
    public Product getProductById(@PathVariable("productId") Long id) {
        return productService.getProductById(id);
    }

    @GetMapping(path = "stock/{id}")
    public int getStockQuantityById(@PathVariable("id") Long id) {
        return productService.getStockQuantityById(id);
    }

    @PostMapping
    public void addNewProduct(@RequestBody Product product) {
        productService.addNewProduct(product);
    }

    @PutMapping(path = "{productId}")
    public void updateProduct(@PathVariable("productId") Long id, @RequestBody Product product) {
        productService.updateProduct(id, product);
    }

    @PutMapping(path = "stock/{id}")
    public void updateStockQuantity(@PathVariable("id") Long id, @RequestBody Product product) {
        productService.updateStockQuantity(id, product);
    }

    @DeleteMapping(path = "{productId}")
    public void deleteProduct(@PathVariable("productId") Long id) {
        productService.deleteProduct(id);
    }

}
