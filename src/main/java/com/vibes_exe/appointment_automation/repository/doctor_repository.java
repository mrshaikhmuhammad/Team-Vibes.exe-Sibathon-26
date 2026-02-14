package com.vibes_exe.appointment_automation.repository;

import com.vibes_exe.appointment_automation.entity.database.doctors;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

//Responsible for CRUD operations on MongoDB
public interface doctor_repository extends MongoRepository<doctors, ObjectId> {
    List<doctors> findByProfessionalInfo_Specialization(String specialization);
}
