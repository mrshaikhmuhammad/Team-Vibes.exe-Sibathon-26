import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomNavbar from "../components/Navbar";

function Landing() {
  const navigate = useNavigate();

  return (
    <>
    <CustomNavbar />   {/* ← ADD NAVBAR HERE */}
      {/* Hero Section */}
      <div style={{ background: "#0d6efd", color: "white", padding: "60px 0" }}>
        <Container>
          <h1>Welcome to Aga Khan Hospital</h1>
          <p>
            Providing trusted, world-class healthcare services with experienced
            specialists and modern facilities.
          </p>

          <Button
            variant="light"
            size="lg"
            onClick={() => navigate("/ai-assistant")}
          >
            AI Appointment Checker
          </Button>
        </Container>
      </div>

      {/* Services Section */}
      <Container className="mt-5">
        <h2 className="text-center mb-4">Our Medical Services</h2>

        <Row>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Diagnostics</Card.Title>
                <Card.Text>
                  Advanced laboratory and radiology services for accurate
                  diagnosis and testing.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Specialist Care</Card.Title>
                <Card.Text>
                  Multidisciplinary specialists managing both simple and complex
                  health conditions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Emergency & Surgery</Card.Title>
                <Card.Text>
                  Modern operating theatres and emergency services available for
                  critical care.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* About Section */}
      <Container className="mt-5 mb-5">
        <h2>Why Choose Us?</h2>
        <p>
          Our hospital network includes multiple medical centres and diagnostic
          facilities, bringing quality healthcare closer to patients across
          Pakistan.
        </p>
      </Container>
    </>
  );
}

export default Landing;
