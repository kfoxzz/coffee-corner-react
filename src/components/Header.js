import React, { useState } from 'react';
import LoginModal from './modals/LoginModal';
import { Container, Row, Col, Jumbotron, Image } from 'react-bootstrap';
import { Animated } from 'react-animated-css';
import CartModal from './modals/CartModal';

function Header(props) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  function handleLoginClose() {
    setShowLoginModal(false);
  }

  function handleLoginShow() {
    setShowLoginModal(true);
  }

  function handleCartClose() {
    setShowCartModal(false);
  }

  function handleCartShow() {
    setShowCartModal(true);
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
                <h6 className="text-light d-none d-sm-block">
                  A slice of heaven, in your own neighborhood.
                </h6>
              </Animated>
            </Col>
            <Col className="col-auto text-light text-end align-self-center">
              <a href="#" onClick={handleLoginShow}>
                <i className="fa fa-user-circle fa-2x text-light"></i>
              </a>
              <a href="#" onClick={handleCartShow}>
                <i className="fa fa-shopping-cart fa-2x text-light"></i>
              </a>
              <div className="d-none d-md-block text-bottom">
                contact@kristiscoffeecorner.co
                <br />
                (555) 234-1029
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <LoginModal show={showLoginModal} close={handleLoginClose} />
      <CartModal
        show={showCartModal}
        close={handleCartClose}
        cart={props.cart}
        updateCart={props.updateCart}
      />
    </header>
  );
}

export default Header;
