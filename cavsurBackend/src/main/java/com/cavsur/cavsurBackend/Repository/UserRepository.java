package com.cavsur.cavsurBackend.Repository;

import com.cavsur.cavsurBackend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author USUARIO
 */
@Repository
public interface UserRepository extends JpaRepository<User, String>{

}
