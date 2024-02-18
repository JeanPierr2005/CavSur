package com.cavsur.cavsurBackend.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import org.hibernate.annotations.GenericGenerator;

@Entity
public class User {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name ="uuid", strategy = "uuid2")
    private String id;
    
    @Column(name = "Name")
    private String name;
    
    @Column(name = "lastName")
    private String lastName;
    
    @Column(name = "Password")
    private String password;
    
    @Column(name = "Email")
    private String email;
    
    @Column(name = "Phone")
    private long phone;
    
    @Column(name = "Address")
    private String address;
    
    @Column(name = "Age")
    private long age;
    
    @Column(name = "City")
    private String city;

    public User() {
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }

    public long getPhone() {
        return phone;
    }

    public String getAddress() {
        return address;
    }

    public long getAge() {
        return age;
    }

    public String getCity() {
        return city;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhone(long phone) {
        this.phone = phone;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setAge(long age) {
        this.age = age;
    }

    public void setCity(String city) {
        this.city = city;
    }

    
    
    
    
}
