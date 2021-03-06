import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Success(props) {
  useEffect(() => {
    window.localStorage.clear();
    props.updateCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row className="py-3">
        <Col md={6} className="mx-auto text-center text-wrap">
          <h4>
            We appreciate your business! If you have any questions, please email {' '}
            <a href="mailto:contact@kristiscoffeecorner.co">
              contact@kristiscoffeecorner.co
            </a>
            .
          </h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Success;
