package com.vibes_exe.appointment_automation.controller;

import com.vibes_exe.appointment_automation.entity.client.symptoms;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/client")
public class patient_controller {

    @PostMapping("/suggest_doctors")
    public ResponseEntity<?> suggest_doctors(@RequestBody symptoms symptoms){
        try{

        } catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return null;
    }
}
