import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenuItems from './MenuItems';
import { Fade } from 'react-animation-components';

function Menu() {

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

        <Container>
          <Row className="text-center my-4">
            <Col
              className="menu box-shadow mx-auto bg-beige"
              xs={10}
              md={8}
              lg={6}>
              <Fade in>
                <Row className="pt-4">
                  <Col>
                    <h1>&#9789; Menu &#9790;</h1>
                  </Col>
                  <hr />
                </Row>
              </Fade>
              <MenuItems />
              <Row>
                <Col className="menu-text">
                  <p>
                    <small>
                      <em>
                        * Non-dairy substitutes are always available upon
                        request.
                      </em>
                    </small>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default Menu;