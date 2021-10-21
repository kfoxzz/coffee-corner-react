import React from 'react';
import {
  Modal,
  Container,
  Col,
  Row,
  Button,
  Form,
  InputGroup,
} from 'react-bootstrap';
import { ITEMS } from '../store';

function CartModal(props) {
  const priceIds = ITEMS.map(item => item.priceId);
  let cart = [];

  const removeFromCart = (priceId) => {
    localStorage.removeItem(priceId);
    for (let i = 0; i < cart.length; i++) {
      const itemPrice = cart[i].price;
      if (itemPrice === priceId) {
        cart.splice(i, 1);
      }
    }
    props.updateCart();
  }

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
                  {/* <button
                    type="submit"
                    onClick={() => {
                      removeFromCart(item.priceId);
                    }}
                    className="btn btn-secondary">
                    Remove
                  </button> */}
              </Row>
          </Col>
        </Row>
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
        <Button variant="link" >
          Edit Cart
        </Button>
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
