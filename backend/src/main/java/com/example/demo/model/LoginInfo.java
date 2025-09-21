package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LoginInfo {
    final private String email;
    final private String password;

    public LoginInfo(@JsonProperty("email") String email,
                @JsonProperty("password") String password) {
            this.email = email;
            this.password = password;
    }

    // Getters
    public String getEmail() { return this.email; };
    public String getPassword() { return this.password; };
}
