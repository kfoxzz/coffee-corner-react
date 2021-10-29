import React from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { ITEMS } from './store';

function Items(props) {

  return (
      ITEMS.map((item, i) => (
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
                    <div className="d-grid">
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
                    </div>
                  </Col>
                  <Col>
                    <div className="d-grid">
                      <Button
                        href="#"
                        className="border-0 green-bg"
                        onClick={() => {
                          props.addToCart(item.priceId, item.itemCode);
                        }}>
                        Add to cart
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
      ))
  );
}

export default Items;
