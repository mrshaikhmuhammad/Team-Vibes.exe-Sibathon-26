package com.vibes_exe.appointment_automation.entity.database;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.*;

import java.util.List;

@Document(collection = "availability")
public class availability_info {

    @Id
    private String availabilityId; // MongoDB String as string

    private String doctorId; //   Reference to doctorBasicInfo _id
    private List<String> availableDays; // e.g., ["Monday", "Wednesday", "Friday"]
    private String startTime; // e.g., "09:00"
    private String endTime;   // e.g., "14:00"
    private Integer appointmentDuration; // in minutes

    public availability_info(){

    }
    public availability_info(String availabilityId, String doctorId, List<String> availableDays, String startTime, String endTime, Integer appointmentDuration) {
        this.availabilityId = availabilityId;
        this.doctorId = doctorId;
        this.availableDays = availableDays;
        this.startTime = startTime;
        this.endTime = endTime;
        this.appointmentDuration = appointmentDuration;
    }

    public String getDoctorId() {
        return doctorId;
    }
    public void setDoctorId(String doctorId) {
        this.doctorId = doctorId;
    }

    public String getavailabilityId() {
        return availabilityId;
    }
    public void setavailabilityId(String availabilityId) {
        this.availabilityId = availabilityId;
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

    public Integer getAppointmentDuration() {
        return appointmentDuration;
    }
    public void setAppointmentDuration(Integer appointmentDuration) {
        this.appointmentDuration = appointmentDuration;
    }
}
