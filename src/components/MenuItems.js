import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { MENU } from './store';
import { Stagger, Fade } from 'react-animation-components';

function MenuItems() {
  const renderItems = items => {
    return items.map(({ id, name, price }) => (
      <div key={id}>
        <li>
          {name}
          <br />
          <small>{price}</small>
        </li>
        <br />
      </div>
    ));
  };

  return (
    <Stagger in>
      {MENU.map(({ id, name, items }) => (
        <Fade in>
          <Row className="justify-content-center">
            <Col xs={12} sm={6} gap={3} className="text-center" key={id}>
              <h2>{name}</h2>
              <br />
              <ul className="list-unstyled menu-text" gap={2}>
                {renderItems(items)}
              </ul>
            </Col>
          </Row>
        </Fade>
      ))}
    </Stagger>
  );
}

export default MenuItems;
