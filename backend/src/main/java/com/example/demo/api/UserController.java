package com.example.demo.api;

import com.example.demo.model.UserLogin;
import com.example.demo.model.User;
import com.example.demo.model.UserResponse;
import com.example.demo.model.UserSignUp;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/user")
@CrossOrigin(origins = "*")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUser() {
        return userService.getAllUser();
    }

    @PostMapping(path = "/auth/login")
    public UserResponse loginUser(@RequestBody UserLogin loginInfo) {
        return userService.UserLogin(loginInfo);
    }

    @PostMapping(path = "/auth/signup")
    public UserSignUp UserSignUp(@RequestBody UserSignUp signupInfo) {
        return userService.UserSignUp(signupInfo);
    }
}
