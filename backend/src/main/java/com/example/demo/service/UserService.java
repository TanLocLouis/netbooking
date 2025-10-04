package com.example.demo.service;

import com.example.demo.dao.UserDao;
import com.example.demo.dao.UserResponseDao;
import com.example.demo.dao.UserSignUpDao;
import com.example.demo.model.UserLogin;
import com.example.demo.model.User;
import com.example.demo.model.UserResponse;
import com.example.demo.model.UserSignUp;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserService {
    private final UserDao userDao;
    private final UserResponseDao userResponseDao;
    private final UserSignUpDao userSignUpDao;

    public UserService(UserDao userDao, UserResponseDao userResponseDao, UserSignUpDao userSignUpDao) {
        this.userDao = userDao;
        this.userResponseDao = userResponseDao;
        this.userSignUpDao = userSignUpDao;
    }

    public List<User> getAllUser() {
        return userDao.findAll();
    }

    public UserResponse UserLogin(UserLogin loginInfo) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = userDao.getPasswordByEmail(loginInfo.getEmail());
        boolean isAuth = hashedPassword != null && passwordEncoder.matches(loginInfo.getPassword(), hashedPassword);

        if (isAuth) {
            return userResponseDao.findByEmail(loginInfo.getEmail())
                    .orElseThrow(() -> new RuntimeException("UserResponse not found with email " + loginInfo.getEmail()));
        } else {
            return null;
        }
    }

    public UserSignUp UserSignUp(UserSignUp userSignUp) {
        if (userSignUp.getId() == null || userSignUp.getId().isEmpty()) {
            userSignUp.setId(java.util.UUID.randomUUID().toString());
        }

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        userSignUp.setPassword(passwordEncoder.encode(userSignUp.getPassword()));

        return userSignUpDao.save(userSignUp);
    }
}
