package com.vibes_exe.appointment_automation.entity.client;
import com.vibes_exe.appointment_automation.entity.database.doctors;

import java.util.List;

public class doctor_card {
    private String doctor_name;
    private String specialization;
    private Integer years_of_experience;
    private List<String> availability;
    private String timeing;

    public doctor_card(doctors doctor){
        doctor_name = doctor.getBasicInfo().getFirstName() + " " + doctor.getBasicInfo().getLastName();
        specialization = doctor.getProfessionalInfo().getSpecialization();
        years_of_experience = doctor.getProfessionalInfo().getYearsOfExperience();
        timeing = doctor.getAvailability().getStartTime() + "  to  " +doctor.getAvailability().getEndTime();
        availability = doctor.getAvailability().getAvailableDays();
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public String getDoctor_name() {
        return doctor_name;
    }

    public void setDoctor_name(String doctor_name) {
        this.doctor_name = doctor_name;
    }

    public Integer getYears_of_experience() {
        return years_of_experience;
    }

    public void setYears_of_experience(Integer years_of_experience) {
        this.years_of_experience = years_of_experience;
    }

    public List<String> getAvailability() {
        return availability;
    }

    public void setAvailability(List<String> availability) {
        this.availability = availability;
    }

    public String getTimeing() {
        return timeing;
    }

    public void setTimeing(String timeing) {
        this.timeing = timeing;
    }
}
