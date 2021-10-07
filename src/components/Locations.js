import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SHOPS } from './store';
import SimpleMap from './Map';

function Locations() {

    function renderLocations() {
        return SHOPS.map(shop => (
            <ul className="list-unstyled">
                <li>
                    <h4>{shop.city}</h4>
                </li>
                <li>{shop.street}</li>
                <li>{shop.city}, CA {shop.zip}</li>
                <li>{shop.phone}</li>
            </ul>
        ))
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
    )
}

export default Locations;