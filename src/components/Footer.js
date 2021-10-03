import React from 'react';
import { Container, Col, Row, ListGroup } from 'react-bootstrap';
import Subscribe from './Subscribe';

function Footer() {
    return (
        <footer className="footer mt-auto py-3 fixed-bottom">
            <Subscribe />
            <Container>
                <Row>
                    <Col>
                        <ListGroup variant="flush" className="text-center">
                            <a className="no-underline link-light" href="index.html">Home</a>
                            <a className="no-underline link-light" href="about.html">About</a>
                            <a className="no-underline link-light" href="contact.html">Contact</a>
                        </ListGroup>
                    </Col>
                    <Col className="text-center">
                        <p><a className="zoom" href="http://facebook.com/"><i className="fab fa-facebook fa-2x text-white"></i></a> <a className="zoom" href="http://instagram.com/"><i className="fab fa-instagram fa-2x text-white"></i></a> <a className="zoom" href="http://yelp.com/"><i className="fab fa-yelp fa-2x text-white"></i></a></p>

                        <p><i className="fab fa-cc-visa fa-2x text-light"></i> <i className="fab fa-cc-mastercard fa-2x text-light"></i> <i className="fab fa-cc-amex fa-2x text-light"></i> <i className="fab fa-cc-paypal fa-2x text-light"></i></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;