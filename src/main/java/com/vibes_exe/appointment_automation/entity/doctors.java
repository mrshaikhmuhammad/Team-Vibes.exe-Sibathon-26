package com.vibes_exe.appointment_automation.entity;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "doctors")
public class doctors {

    @Id
    private ObjectId id;

    private basic_info basicInfo;
    private professional_info professionalInfo;
    private availability_info availability;

    public doctors() {}

    public doctors(basic_info basicInfo,
                  professional_info professionalInfo,
                  availability_info availability) {
        this.basicInfo.setDoctorId(id);
        this.basicInfo = basicInfo;

        this.basicInfo.setDoctorId(id);
        this.professionalInfo = professionalInfo;

        this.availability.setDoctorId(id);
        this.availability = availability;
    }

    public availability_info getAvailability() {
        return availability;
    }
    public void setAvailability(availability_info availability) {
        this.availability = availability;
    }

    public professional_info getProfessionalInfo() {
        return professionalInfo;
    }
    public void setProfessionalInfo(professional_info professionalInfo) {
        this.professionalInfo = professionalInfo;
    }

    public basic_info getBasicInfo() {
        return basicInfo;
    }
    public void setBasicInfo(basic_info basicInfo) {
        this.basicInfo = basicInfo;
    }

    public ObjectId getId() {
        return id;
    }
    public void setId(ObjectId id) {
        this.id = id;
    }
}
