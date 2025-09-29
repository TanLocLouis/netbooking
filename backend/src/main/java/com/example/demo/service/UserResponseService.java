package com.example.demo.service;

import com.example.demo.dao.UserResponseDao;
import com.example.demo.model.User;
import com.example.demo.model.UserResponse;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.UUID;

@Service
public class UserResponseService {
    private final UserResponseDao userResponseDao;

    public UserResponseService(UserResponseDao userResponseDao) {
        this.userResponseDao = userResponseDao;
    }

    public UserResponse getUserByID(String id) {
        return userResponseDao.findById(id)
                .orElseThrow(() -> new RuntimeException("UserResponse not found with id " + id));
    }

    public UserResponse getUserByEmail(String email) {
        return userResponseDao.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("UserResponse not found with email " + email));
    }
}
