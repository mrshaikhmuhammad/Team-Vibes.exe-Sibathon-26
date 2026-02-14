package com.vibes_exe.appointment_automation.service;

import com.vibes_exe.appointment_automation.entity.database.doctors;
import com.vibes_exe.appointment_automation.repository.doctor_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//Responsible for business logic
@RestController
@RequestMapping("/database")
public class database_service {
    @Autowired
    private doctor_repository repository;

    public List<doctors> read_doctors(){
        return repository.findAll();
    }

    public void insert_doctors(doctors doctor){
        repository.insert(doctor);
    }

    public List<doctors> find_doctors(String specialization){
        return repository.findByProfessionalInfo_Specialization(specialization);
    }

}
