package com.example.demo.dao;

import com.example.demo.model.UserSignUp;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserSignUpDao extends JpaRepository<UserSignUp, String> {
}