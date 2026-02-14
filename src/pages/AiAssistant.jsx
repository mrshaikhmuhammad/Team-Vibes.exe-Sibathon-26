import { Container } from "react-bootstrap";
import HospitalHeader from "../components/HospitalHeader";
import SymptomForm from "../components/SymptomForm";
import DoctorCard from "../components/DoctorCard";
import { useState } from "react";
import CustomNavbar from "../components/Navbar";

function AiAssistant() {
  const [doctors, setDoctors] = useState([]);

  const handleAnalysis = (symptoms) => {
    console.log("Symptoms:", symptoms);

    // Simulated AI response specific to Aga Khan Hospital
    setDoctors([
      {
        id: 1,
        name: "Dr. Ahmed Khan",
        specialization: "Cardiologist",
        department: "Cardiology Department",
        timing: "10:00 AM - 1:00 PM",
        location: "Aga Khan Hospital - Karachi",
      },
      {
        id: 2,
        name: "Dr. Sara Ali",
        specialization: "Neurologist",
        department: "Neurology Department",
        timing: "2:00 PM - 5:00 PM",
        location: "Aga Khan Hospital - Karachi",
      },
    ]);
  };

  return (
    <>
      {/* <HospitalHeader /> */}
       <CustomNavbar />

      <Container className="mt-5">
        <h3 className="text-center mb-4">
          AI Assistant – Book Your Appointment
        </h3>

        <SymptomForm onAnalyze={handleAnalysis} />

        <div className="mt-4">
          {doctors.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>
      </Container>
    </>
  );
}

export default AiAssistant;
