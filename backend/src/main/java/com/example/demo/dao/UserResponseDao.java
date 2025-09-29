package com.example.demo.dao;

import com.example.demo.model.User;
import com.example.demo.model.UserResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserResponseDao extends JpaRepository<UserResponse, String> {
    Optional<UserResponse> findByEmail(String email);
}
