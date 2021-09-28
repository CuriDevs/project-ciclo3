import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {useState} from "react";

function Dato ({Clientes}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <tr>
            {Clientes.map ((value) => (
                <th>{value}</th>
            ))}
            <td><Button variant="primary">Editar</Button>{' '}</td>
            <td><Button variant="danger" onClick={handleShow}>Eliminar</Button>{' '}</td>
        </tr>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Eliminar venta</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estas seguro de querer eliminar la venta</Modal.Body>
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

export default Dato;