import { Container, Row, Col } from "react-bootstrap";
import SymptomForm from "../components/SymptomForm";
import DoctorCard from "../components/DoctorCard";
import CustomNavbar from "../components/Navbar";
import { useState } from "react";


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
    <CustomNavbar />

    <div className="ai-banner">
      <h2>AI Appointment Assistant</h2>
      <p>Tell us your symptoms and we’ll match you with the right doctor.</p>
    </div>

    <Container className="mt-4">
      <SymptomForm onAnalyze={handleAnalysis} />
    </Container>

    <Container className="mt-5">
      <Row>
        {doctors && doctors.map((doc) => (
          <Col md={6} lg={4} key={doc.id}>
            <DoctorCard doctor={doc} />
          </Col>
        ))}
      </Row>
    </Container>
  </>
);


}

export default AiAssistant;
