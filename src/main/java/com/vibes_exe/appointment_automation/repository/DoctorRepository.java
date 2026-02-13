package com.vibes_exe.appointment_automation.repository;

import com.vibes_exe.appointment_automation.entity.Doctors;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

//Responsible for CRUD operations on MongoDB
public interface DoctorRepository extends MongoRepository<Doctors, ObjectId> {
}
