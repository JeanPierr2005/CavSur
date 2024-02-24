package com.cavsur.cavsurBackend.Service;

import com.cavsur.cavsurBackend.Entity.User;
import com.cavsur.cavsurBackend.Excepcion.MiException;
import com.cavsur.cavsurBackend.Repository.UserRepository;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author USUARIO
 */
@Service
public class UserService {

    @Autowired
    private UserRepository UserRepository;

    @Transactional
    public User createUsers(String name, String lastName, String password, 
            String email, long phone, String address, long age, String city)
            throws MiException {
        
        User user = new User();
        
        user.setName(name);
        user.setLastName(lastName);
        user.setPassword(password);
        user.setEmail(email);
        user.setPhone(phone);
        user.setAddress(address);
        user.setAge(age);
        user.setCity(city);
        
        return UserRepository.save(user);
    }
    
    @Transactional
    public User findById(String id) throws MiException {
        return UserRepository
                .findById(id)
                .orElseThrow(() -> new MiException("No se encontro el usuario" + id));
    }
    
    @Transactional
    public User updateUser(String id, User modifiedUser) throws MiException {
        User user = UserRepository.findById(id).orElseThrow(
            () -> new MiException("Usuario no encontrado" + id));
        user.setName(modifiedUser.getName());
        user.setLastName(modifiedUser.getLastName());
        user.setPassword(modifiedUser.getPassword());
        user.setEmail(modifiedUser.getEmail());
        user.setPhone(modifiedUser.getPhone());
        user.setAddress(modifiedUser.getAddress());
        user.setAge(modifiedUser.getAge());
        user.setCity(modifiedUser.getCity());
        return UserRepository.save(user);
        
    }
}
