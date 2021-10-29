import React from 'react';
import {
  Modal,
  Container,
  Col,
  Row,
  Button,
} from 'react-bootstrap';
import { ITEMS } from '../store';
import { Link } from 'react-router-dom';

function CartModal(props) {
  const priceIds = ITEMS.map(item => item.priceId);
  let cart = [];

  const renderCartItems = () => {
    for (let i = 0; i < props.cart.length; i++) {
      const cartPriceId = props.cart[i].price;
      const itemIndex = priceIds.indexOf(cartPriceId);
      cart.push({ ...ITEMS[itemIndex], quantity: props.cart[i].quantity });
    }
    if (!cart.length) {
      return <div>Your cart is empty</div>;
    } else {
      return cart.map((item, i) => (
        <Row id={item.priceId} key={i} className="pb-2">
          <Col>
            <p>{item.name}</p>
          </Col>
          <Col>
              <Row className="justify-content-between text-end mx-3">
                  <p className="mb-2">
                    {item.quantity} x {item.price}
                  </p>
              </Row>
          </Col>
        </Row>
      ));
    }
  }

  function closeModal() {
    props.close();
  }

  return (
    <Modal show={props.show}>
      <Modal.Header>
        <h3>Cart</h3>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={closeModal}></button>
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
          <Row>
            <Col id="cartItems">{renderCartItems()}</Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="link">
          <Link to="/cart" onClick={closeModal}>
            Edit Cart
          </Link>
        </Button>
        <Button
          type="submit"
          className="green-bg border-0"
          onClick={props.initiateCheckout}>
          Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CartModal;
