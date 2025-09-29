package com.example.demo.service;

import com.example.demo.dao.UserDao;
import com.example.demo.dao.UserResponseDao;
import com.example.demo.model.UserLogin;
import com.example.demo.model.User;
import com.example.demo.model.UserResponse;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserService {
    private final UserDao userDao;
    private final UserResponseDao userResponseDao;

    public UserService(UserDao userDao, UserResponseDao userResponseDao) {
        this.userDao = userDao;
        this.userResponseDao = userResponseDao;
    }

    public List<User> getAllUser() {
        return userDao.findAll();
    }



    public UserResponse authUserByEmail(UserLogin loginInfo) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

//        // Verify
//        return passwordEncoder.matches(loginInfo.getPassword(),
//                                        userDao.getPasswordByEmail(loginInfo.getEmail()));

        boolean isAuth = Objects.equals(loginInfo.getPassword(), userDao.getPasswordByEmail(loginInfo.getEmail()));
        System.out.println("--------------A-----");
        System.out.println(isAuth);
        if (isAuth) {
            return userResponseDao.findByEmail(loginInfo.getEmail())
                    .orElseThrow(() -> new RuntimeException("UserResponse not found with email " + loginInfo.getEmail()));
        } else {
            return null;
        }
    }
}
