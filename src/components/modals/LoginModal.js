import React from 'react';
import { Modal, Container, Form, Col, Row, Button } from 'react-bootstrap';

function LoginModal(props) {
  function closeModal() {
    props.close();
  }

  return (
    <Modal show={props.show}>
      <Modal.Header>
        <h3>Log in</h3>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={closeModal}></button>
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
          <Form>
            <Form.Group as={Row}>
              <Col className="col-12 mb-2">
                <Form.Control type="email" placeholder="Email" />
              </Col>
              <Col className="col-12 mb-2">
                <Form.Control type="password" placeholder="Password" />
              </Col>
              <Col>
                <Form.Check type="checkbox" label="Remember me" />
              </Col>
              <Col>
                <a href="#">Create an account</a>
              </Col>
            </Form.Group>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="text-light border-0"
          onClick={closeModal}>
          Close
        </Button>
        <Button className="green-bg border-0">Log in</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
