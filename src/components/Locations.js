import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SHOPS } from './store';
import SimpleMap from './Map';

function Locations() {
  const renderLocations = () => {
    return SHOPS.map(({city, street, zip, phone}) => (
      <ul className="list-unstyled">
        <li>
          <h4>{city}</h4>
        </li>
        <li>{street}</li>
        <li>
          {city}, CA {zip}
        </li>
        <li>{phone}</li>
      </ul>
    ));
  }

  return (
    <Container className="py-4">
      <Row>
        <Col xs={12} md={4} className="text-center">
          <h2>Locations</h2>
          <hr />
          {renderLocations()}
        </Col>
        <SimpleMap />
      </Row>
    </Container>
  );
}

export default Locations;
