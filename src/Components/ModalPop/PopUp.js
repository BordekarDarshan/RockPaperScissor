import React from "react";
import "./PopUp.css";
import { Modal, Button } from "react-bootstrap";

function PopUp({ show, handleClose, message }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body>{message}</Modal.Body>
        <Button onClick={handleClose} className="btnCloseModal">
          Play Again
        </Button>
      </Modal>
    </>
  );
}

export default PopUp;
