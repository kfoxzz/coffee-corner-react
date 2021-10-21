import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ITEMS } from './store';

function Cart(props) {
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
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Cart</h3>
          <hr />
        </Col>
      </Row>
      {renderCartItems()}
    </Container>
  );
}

export default Cart;
