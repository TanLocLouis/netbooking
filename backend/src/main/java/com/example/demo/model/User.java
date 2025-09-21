package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class User {
    private final UUID id;
    private final String email;
    private final String username;
    private final String password;
    private final String seatNumber;

    public User(@JsonProperty("id") UUID id,
                @JsonProperty("email") String email,
                @JsonProperty("username") String username,
                @JsonProperty("password") String password,
                @JsonProperty("seatNumber") String seatNumber) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
        this.seatNumber = seatNumber;
    }

    // getters
    public UUID getId() { return id; }
    public String getEmail() { return email; }
    public String getUsername() { return username; }
    public String getPassword() { return password; }
    public String getSeatNumber() { return seatNumber; }
}

