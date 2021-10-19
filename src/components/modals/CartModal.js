import React from 'react';
import { Modal, Container, Col, Row, Button } from 'react-bootstrap';
import { ITEMS } from '../store';

function CartModal(props) {
  const priceIds = ITEMS.map(item => item.priceId);
  let cart = [];

  function removeFromCart(priceId) {
    localStorage.removeItem(priceId);
    for (let i = 0; i < cart.length; i++) {
      const itemPrice = cart[i].price;
      if (itemPrice === priceId) {
        cart.splice(i, 1);
      }
    }
    props.updateCart();
  }

  function renderCartItems() {
    for (let i = 0; i < props.cart.length; i++) {
      const cartPriceId = props.cart[i].price;
      const itemIndex = priceIds.indexOf(cartPriceId);
      cart.push({ ...ITEMS[itemIndex], quantity: props.cart[i].quantity });
    }
    if (!cart.length) {
      return <div>Your cart is empty</div>;
    } else {
      return cart.map(item => (
        <div id={item.priceId} key={item.id}>
          <div>
            <h4>{item.name}</h4>
            <h5>{item.price} each</h5>
            <h5 className="quantity">x {item.quantity}</h5>
            <button
              type="submit"
              onClick={() => {
                removeFromCart(item.priceId);
              }}
              className="btn btn-secondary">
              Remove
            </button>
          </div>
          <br />
        </div>
      ));
    }
  }

  function closeModal() {
    props.close();
  }

  async function initiateCheckout() {
    const itemData = {
      data: props.cart,
    };
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/create-checkout-session`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemData),
      }
    );
    const body = await res.json();
    window.location.href = body.url;
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
        <Button
          type="submit"
          className="green-bg border-0"
          onClick={initiateCheckout}>
          Check Out
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CartModal;
