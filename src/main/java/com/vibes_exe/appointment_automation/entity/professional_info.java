package com.vibes_exe.appointment_automation.entity;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "doctorProfessionalInfo")
public class professional_info {

    @Id
    private ObjectId professionId;

    // Reference to Doctor _id
    private ObjectId doctorId;
    private String specialization;
    private String qualification;
    private int yearsOfExperience;
    private double consultationFee;

    // Constructors
    public professional_info() {
    }

    public professional_info(ObjectId doctorId, String specialization,
                            String qualification, int yearsOfExperience,
                            double consultationFee) {
        this.doctorId = doctorId;
        this.specialization = specialization;
        this.qualification = qualification;
        this.yearsOfExperience = yearsOfExperience;
        this.consultationFee = consultationFee;
    }

    // Getters and Setters

    public ObjectId getId() {
        return professionId;
    }

    public ObjectId getDoctorId() {
        return doctorId;
    }
    public void setDoctorId(ObjectId doctorId) {
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

    public int getYearsOfExperience() {
        return yearsOfExperience;
    }
    public void setYearsOfExperience(int yearsOfExperience) {
        this.yearsOfExperience = yearsOfExperience;
    }

    public double getConsultationFee() {
        return consultationFee;
    }
    public void setConsultationFee(double consultationFee) {
        this.consultationFee = consultationFee;
    }
}
