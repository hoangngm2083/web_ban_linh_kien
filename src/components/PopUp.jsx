// import { Button, Modal } from "bootstrap";
import React from "react";
import { Button, Modal } from "react-bootstrap";

const PopUp = (props) => {
  const { title, child, show, handleClose } = props;
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{child}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopUp;
