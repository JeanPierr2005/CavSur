package com.cavsur.cavsurBackend.Controller;

import com.cavsur.cavsurBackend.Entity.User;
import com.cavsur.cavsurBackend.Excepcion.MiException;
import com.cavsur.cavsurBackend.Repository.UserRepository;
import com.cavsur.cavsurBackend.Service.UserService;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/user")
public class UserController {
    
    @Autowired
    private UserService UserService;
    @Autowired
    private UserRepository UserRepository;
    
    @GetMapping("/list")
    public List<User> gteAllUsers() {
        return UserRepository.findAll();
    }
    
    @GetMapping("/list/{id}")
    public Optional<User> getIdUsers(@PathVariable String id) {
        return UserRepository.findById(id);
    }
    
    @PostMapping("/register")
    public ResponseEntity<String> createUser (@RequestBody Map <String, Object> userData) throws MiException {
        String name = (String) userData.get("name"); //nombre
        String lastName = (String) userData.get("lastName"); //apellido
        String password = (String) userData.get("password"); //contraseña
        String email = (String) userData.get("email");
        long phone = Long.parseLong(userData.get("phone").toString());
        String address = (String) userData.get("address");
        long age = Long.parseLong (userData.get("age").toString());
        String city = (String) userData.get("city");
        
        UserService.createUsers(name, lastName, password, email, phone, address, age, city);
        try {
            return ResponseEntity.ok("Usuario registrado correctamente.");
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro al registrar el usuario: " + e.getMessage());         
        }
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateUser(@PathVariable String id,
            @RequestBody User modifiedUser) {
        try {
            UserService.updateUser(id, modifiedUser);
            return ResponseEntity.ok("Usuario modificado correctamente.");
        } catch (MiException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al modificar el usuario: " + e.getMessage());
        }
    }
    
    
}
