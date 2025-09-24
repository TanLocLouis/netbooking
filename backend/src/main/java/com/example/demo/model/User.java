package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.UUID;

@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(name = "id")
    private final UUID id;

    @Column(name = "email")
    private final String email;

    @Column(name = "username")
    private final String username;

    @Column(name = "password")
    private final String password;

    @Column(name = "seat_number")
    private final String seatNumber;

   public User() {};

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

