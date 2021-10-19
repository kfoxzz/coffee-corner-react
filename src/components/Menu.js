import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MENU } from './store';

function Menu() {
  function renderItems(items) {
    return items.map(item => (
      <div key={item.id}>
        <li>
          {item.name}
          <br />
          <small>{item.price}</small>
        </li>
        <br />
      </div>
    ));
  }

  function renderMenu() {
    return MENU.map(section => (
      <Row className="justify-content-center">
        <Col xs={12} sm={6} gap={3} className="text-center" key={section.id}>
          <h2>{section.name}</h2>
          <br />
          <ul className="list-unstyled menu-text" gap={2}>
            {renderItems(section.items)}
          </ul>
        </Col>
      </Row>
    ));
  }

  return (
    <>
      <Container className="pt-3">
        <Row>
          <Col>
            <p>
              <em>
                * Our menu is subject to change. Please see your nearest
                location for an updated list of menu items.
              </em>
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="border border-dark py-3 text-center mb-4 box-shadow bg-beige">
        <Container className="border border-dark menu">
          <Row className="pt-4">
            <Col>
              <h1>&#9789; Menu &#9790;</h1>
            </Col>
          </Row>
          <hr />
          {renderMenu()}
          <Row>
            <Col className="menu-text">
              <p>
                <small>
                  <em>
                    * Non-dairy substitutes are always available upon request.
                  </em>
                </small>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Menu;
