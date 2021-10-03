import React from 'react';
import { Container, Row, Col, Jumbotron, Image } from 'react-bootstrap';

function Header() {
    return (
        <header>
            <Jumbotron className="jumbotron-fluid dark-gradient">
                <Container>
                    <Row className="py-4">
                        <Col className="col-2 col-md-1 align-self-center d-none d-sm-block">
                            <a href="index.html">
                                <Image src="assets/coffee-cup-1.png" fluid />
                            </a>
                        </Col>
                        <Col className="align-self-center text-dark py-3">
                            <h2 className="mb-0 text-nowrap">Kristi's Coffee Corner</h2>
                            <h6 className="text-light d-none d-sm-block">A slice of heaven, in your own neighborhood.</h6>
                        </Col>
                        <Col className="col-auto text-light text-end align-self-center">
                            <a className="btn btn-social-icon" id="login" data-bs-toggle="modal" data-bs-target="#loginModal"><i
                                className="fa fa-user-circle text-light"></i></a>
                            <a className="btn btn-social-icon" id="checkout"><i className="fa fa-shopping-cart text-light"
                                data-bs-toggle="modal" data-bs-target="#checkoutModal"></i></a>
                            <div className="d-none d-md-block text-bottom">
                                contact@kristiscoffeecorner.co
                                <br />
                                +1-555-234-1029
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </header>
    )
}

export default Header;