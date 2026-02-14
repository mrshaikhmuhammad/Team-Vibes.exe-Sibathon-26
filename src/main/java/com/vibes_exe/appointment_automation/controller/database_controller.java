package com.vibes_exe.appointment_automation.controller;

import com.vibes_exe.appointment_automation.entity.database.doctors;
import com.vibes_exe.appointment_automation.service.database_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//Responsible for providing database resources through API
@RestController
@RequestMapping("/database")
public class database_controller {
    @Autowired
    private database_service service;

    @GetMapping("/read_doctors")
    public ResponseEntity<?> get_doctors(){
        try{
            List<doctors> doctors = service.read_doctors();
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

    @PostMapping("/insert_doctor")
    public ResponseEntity<?> insert_doctor(@RequestBody doctors doctor){
        try{
            service.insert_doctors(doctor);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(doctor, HttpStatus.OK);
    }
}
