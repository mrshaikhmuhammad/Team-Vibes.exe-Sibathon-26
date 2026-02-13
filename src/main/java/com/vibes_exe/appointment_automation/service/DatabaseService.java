package com.vibes_exe.appointment_automation.service;

import com.vibes_exe.appointment_automation.entity.Doctors;
import com.vibes_exe.appointment_automation.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//Responsible for business logic
@RestController
@RequestMapping("/database")
public class DatabaseService {
    @Autowired
    private DoctorRepository repository;

    public List<Doctors> read_doctors(){
        return repository.findAll();
    }

}
