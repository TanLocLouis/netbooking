package com.example.demo.api;

import com.example.demo.model.UserLogin;
import com.example.demo.model.User;
import com.example.demo.model.UserResponse;
import com.example.demo.service.UserResponseService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/response")
@CrossOrigin(origins = "*")
public class UserResponseController {
    private final UserResponseService userResponseService;

    public UserResponseController(UserResponseService userResponseService) {
        this.userResponseService = userResponseService;
    }

    @GetMapping("/{id}")
    public UserResponse getUserByID(@PathVariable String id) {
        return userResponseService.getUserByID(id);
    }
}