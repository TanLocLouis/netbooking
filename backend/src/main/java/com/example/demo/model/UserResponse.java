package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.hibernate.annotations.Type;

import java.util.UUID;

@Entity
@Table(name = "users")
public class UserResponse {

    @Id
    @Column(name = "id", columnDefinition = "CHAR(36)")
    private String id;

    @Column(name = "email")
    private String email;

    @Column(name = "username")
    private String username;

    @Column(name = "seat_number")
    private String seatNumber;

    public UserResponse()  {
    };

    public UserResponse(@JsonProperty("id") String id,
                        @JsonProperty("email") String email,
                        @JsonProperty("username") String username,
                        @JsonProperty("seat_number") String seatNumber) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.seatNumber = seatNumber;
    }

    // getters
    public String getId() { return id; }
    public String getEmail() { return email; }
    public String getUsername() { return username; }
    public String getSeatNumber() { return seatNumber; }
}

