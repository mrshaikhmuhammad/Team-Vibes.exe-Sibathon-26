import { Card, Button, Badge } from "react-bootstrap";

function DoctorCard({ doctor }) {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>{doctor.name}</Card.Title>

        <Badge bg="primary" className="mb-2">
          {doctor.specialization}
        </Badge>

        <Card.Text>
          <strong>Department:</strong> {doctor.department} <br />
          <strong>Available:</strong> {doctor.timing} <br />
          <strong>Location:</strong> {doctor.location}
        </Card.Text>

        <Button variant="success">
          Book Appointment
        </Button>
      </Card.Body>
    </Card>
  );
}

export default DoctorCard;
