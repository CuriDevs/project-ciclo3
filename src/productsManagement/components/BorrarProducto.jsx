/*
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {useState} from "react"

function BorrarProducto ({products, setProducts}) {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    return(
        <>
            <Button variant="danger" onClick={handleShow} className="btnDelete btnCardChildren">Eliminar</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Estás seguro deque queires eliminar el producto {}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
    );
}

export default BorrarProducto;

*/ 