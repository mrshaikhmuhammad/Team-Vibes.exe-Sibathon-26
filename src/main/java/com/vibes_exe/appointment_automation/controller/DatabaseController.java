package com.vibes_exe.appointment_automation.controller;

import com.vibes_exe.appointment_automation.entity.Doctors;
import com.vibes_exe.appointment_automation.service.DatabaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ReactiveAdapterRegistry;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//Responsible for providing database resources through API
@RestController
@RequestMapping("/database")
public class DatabaseController {
    @Autowired
    private DatabaseService service;

    @GetMapping("/read_doctors")
    public ResponseEntity<?> getDoctors(){
        try{
            List<Doctors> doctors = service.read_doctors();
            System.out.println(doctors);

            if(doctors == null || doctors.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            else{
                return new ResponseEntity<>(doctors, HttpStatus.OK);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
