import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="pt-4">
      <Row>
        <Col md={6}>
          <Form>
            <Form.Control className="mb-3" id="name" placeholder="Name" />
            <Form.Control className="mb-3" id="email" placeholder="Email" />
            <Form.Control
              className="mb-3"
              id="tel"
              placeholder="Phone number"
            />
            <Form.Control
              className="mb-3"
              as="textarea"
              rows={4}
              placeholder="Tell us your feedback!"
            />
            <Form.Check
              className="mb-3"
              type="checkbox"
              label="May we contact you?"
            />
            <Button variant="secondary">Send</Button>
          </Form>
        </Col>
        <Col
          md={{ span: 6, order: 'last' }}
          className="h-100 text-center mb-3 align-self-center">
          <h2>
            Drop us a line! We'd love to hear about how we're doing or how we
            can help.
          </h2>
          <br />
          <p>
            (555) 234-1029
            <br />
            contact@kristiscoffeecorner.co
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
