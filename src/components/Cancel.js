import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Cancel() {
  return (
    <Container>
      <Row className="py-3">
        <Col md={6} className="mx-auto text-center text-wrap">
          <h4>
            Forgot to add something to your cart? Shop around then come back to
            pay!
          </h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Cancel;
