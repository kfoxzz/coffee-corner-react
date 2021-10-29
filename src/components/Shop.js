import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AddedToCart from './toasts/AddedToCart';
import Items from './Items';
import { Fade } from 'react-animation-components';
import { Link } from 'react-router-dom';

function Shop(props) {

  return (
    <Fade in>
      <Container>
        <Row>
          <Col>
            <h1>Shop</h1>
            <hr />
          </Col>
        </Row>
        <Row className="py-3">
          <Col xs={6} className="text-center align-self-center mx-auto">
            <em>
              We love our house-roasted beans, and we hope you love them too!
            </em>
          </Col>
          {/* </Row>
        <Row className="justify-content-end text-center py-2"> */}
          <Col xs={6} sm={3} className="text-center">
            <div>
              <Link to="/cart">View Cart</Link>
              <br />
              <Button
                type="submit"
                id="checkout-button"
                variant="warning"
                onClick={props.initiateCheckout}>
                Checkout
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-around">
          <Items updateCart={props.updateCart} addToCart={props.addToCart} />
        </Row>
        <Row className="py-3">
          <Col xs={6} className="text-end align-self-center">
            <em>Ready to checkout?</em>
          </Col>
          <Col xs={1}>
            <Button
              type="submit"
              id="checkout-button"
              variant="warning"
              onClick={props.initiateCheckout}>
              Checkout
            </Button>
          </Col>
        </Row>
      </Container>
      <AddedToCart show={props.toast} toggleToast={props.toggleToast} />
    </Fade>
  );
}

export default Shop;
