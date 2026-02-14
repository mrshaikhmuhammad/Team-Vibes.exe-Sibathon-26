import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CustomNavbar() {
  const navigate = useNavigate();

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm sticky-top">
      <Container>
        {/* Logo / Hospital Name */}
        <Navbar.Brand
          style={{ fontWeight: "600", color: "#0d6efd", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          🏥 Aga Khan Hospital
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-between">
          {/* Navigation Links */}
          <Nav>
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link>Services</Nav.Link>
            <Nav.Link>Find a Doctor</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>

          {/* AI Feature Button
          <Button
            variant="primary"
            onClick={() => navigate("/ai-assistant")}
          >
            AI Appointment Checker
          </Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;

