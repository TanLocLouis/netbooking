package com.example.demo.service;

import com.example.demo.dao.ProductDao;
import com.example.demo.dao.UserDao;
import com.example.demo.model.LoginInfo;
import com.example.demo.model.Product;
import com.example.demo.model.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.UUID;

@Service
public class ProductService {
    private final ProductDao productDao;

    public ProductService(ProductDao productDao) {
        this.productDao = productDao;
    }

    public List<Product> getAllProduct() {
        return productDao.findAll();
    }
}
