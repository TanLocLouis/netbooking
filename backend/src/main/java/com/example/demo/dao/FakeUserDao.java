//package com.example.demo.dao;
//
//import com.example.demo.model.User;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Repository;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Objects;
//import java.util.UUID;
//
//@Repository
//public class FakeUserDao implements UserDao {
//    private static List<User> DB = new ArrayList<>();
//
//    @Override
//    public int insertUser(UUID id, User user) {
//        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//        DB.add(new User(id, user.getEmail(), user.getUsername(),
//                        passwordEncoder.encode(user.getPassword()), user.getSeatNumber()));
//        return 1;
//    }
//
//    @Override
//    public List<User> getAllUser() {
//        return DB;
//    }
//
//    @Override
//    public String getPasswordByEmail(String email) {
//        for (int i = 0; i < DB.size(); i++) {
//            if (Objects.equals(DB.get(i).getEmail(), email)) {
//                return DB.get(i).getPassword();
//            }
//        }
//
//        return null;
//    }
//}
