import { Form, Button, Card } from "react-bootstrap";
import { useState } from "react";

function SymptomForm({ onAnalyze }) {
  const [symptoms, setSymptoms] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnalyze(symptoms);
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Enter your symptoms</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="e.g. chest pain, headache..."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            />
          </Form.Group>

          <Button className="mt-3" type="submit">
            Analyze with AI
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SymptomForm;   // 👈 VERY IMPORTANT
