import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { ITEMS } from './store';

function Shop(props) {
  function addToStorage(priceId, quantity) {
    window.localStorage.setItem(priceId, quantity);
  }

  function getFromStorage(priceId) {
    return window.localStorage.getItem(priceId);
  }

  function addItemToStorage(priceId, quantity) {
    if (getFromStorage(priceId)) {
      const newQuantity =
        parseInt(quantity) + parseInt(getFromStorage(priceId));
      addToStorage(priceId, newQuantity);
    } else {
      addToStorage(priceId, quantity);
    }
  }

  function addToCart(priceId, itemCode) {
    const quantity = document.getElementById(itemCode).value;
    if (quantity === 'Quantity') {
      alert('Select a quantity to add to cart.');
    } else {
      addItemToStorage(priceId, quantity);
    }
    props.updateCart();
  }

  function renderItems() {
    return ITEMS.map(item => (
      <Col xs={12} md={6} lg={5} key={item.id}>
        <Card className="my-3 border-0">
          <Card.Img
            varient="top"
            src="assets/bag-of-beans.jpeg"
            className="box-shadow"
            alt="beans"
          />
          <Card.Body className="text-center">
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.price}</Card.Text>
            <Row className="mx-auto">
              <Col xs={12} md={6} className="pb-2">
                <select
                  id={item.itemCode}
                  className="form-select"
                  aria-label="Default select example">
                  <option defaultValue>Quantity</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </Col>
              <Col>
                <Button
                  href="#"
                  className="border-0 green-bg"
                  onClick={() => {
                    addToCart(item.priceId, item.itemCode);
                  }}>
                  Add to cart
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    ));
  }

  return (
    <Container>
      <Row className="py-3">
        <Col xs={6} className="text-center align-self-center mx-auto">
          <em>
            We love our house-roasted beans, and we hope you love them too!
          </em>
        </Col>
      </Row>
      <Row className="justify-content-around">{renderItems()}</Row>
      <Row className="py-3">
        <Col xs={6} className="text-end align-self-center">
          <em>Ready to checkout?</em>
        </Col>
        <Col xs={1}>
          <Button
            type="submit"
            id="checkout-button"
            className="green-bg border-0">
            Checkout
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Shop;
