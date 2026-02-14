package com.vibes_exe.appointment_automation.repository;

import com.vibes_exe.appointment_automation.entity.doctors;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

//Responsible for CRUD operations on MongoDB
public interface doctor_repository extends MongoRepository<doctors, ObjectId> {
}
