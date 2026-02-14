import { Container, Row, Col } from "react-bootstrap";
import SymptomForm from "../components/SymptomForm";
import DoctorCard from "../components/DoctorCard";
import CustomNavbar from "../components/Navbar";
import { useState } from "react";


function AiAssistant() {
  const [doctors, setDoctors] = useState([]);

  const handleAnalysis = (symptoms) => {
    console.log("Symptoms:", symptoms);

    {doctors.length > 0 && (
  <h5 className="mt-4 mb-3 text-muted">
    Recommended Specialists
  </h5>
)}

    // Simulated AI response specific to Vibes Care Hospital

   const input = symptoms.toLowerCase();

if (
  input.includes("chest") ||
  input.includes("hear") ||
  input.includes("chast pain") ||
  input.includes("chest pein") ||
  input.includes("chset") ||
  input.includes("chest pein") ||
  input.includes("chset pian") ||
  input.includes("chast pan") ||
  input.includes("cseht pain") ||
  input.includes("c pain") ||
  input.includes("cardio") ||
  input.includes("heart") ||
  input.includes("haert") ||
  input.includes("hart") ||
  input.includes("chest pain") ||
  input.includes("heart pain") ||
  input.includes("pressure in chest") ||
  input.includes("shortness of breath") ||
  input.includes("palpitations") ||
  input.includes("heart beating fast") ||
  input.includes("tight chest") ||
  input.includes("left arm pain") ||
  input.includes("cardiac pain") ||
  input.includes("angina") ||
  input.includes("heartburn severe") ||
  input.includes("irregular heartbeat") ||
  input.includes("high cholesterol") ||
  input.includes("blood pressure high") ||
  input.includes("dizziness with chest pain")
) {
  setDoctors([
    {
      id: 1,
      name: "Dr. Ahmed Khan",
      specialization: "Cardiologist",
      department: "Cardiology Department",
      timing: "10:00 AM - 1:00 PM",
      location: "VIBES Care Hospital",
    },
  ]);
}

else if (
  input.includes("headache") ||
  input.includes("migraine") ||
  input.includes("fever") ||
  input.includes("body pain") ||
  input.includes("cold") ||
  input.includes("cough") ||
  input.includes("flu") ||
  input.includes("fatigue") ||
  input.includes("weakness") ||
  input.includes("chills") ||
  input.includes("sore throat") ||
  input.includes("vomiting") ||
  input.includes("nausea") ||
  input.includes("mild pain") ||
  input.includes("infection")
) {
  setDoctors([
    {
      id: 2,
      name: "Dr. Sara Ali",
      specialization: "General Physician",
      department: "General Medicine",
      timing: "2:00 PM - 5:00 PM",
      location: "VIBES Care Hospital",
    },
  ]);
}

else if (
  input.includes("pimple") ||
  input.includes("acne") ||
  input.includes("skin rash") ||
  input.includes("itching") ||
  input.includes("eczema") ||
  input.includes("dry skin") ||
  input.includes("oily skin") ||
  input.includes("skin allergy") ||
  input.includes("fungal infection") ||
  input.includes("dark spots") ||
  input.includes("pigmentation") ||
  input.includes("hair fall") ||
  input.includes("dandruff") ||
  input.includes("psoriasis") ||
  input.includes("skin redness")
) {
  setDoctors([
    {
      id: 3,
      name: "Dr. Antonio Silva",
      specialization: "Dermatologist",
      department: "Skin Department",
      timing: "11:00 AM - 4:00 PM",
      location: "VIBES Care Hospital",
    },
  ]);
}

else if (
  input.includes("bone pain") ||
  input.includes("fracture") ||
  input.includes("joint pain") ||
  input.includes("knee pain") ||
  input.includes("back pain") ||
  input.includes("shoulder pain") ||
  input.includes("arthritis") ||
  input.includes("swelling in joint") ||
  input.includes("sprain") ||
  input.includes("muscle tear") ||
  input.includes("neck pain") ||
  input.includes("hip pain") ||
  input.includes("sports injury") ||
  input.includes("stiffness") ||
  input.includes("orthopedic issue")
) {
  setDoctors([
    {
      id: 4,
      name: "Dr. Shahzeb Malik",
      specialization: "Orthopedic Surgeon",
      department: "Orthopedics",
      timing: "9:00 AM - 2:00 PM",
      location: "VIBES Care Hospital",
    },
  ]);
}

else if (
  input.includes("stomach pain") ||
  input.includes("gas") ||
  input.includes("acidity") ||
  input.includes("ulcer") ||
  input.includes("diarrhea") ||
  input.includes("constipation") ||
  input.includes("indigestion") ||
  input.includes("bloating") ||
  input.includes("abdominal pain") ||
  input.includes("liver problem") ||
  input.includes("hepatitis") ||
  input.includes("vomiting blood") ||
  input.includes("food poisoning") ||
  input.includes("gastro issue") ||
  input.includes("ibs")
) {
  setDoctors([
    {
      id: 5,
      name: "Dr. Muhammad Sheeraz",
      specialization: "Gastroenterologist",
      department: "Gastroenterology",
      timing: "1:00 PM - 6:00 PM",
      location: "VIBES Care Hospital",
    },
  ]);
}

else if (
  input.includes("depression") ||
  input.includes("anxiety") ||
  input.includes("stress") ||
  input.includes("panic attack") ||
  input.includes("insomnia") ||
  input.includes("mental health") ||
  input.includes("mood swings") ||
  input.includes("trauma") ||
  input.includes("overthinking") ||
  input.includes("sadness") ||
  input.includes("fear") ||
  input.includes("social anxiety") ||
  input.includes("anger issues") ||
  input.includes("low motivation") ||
  input.includes("emotional breakdown")
) {
  setDoctors([
    {
      id: 6,
      name: "Dr. Hira Qureshi",
      specialization: "Psychiatrist",
      department: "Mental Health",
      timing: "3:00 PM - 8:00 PM",
      location: "VIBES Care Hospital",
    },
  ]);
}

else if (
  input.includes("pregnancy") ||
  input.includes("period pain") ||
  input.includes("menstrual problem") ||
  input.includes("pcos") ||
  input.includes("ovary pain") ||
  input.includes("uterus issue") ||
  input.includes("fertility") ||
  input.includes("gyne problem") ||
  input.includes("hormone imbalance") ||
  input.includes("vaginal infection") ||
  input.includes("pregnancy checkup") ||
  input.includes("miscarriage") ||
  input.includes("delivery") ||
  input.includes("women health") ||
  input.includes("breast pain")
) {
  setDoctors([
    {
      id: 7,
      name: "Dr. Ayesha Rahman",
      specialization: "Gynecologist",
      department: "Women Care",
      timing: "10:00 AM - 3:00 PM",
      location: "VIBES Care Hospital",
    },
  ]);
}

else if (
  input.includes("eye pain") ||
  input.includes("blurred vision") ||
  input.includes("eye redness") ||
  input.includes("watery eyes") ||
  input.includes("dry eyes") ||
  input.includes("vision problem") ||
  input.includes("eye infection") ||
  input.includes("glaucoma") ||
  input.includes("cataract") ||
  input.includes("double vision") ||
  input.includes("eye strain") ||
  input.includes("itchy eyes") ||
  input.includes("squint") ||
  input.includes("light sensitivity") ||
  input.includes("eye swelling")
) {
  setDoctors([
    {
      id: 8,
      name: "Dr. Salman Iqbal",
      specialization: "Ophthalmologist",
      department: "Eye Care",
      timing: "12:00 PM - 5:00 PM",
      location: "VIBES Care Hospital",
    },
  ]);
}

else if (
  input.includes("ear pain") ||
  input.includes("throat pain") ||
  input.includes("nose blockage") ||
  input.includes("sinus") ||
  input.includes("hearing loss") ||
  input.includes("tonsils") ||
  input.includes("ear infection") ||
  input.includes("ringing in ear") ||
  input.includes("voice problem") ||
  input.includes("larynx issue") ||
  input.includes("cold severe") ||
  input.includes("nasal allergy") ||
  input.includes("runny nose") ||
  input.includes("ear discharge") ||
  input.includes("swallowing pain")
) {
  setDoctors([
    {
      id: 9,
      name: "Dr. Imran Bashir",
      specialization: "ENT Specialist",
      department: "ENT Department",
      timing: "4:00 PM - 9:00 PM",
      location: "VIBES Care Hospital",
    },
  ]);
}

else if (
  input.includes("child fever") ||
  input.includes("baby cough") ||
  input.includes("vaccination") ||
  input.includes("child growth") ||
  input.includes("newborn issue") ||
  input.includes("pediatric care") ||
  input.includes("child infection") ||
  input.includes("baby rash") ||
  input.includes("infant vomiting") ||
  input.includes("child allergy") ||
  input.includes("teething pain") ||
  input.includes("child weakness") ||
  input.includes("baby diarrhea") ||
  input.includes("child asthma") ||
  input.includes("child cold")
) {
  setDoctors([
    {
      id: 10,
      name: "Dr. Mehwish Noor",
      specialization: "Pediatrician",
      department: "Child Care",
      timing: "9:00 AM - 1:00 PM",
      location: "VIBES Care Hospital",
    },
  ]);
}


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
