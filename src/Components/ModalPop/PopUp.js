import React from "react";
import "./PopUp.css";
import { Modal, Button } from "react-bootstrap";

function PopUp({ show, handleClose, message }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal>
    </>
  );
}

export default PopUp;
