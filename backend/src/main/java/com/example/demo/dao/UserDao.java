package com.example.demo.dao;

import com.example.demo.model.User;

import java.util.List;
import java.util.UUID;

public interface UserDao {
    int insertUser(UUID id, User user);
    default int insertUser(User user) {
        UUID id = UUID.randomUUID();
        insertUser(id, user);
        return 0;
    }

    List<User> getAllUser();
    String getPasswordByEmail(String getPasswordByEmail);
}
