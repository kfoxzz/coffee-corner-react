import React, { useState } from 'react';
import LoginModal from './modals/LoginModal';
import { Container, Row, Col, Jumbotron, Image } from 'react-bootstrap';
import { Animated } from "react-animated-css";

function Header() {

    const [showLoginModal, setShowLoginModal] = useState(false);

    function handleClose() {
        setShowLoginModal(false);
    }

    function handleShow() {
        setShowLoginModal(true);
    }

    return (
        <header>
            <Jumbotron className="jumbotron-fluid dark-gradient">
                <Container>
                    <Row className="py-4">
                        <Col className="col-2 col-md-1 align-self-center d-none d-sm-block">
                            <a href="index.html">
                                <Animated animationIn="fadeIn">
                                    <Image src="assets/coffee-cup-1.png" fluid />
                                </Animated>
                            </a>
                        </Col>
                            <Col className="align-self-center text-dark py-3">
                                <Animated animationIn="fadeInRight">
                                    <h2 className="mb-0 text-nowrap">Kristi's Coffee Corner</h2>
                                    <h6 className="text-light d-none d-sm-block">A slice of heaven, in your own neighborhood.</h6>
                                </Animated>
                            </Col>
                        <Col className="col-auto text-light text-end align-self-center">
                            <a onClick={handleShow}><i className="fa fa-user-circle fa-2x text-light"></i></a>
                            <a href="#"><i className="fa fa-shopping-cart fa-2x text-light"></i></a>
                            <div className="d-none d-md-block text-bottom">
                                contact@kristiscoffeecorner.co
                                <br />
                                +1-555-234-1029
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <LoginModal show={showLoginModal} close={handleClose}/>
        </header>
    )
}

export default Header;