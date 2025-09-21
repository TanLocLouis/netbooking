package com.example.demo.service;

import com.example.demo.dao.UserDao;
import com.example.demo.model.LoginInfo;
import com.example.demo.model.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserDao userDao;

    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }

    public int addUser(User user) {
        return userDao.insertUser(user);
    }

    public List<User> getAllUser() {
        return userDao.getAllUser();
    }

    public boolean authUserByEmail(LoginInfo loginInfo) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        // Verify
        return passwordEncoder.matches(loginInfo.getPassword(),
                                        userDao.getPasswordByEmail(loginInfo.getEmail()));
    }
}
