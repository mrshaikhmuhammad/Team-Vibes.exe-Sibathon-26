package com.vibes_exe.appointment_automation.entity;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "doctors")
public class Doctors {
    @Id
    private ObjectId doctor_id;

}
