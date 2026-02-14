package com.vibes_exe.appointment_automation.entity.database;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "basic_info")
public class basic_info {

    @Id
    private String basicId; // MongoDB String as String

    private String doctorId;
    private String firstName;
    private String lastName;
    private String gender;
    private String contactNumber;
    private String email;
    private String city;

    // Default constructor
    public basic_info() {
    }

    // Parameterized constructor
    public basic_info(String doctorId, String firstName, String lastName, String gender,
                           String contactNumber, String email, String city) {
        this.doctorId = doctorId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.contactNumber = contactNumber;
        this.email = email;
        this.city = city;
    }

    // Getters and Setters
    public String getBasicId() {
        return basicId;
    }
    public void setBasicId(String basicId) {
        this.basicId = basicId;
    }

    public String getDoctorId() {
        return doctorId;
    }
    public void setDoctorId(String doctorId) {
        this.doctorId = doctorId;
    }

    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getContactNumber() {
        return contactNumber;
    }
    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
}
