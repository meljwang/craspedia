package com.example.Craspedia.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public void addNewProduct(Product product) {
        Optional<Product> existingProduct = productRepository.findById(product.getId());
        if (existingProduct.isPresent()) {
            throw new IllegalStateException("Product already exists.");
        }
        productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        boolean exists = productRepository.existsById(id);
        if (!exists) {
            throw new IllegalStateException("Product not found.");
        }
        productRepository.deleteById(id);
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).get();
    }

    public void updateProduct(Long id, Product product) {
        Product existingProduct = productRepository.findById(id)
            .orElseThrow(() -> new IllegalStateException("Product with id " + id + " does not exist"));
        existingProduct.setName(product.getName());
        existingProduct.setPrice(product.getPrice());
        existingProduct.setDescription(product.getDescription());
        existingProduct.setCategory(product.getCategory());
        existingProduct.setImageUrl(product.getImageUrl());
        productRepository.save(existingProduct);
    }

    public int getStockQuantityById(Long id) {
        return productRepository.getStockQuantityById(id);
    }

    public void updateStockQuantity(Long id, Product product) {
        Product existingProduct = productRepository.findById(id)
            .orElseThrow(() -> new IllegalStateException("Product with id " + id + " does not exist"));
        existingProduct.setStockQuantity(product.getStockQuantity());
        productRepository.save(existingProduct);
    }

}
