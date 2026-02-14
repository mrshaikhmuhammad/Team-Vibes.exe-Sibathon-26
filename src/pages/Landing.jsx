import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomNavbar from "../components/Navbar";

function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <CustomNavbar />

      {/* HERO SECTION */}
      <div
        style={{
          background: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3') center/cover",
          color: "white",
          padding: "100px 0",
        }}
      >
        <Container>
          <h1 className="display-5 fw-bold">
            Trusted Healthcare. Powered by Innovation.
          </h1>
          <p className="lead mt-3">
            Multidisciplinary specialists, advanced diagnostics, and modern
            facilities delivering quality care for every stage of life.
          </p>

          {/* <Button
            size="lg"
            variant="primary"
            className="mt-3"
            onClick={() => navigate("/ai-assistant")}
          >
            Use AI Appointment Checker
          </Button> */}
        </Container>
      </div>

      {/* SERVICES */}
      <Container className="mt-5">
        <h2 className="text-center mb-4">Our Clinical Services</h2>

        <Row>
          <Col md={4}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <h5>Diagnostics & Laboratories</h5>
                <p>
                  Advanced imaging, pathology, and lab testing to support early
                  diagnosis and treatment decisions.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <h5>Specialist Consultations</h5>
                <p>
                  Access multidisciplinary clinics covering cardiology,
                  neurology, surgery, and chronic disease management.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <h5>Emergency & Surgical Care</h5>
                <p>
                  Modern operating theatres and emergency departments providing
                  safe, high-quality care 24/7.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* WHY CHOOSE US */}
      <div className="bg-light mt-5 py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2>Why Choose Our Hospital?</h2>
              <p>
                Our healthcare system integrates hospitals, medical centres, and
                laboratories to deliver coordinated care close to patients’
                homes.
              </p>
              <p>
                International accreditations and multidisciplinary collaboration
                ensure high standards of safety, diagnosis, and treatment.
              </p>
            </Col>

            <Col md={6}>
              <img
  src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=60"
  alt="hospital"
  className="img-fluid rounded shadow"
/>

            </Col>
          </Row>
        </Container>
      </div>

      {/* AI CTA SECTION */}
      <div style={{ background: "#0d6efd", color: "white" }} className="py-5">
        <Container className="text-center">
          <h2>Need Help Finding the Right Doctor?</h2>
          <p>
            Use our AI-powered assistant to match your symptoms with the right
            specialist and book instantly.
          </p>

          <Button
            variant="light"
            size="lg"
            onClick={() => navigate("/ai-assistant")}
          >
            Start AI Appointment Check
          </Button>
        </Container>
      </div>

      {/* FOOTER */}
      <div className="bg-dark text-white py-4">
        <Container className="text-center">
          <p className="mb-1">© 2026 VIBES Care Hospital</p>
          <small>Committed to quality care, education, and innovation.</small>
        </Container>
      </div>
    </>
  );
}

export default Landing;
