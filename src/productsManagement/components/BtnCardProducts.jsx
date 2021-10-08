import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const BtnCardProducts = ({ nombre, estilos, estiloBootstrap, product, nombreProducto}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
return (
    <>
        <button className={`btn ${estiloBootstrap} ${estilos} btnCardChildren `} onClick={ handleShow }> {nombre} </button>
        

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar producto</Modal.Title>
            </Modal.Header>
            <form>
                <Modal.Body>
                    {`¿Estás seguro de querer eliminar el producto: ${nombreProducto}?`}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="danger" onClick={handleClose} type="submit">
                        Eliminar
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    </>
)
}

export default BtnCardProducts

