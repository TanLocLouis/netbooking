package com.example.demo.service;

import com.example.demo.dao.ProductDao;
import com.example.demo.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductDao productDao;

    public ProductService(ProductDao productDao) {
        this.productDao = productDao;
    }

    public List<Product> getAllProduct() {
        return productDao.findAll();
    }

    public Product getProductById(String id) {
        return productDao.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with id " + id));
    }
}
