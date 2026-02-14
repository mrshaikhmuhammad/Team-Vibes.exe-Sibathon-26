package com.vibes_exe.appointment_automation.entity;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.*;

import java.util.List;

@Document(collection = "availability")
public class availability_info {

    @Id
    private ObjectId availability_id; // MongoDB ObjectId as string

    private ObjectId doctorId; // Reference to doctorBasicInfo _id
    private List<String> availableDays; // e.g., ["Monday", "Wednesday", "Friday"]
    private String startTime; // e.g., "09:00"
    private String endTime;   // e.g., "14:00"
    private int appointmentDuration; // in minutes

    public availability_info(){

    }
    public availability_info(ObjectId availability_id, ObjectId doctorId, List<String> availableDays, String startTime, String endTime, int appointmentDuration) {
        this.availability_id = availability_id;
        this.doctorId = doctorId;
        this.availableDays = availableDays;
        this.startTime = startTime;
        this.endTime = endTime;
        this.appointmentDuration = appointmentDuration;
    }

    public ObjectId getDoctorId() {
        return doctorId;
    }
    public void setDoctorId(ObjectId doctorId) {
        this.doctorId = doctorId;
    }

    public ObjectId getAvailability_id() {
        return availability_id;
    }
    public void setAvailability_id(ObjectId availability_id) {
        this.availability_id = availability_id;
    }

    public List<String> getAvailableDays() {
        return availableDays;
    }
    public void setAvailableDays(List<String> availableDays) {
        this.availableDays = availableDays;
    }

    public String getStartTime() {
        return startTime;
    }
    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }
    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public int getAppointmentDuration() {
        return appointmentDuration;
    }
    public void setAppointmentDuration(int appointmentDuration) {
        this.appointmentDuration = appointmentDuration;
    }
}
