import React, { useState } from 'react';
import SubscribeModal from './modals/SubscribeModal';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';

function Subscribe() {

    const [showModal, setShowModal] = useState(false);

    function handleClose() {
        setShowModal(false);
    }

    function handleShow() {
        setShowModal(true);
    }

    return (
        <Container fluid className="py-3 mt-0">
            <Row>
                <Col className="text-center text-light">
                    <p className="text-dark">Sign Up To Receive Special Offers, Coupons, And Updates!</p>
                </Col>
            </Row>
            <Form className="row align-items-center text-center">
                <Col className="col-10 offset-1 col-md-8 col-xl-6 mb-2 text-center offset-md-2 offset-xl-3">
                    <Form.Control type="email" placeholder="Email address" />
                    <div className="my-2">
                        <Button variant="secondary" onClick={handleShow}>Subscribe</Button>
                    </div>
                </Col>
            </Form>
            <SubscribeModal show={showModal} close={handleClose}/>
        </Container>
    )
}

export default Subscribe;