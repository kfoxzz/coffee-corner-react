import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { ITEMS } from './store';
import { Fade, Stagger } from 'react-animation-components';

function Cart(props) {
  const priceIds = ITEMS.map(item => item.priceId);
  let cart = [];

  const changeQuantity = (priceId, currentQuantity, action) => {
    let quantity = currentQuantity;
    if (currentQuantity == 1 && action === 'remove') {
      props.removeFromCart(priceId);
      return;
    } else if (action === 'remove') {
      quantity -= 1;
    } else if (action === 'add') {
      quantity = parseInt(quantity) + 1;
    }
    props.addToStorage(priceId, quantity);
    props.updateCart();
  }

  const renderCartItems = () => {
    for (let i = 0; i < props.cart.length; i++) {
      const cartPriceId = props.cart[i].price;
      const itemIndex = priceIds.indexOf(cartPriceId);
      cart.push({ ...ITEMS[itemIndex], quantity: props.cart[i].quantity });
    }
    if (!cart.length) {
      return (
        <Fade in>
          <div>Your cart is empty</div>
        </Fade>
      );
    } else {
      return (
        <>
          <Stagger in>
            {cart.map((item, i) => (
              <Fade in>
                <Row id={item.priceId} key={i} className="pb-2 row-cols-md-4">
                  <Col>
                    <p>{item.name}</p>
                  </Col>
                  <Col className="text-center">
                    <Button
                      style={{ marginLeft: '.5rem' }}
                      variant="outline-dark"
                      size="sm"
                      onClick={() =>
                        changeQuantity(item.priceId, item.quantity, 'remove')
                      }>
                      -
                    </Button>{' '}
                    {item.quantity}
                    <Button
                      style={{ marginLeft: '.5rem' }}
                      variant="outline-dark"
                      size="sm"
                      onClick={() =>
                        changeQuantity(item.priceId, item.quantity, 'add')
                      }>
                      +
                    </Button>
                  </Col>
                  <Col>
                    <p className="mb-2">x {item.price}</p>
                  </Col>
                  <Col md={2}>
                    <button
                      type="submit"
                      onClick={() => {
                        props.removeFromCart(item.priceId);
                      }}
                      className="btn btn-secondary">
                      Remove
                    </button>
                  </Col>
                </Row>
              </Fade>
            ))}
          </Stagger>
          <Row>
            <Col xs={12} sm={4} className="align-self-end">
              <Button
                type="submit"
                id="checkout-button"
                variant="warning"
                onClick={props.initiateCheckout}>
                Checkout
              </Button>
            </Col>
          </Row>
        </>
      );
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Cart</h3>
        </Col>
        <hr />
      </Row>
      {renderCartItems()}
    </Container>
  );
}

export default Cart;