import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function SubscribeModal(props) {

    function closeModal() {
        props.close();
    }

    return (
        <Modal show={props.show}>
                <Modal.Header>
                    <Modal.Title>Congratulations!</Modal.Title>
                <button class="btn-close" aria-label="Close" onClick={closeModal}></button>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <p>You're now subscribed. Woohoo!</p>
                <Button variant="secondary" className="text-light" onClick={closeModal}>Close</Button>
                </Modal.Body>
        </Modal>

    )
}

export default SubscribeModal;