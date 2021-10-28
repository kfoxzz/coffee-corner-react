import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AddedToCart from './toasts/AddedToCart';
import Items from './Items';

function Shop(props) {

  return (
    <>
      <Container>
        <Row className="py-3">
          <Col xs={6} className="text-center align-self-center mx-auto">
            <em>
              We love our house-roasted beans, and we hope you love them too!
            </em>
          </Col>
        </Row>
        <Row className="justify-content-around">
          <Items
            updateCart={props.updateCart}
            addToCart={props.addToCart}
          />
        </Row>
        <Row className="py-3">
          <Col xs={6} className="text-end align-self-center">
            <em>Ready to checkout?</em>
          </Col>
          <Col xs={1}>
            <Button
              type="submit"
              id="checkout-button"
              className="green-bg border-0"
              onClick={props.initiateCheckout}>
              Checkout
            </Button>
          </Col>
        </Row>
      </Container>
      <AddedToCart show={props.toast} toggleToast={props.toggleToast} />
    </>
  );
}

export default Shop;
