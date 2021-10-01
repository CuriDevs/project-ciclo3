import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {useState, useEffect} from "react";

function Edit() {
    const [value, setValue] = useState(new Date().toLocaleString())
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // useEffect(() => {
    //     const interval = setInterval(() => setValue(new Date().toLocaleString()),60000)
    // });

    return(
        <>
            <Button variant="primary" onClick={handleShow}>Editar</Button>{' '}
            <Modal show={show} onHide={handleClose} size="lg" dialogClassName="modal-100w">
                <Modal.Header closeButton>
                <Modal.Title>Modificación de venta</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Identificador</Form.Label>
                        <Form.Control size="sm" type="number" readOnly placeholder="ID Unico" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridVenta">
                        <Form.Label>Valor venta</Form.Label>
                        <Form.Control size="sm" type="number" placeholder="Valor de venta" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCantidad">
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control size="sm" type="number" placeholder="Cantidad" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPrecio">
                        <Form.Label>Precio Unitario</Form.Label>
                        <Form.Control size="sm" type="number" placeholder="Precio por unidad" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridFecha">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control size="sm" plaintext readOnly placeholder={value} />
                    </Form.Group>

                    <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridDocumento">
                        <Form.Label>Numero Documento</Form.Label>
                        <Form.Control size="sm" type="number" placeholder="# Documento" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridNombre">
                        <Form.Label>Nombre Cliente</Form.Label>
                        <Form.Control size="sm" placeholder="Nombre Cliente" />
                    </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridVendedor">
                        <Form.Label>Vendedor</Form.Label>
                        <Form.Control size="sm" type="text" readOnly placeholder="Nombre Vendedor"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEstado">
                        <Form.Label>Estado</Form.Label>
                        <Form.Select defaultValue="Seleccione...">
                            <option>Choose...</option>
                            <option>Entregada</option>
                            <option>En proceso</option>
                            <option>Cancelada</option>
                        </Form.Select>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                </Form>

                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success" onClick={handleClose}>
                    Guardar
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Edit;