import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { api } from '../utils/api';


function Remove({ venta }) {

    const [ show, setShow ] = useState(false);
    const id = [];

    const ventaDelete = () => {
        id.push(venta);
        deleteVentas(id);
        setShow(false);
    };

    const deleteVentas = async (ventaDelete) => {
        const responde = await api.ventas.delete(ventaDelete[ 0 ]._id);
        console.log("Se elimino la venta: " + ventaDelete[ 0 ].idSales);
        //setToast(true);
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
                    <Button variant="danger" onClick={ ventaDelete } href="/sales">
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Remove;