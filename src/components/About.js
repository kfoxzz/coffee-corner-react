import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Fade, FadeTransform } from 'react-animation-components';

function About() {
  return (
    <Container>
      <FadeTransform
        in
        transformProps={{
          exitTransform: 'scale(0.5)',
        }}>
          <Row>
            <Col>
              <h1>About Us</h1>
            </Col>
          </Row>
        </FadeTransform>
      <hr></hr>
      <Fade in>
        <Row>
          <Col sm={12} md={6} className="pb-3">
            <Image
              fluid
              src="assets/about-us.jpeg"
              alt="Making Coffee"
              className="box-shadow"
            />
          </Col>
          <Col sm={12} md={{ span: 6, order: 'first' }} gap={5}>
            <p>
              Founded in Orange County in 1996, we set out on a mission to provide
              quality coffee and food to our hometown. Our goal was to create a
              place that fosters good times and good memories, and a place where
              anyone could go to feel at home, away from home.
            </p>
            <p>
              As we grew and opened up new locations, we could see that we were
              accomplishing what we sent out to do. We still foster the same
              principals that we were founded on - genuine coffee, genuine people,
              all the time.
            </p>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
}

export default About;
