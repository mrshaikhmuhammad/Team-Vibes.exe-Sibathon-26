import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import CustomNavbar from "../components/Navbar";

function AppointmentForm() {
  return (
    <>
      <CustomNavbar />

      <Container className="mt-5 mb-5">
        <Card className="shadow-sm p-4">
          <h3 className="mb-4">Book Appointment</h3>

          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="03XX-XXXXXXX" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="example@email.com" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>CNIC / ID</Form.Label>
              <Form.Control type="text" placeholder="XXXXX-XXXXXXX-X" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select Preferred Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Describe Your Condition</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" size="lg">
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default AppointmentForm;
