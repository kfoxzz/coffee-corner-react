import React from 'react';
import { Container, Row, Col, Card, Image, Button, Fade } from 'react-bootstrap';
import { BANNERS } from './store';
import { FadeTransform } from 'react-animation-components';
import { TransitionGroup } from 'react-transition-group';

function Home() {
  function renderBanners() {
    return BANNERS.map(banner => (
        <FadeTransform
          in
          transformProps={{
            exitTransform: 'scale(0.75) translateY(25%)',
          }}
          duration={750}>
          <div key={banner.id}>
            <Row className="align-items-center py-4">
              <Col sm={12} md={8} className="zoom">
                <Image
                  fluid
                  className="box-shadow"
                  src={banner.image}
                  alt={banner.imageAlt}
                />
              </Col>
              <Col sm={12} md={4} className={banner.position}>
                <Card className="text-center border-0">
                  <Card.Body>
                    <h3 className="mb-4">{banner.description1}</h3>
                    <p className="d-none d-lg-block mb-4">
                      {banner.description2}
                    </p>
                    <Button
                      href={banner.route}
                      className="border-0 green-bg w-50 zoom">
                      <small>{banner.button}</small>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <hr></hr>
          </div>
        </FadeTransform>
    ));
  }

  return <Container>{renderBanners()}</Container>;
}

export default Home;
