import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

function AddedToCart(props) {
  return (
    <ToastContainer
      className="position-fixed bottom-0 end-0 p-3"
      style={{ zIndex: '11' }}>
      <Toast
        show={props.show}
        onClose={props.toggleToast}
        delay={3000}
        autohide>
        <Toast.Header>
          <strong className="me-auto">Cart Updated</strong>
          <small>Now</small>
        </Toast.Header>
        <Toast.Body>Added to cart.</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default AddedToCart;
