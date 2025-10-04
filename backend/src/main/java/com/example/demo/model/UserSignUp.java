package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class UserSignUp {

    @Id
    @Column(name = "id", columnDefinition = "CHAR(36)")
    private String id;

    @Column(name = "username")
    private String username;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "seat_number")
    private String seat_number;

    @Column(name = "is_email_verified")
    private String is_email_verified = "false";

    public UserSignUp() {};

    public UserSignUp(@JsonProperty("username") String username,
                     @JsonProperty("email") String email,
                     @JsonProperty("password") String password,
                     @JsonProperty("seat_number") String seat_number,
                     @JsonProperty("is_email_verified") String is_email_verified) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.seat_number = seat_number;
    }

    // Getters
    public String getId() { return this.id; }
    public String getUsername() { return this.username; }
    public String getEmail() { return this.email; };
    public String getPassword() { return this.password; };
    public String getSeat_number() { return this.seat_number; };
    public String getIs_email_verified() { return this.is_email_verified; };

    // Setters
    public void setId(String id) {
        this.id = id;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}
