import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Success() {
    return (
        <Container>
            <Row className="py-3">
                <Col md={6} className="mx-auto text-center text-wrap">
                    <h4>
                        We appreciate your business! If you have any questions, please email
                        <a href="mailto:contact@kristiscoffeecorner.co">contact@kristiscoffeecorner.co</a>.
                    </h4>
                </Col>
            </Row>
        </Container>
    )
}

export default Success;