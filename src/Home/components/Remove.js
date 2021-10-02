import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {useState} from "react";

function Remove () {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return(
        <>
            <Button variant="danger" onClick={handleShow}>Eliminar</Button>{' '}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Eliminar venta</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Estas seguro de querer eliminar la venta?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={handleClose}>
                    Eliminar
                </Button>
                </Modal.Footer>
            </Modal>
            </>
    );
}

export default Remove;