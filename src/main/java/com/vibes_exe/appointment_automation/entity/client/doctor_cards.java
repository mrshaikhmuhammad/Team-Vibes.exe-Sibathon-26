package com.vibes_exe.appointment_automation.entity.client;

import com.vibes_exe.appointment_automation.entity.database.doctors;
import com.vibes_exe.appointment_automation.service.database_service;
import org.springframework.beans.factory.annotation.Autowired;

import javax.swing.*;
import java.util.ArrayList;
import java.util.List;

public class doctor_cards {
    @Autowired
    private database_service service;

    List<doctor_card> collection;

    public List<doctor_card>  load_cards(symptoms symptoms){
        String symptom = symptoms.getSymptoms();

        

        String specialization = "";
        List<doctors> doctor_list = service.find_doctors(specialization);
        List<doctor_card> card_list = new ArrayList<doctor_card>();
        for(doctors i : doctor_list){
            card_list.add(new doctor_card(i));
        }
        return card_list;
    }

}
