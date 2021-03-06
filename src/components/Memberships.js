import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { MEMBERSHIPS } from './store';
import { FadeTransform, Fade } from 'react-animation-components';

function Memberships() {
  function renderMemberships() {
    return MEMBERSHIPS.map((membership, i) => (
      <Col xs={12} md={4} className="my-3" key={i}>
        <Card className="text-center h-100 zoom box-shadow">
          <Card.Header>
            <h3>{membership.name}</h3>
          </Card.Header>
          <Card.Body>
            <Card.Title>{membership.price}</Card.Title>
            <Card.Text className="list-unstyled">
              <li>{membership.description1}</li>
              <li>{membership.description2}</li>
            </Card.Text>
            <Button href="#" variant="secondary">
              Select
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  }

  return (
    <Container className="my-3">
      <Row>
        <FadeTransform
          in
          transformProps={{
            exitTransform: 'scale(0.75) translateX(25%)',
          }}>
          <Col className="text-center">
            <h2>Sign up for a membership today and save!</h2>
            <p>Redeem points for rewards, with no expiration date!</p>
          </Col>
        </FadeTransform>
      </Row>
      <FadeTransform
        in
        transformProps={{
          exitTransform: 'scale(0.75) translateY(25%)',
        }}>
        <Row className="mb-4 membership">{renderMemberships()}</Row>
      </FadeTransform>
    </Container>
  );
}

export default Memberships;
