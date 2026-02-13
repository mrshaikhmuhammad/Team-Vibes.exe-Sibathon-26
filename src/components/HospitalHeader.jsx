import { Navbar, Container } from "react-bootstrap";

function HospitalHeader() {
  return (
    <Navbar bg="light" className="shadow-sm">
      <Container>
        <Navbar.Brand>
          🏥 Aga Khan Hospital
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default HospitalHeader;
