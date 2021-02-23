import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function InfoModal(props) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div key={props.params.name.first}>
      <Button variant="dark btn-sm" onClick={handleShow}>
        {props.params.name.first} {props.params.name.last}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <img
              className="img-fluid rounded-circle"
              src={props.params.picture.large}
              alt={props.params.name.first}
            />
            <h1>
              {props.params.name.title}. {props.params.name.first}{" "}
              {props.params.name.last}
            </h1>
            <p>
              Birthday:{" "}
              {props.params.dob.date.substring(
                0,
                props.params.dob.date.length - 12
              )}
            </p>
            <p>Age: {props.params.dob.age}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Phone: {props.params.phone} </li>
            <li>Email: {props.params.email} </li>
            <li>
              Address: {props.params.location.street.number}{" "}
              {props.params.location.street.name}, {props.params.location.city},{" "}
              {props.params.location.state}, {props.params.location.country}{" "}
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default InfoModal;
