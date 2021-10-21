import React from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { ITEMS } from './store';

function Items(props) {
  const addToStorage = (priceId, quantity) => {
    window.localStorage.setItem(priceId, quantity);
  };

  const getFromStorage = priceId => {
    return window.localStorage.getItem(priceId);
  };

  const addItemToStorage = (priceId, quantity) => {
    if (getFromStorage(priceId)) {
      const newQuantity =
        parseInt(quantity) + parseInt(getFromStorage(priceId));
      addToStorage(priceId, newQuantity);
    } else {
      addToStorage(priceId, quantity);
    }
  };

  const addToCart = (priceId, itemCode) => {
    const quantity = document.getElementById(itemCode).value;
    if (quantity === 'Quantity') {
      alert('Select a quantity to add to cart.');
    } else {
      addItemToStorage(priceId, quantity);
    }
    props.updateCart();
    props.toggleToast();
  };

  return ITEMS.map((item, i) => (
    <Col xs={12} md={6} lg={5} key={i}>
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

export default Items;
