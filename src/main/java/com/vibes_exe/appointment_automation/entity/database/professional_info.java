package com.vibes_exe.appointment_automation.entity.database;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "doctorProfessionalInfo")
public class professional_info {

    @Id
    private String professionId;

    // Reference to Doctor _id
    private String doctorId;
    private String specialization;
    private String qualification;
    private Integer yearsOfExperience;
    private Double consultationFee;

    // Constructors
    public professional_info() {
    }

    public professional_info(String doctorId, String specialization,
                            String qualification, Integer yearsOfExperience,
                            Double consultationFee) {
        this.doctorId = doctorId;
        this.specialization = specialization;
        this.qualification = qualification;
        this.yearsOfExperience = yearsOfExperience;
        this.consultationFee = consultationFee;
    }

    // Getters and Setters

    public String getId() {
        return professionId;
    }

    public String getDoctorId() {
        return doctorId;
    }
    public void setDoctorId(String doctorId) {
        this.doctorId = doctorId;
    }

    public String getSpecialization() {
        return specialization;
    }
    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public String getQualification() {
        return qualification;
    }
    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public Integer getYearsOfExperience() {
        return yearsOfExperience;
    }
    public void setYearsOfExperience(Integer yearsOfExperience) {
        this.yearsOfExperience = yearsOfExperience;
    }

    public Double getConsultationFee() {
        return consultationFee;
    }
    public void setConsultationFee(Double consultationFee) {
        this.consultationFee = consultationFee;
    }
}
