import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { api } from '../utils/api';
import Toast from 'react-bootstrap/Toast'

function Remove({ venta }) {

    const [ show, setShow ] = useState(false);
    const [ show2, setToast ] = useState(false);
    const id = [];

    const ventaDelete = () => {
        id.push(venta);
        deleteVentas(id);
        setShow(false);
    };

    const deleteVentas = async (ventaDelete) => {
        const responde = await api.ventas.delete(ventaDelete[0]._id);
        if (responde) {
            <Toast onClose={() => setToast(true)} show2={show2} delay={3000} autohide>
                <Toast.Header>
                    <strong className="me-auto">Eliminacion exitosa</strong>
                    <small>1 second ago</small>
                </Toast.Header>
                <Toast.Body>Venta {ventaDelete[0].idSales} eliminada con exito</Toast.Body>
            </Toast>
        } else {
            <Toast onClose={() => setToast(true)} show2={show2} delay={3000} autohide>
                <Toast.Header>
                    <strong className="me-auto">No se elimino la venta</strong>
                    <small>1 second ago</small>
                </Toast.Header>
                <Toast.Body>La venta {ventaDelete[0].idSales} no se elimino</Toast.Body>
            </Toast>
        }
        console.log("Se elimino la venta: " + ventaDelete[0].idSales);
    };

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Button variant="danger" onClick={ handleShow }>Eliminar</Button>{ ' ' }
            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar venta</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Estas seguro de querer eliminar la venta?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleClose }>
                        Close
                    </Button>
                    <Button variant="danger" onClick={ ventaDelete }>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Remove;