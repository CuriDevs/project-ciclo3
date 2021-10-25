import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Table.css';
import { api } from '../../utils/api';
import React, { useState, useEffect } from "react";

function Edit({ user, setConsulta}) {

    const [ show, setShow ] = useState(false);

    const [ list, setList ] = useState({
        UserName: user.UserName,
        Email: user.Email,
        Rol: user.Rol,
        State: user.State,
        Document: user.Document,
        date: user.date,
    });
    
    //escucha el cambio de los inputs
    const handleInputtAdd = (e) => {
        if (e.target.value === '' || e.target.value === 0) {
            console.log('No se ingreso un nuevo valor');
        } else {
            //cambiamos el estado
            setList({
                ...list,
                [ e.target.name ]: e.target.value
            }
            );
        }
    };

    const editUser = () => {
        updateUsers(list);
        setShow(false);
    };

    const updateUsers = async (list) => {
        await api.Users.edit(user,list);
        setConsulta(true);
    };

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Button variant="primary" onClick={ handleShow } className="BotonTable">
                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/edit--v1.png" />
            </Button>{ ' ' }
            <Modal show={ show } onHide={ handleClose } size="lg" dialogClassName="modal-60w">
                <Modal.Header closeButton>
                    <Modal.Title>Modificación de Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Identificador</Form.Label>
                            <Form.Control size="sm" type="number" readOnly placeholder={ user._id } />
                        </Form.Group>

                        <Row className="mb-3">

                            <Form.Group as={ Col } controlId="formGridFecha">
                                <Form.Label>Fecha</Form.Label>
                                <Form.Control size="sm" readOnly placeholder={ list.date } />
                            </Form.Group>

                            <Form.Group as={ Col } controlId="formGridRol">
                                <Form.Label>Estado</Form.Label>
                                <Form.Select size="sm" defaultValue="Choose..." onChange={ handleInputtAdd } name="Rol">
                                    <option>Choose...</option>
                                    <option>Admin</option>
                                    <option>Coordinador</option>
                                    <option>Vendedor</option>
                                </Form.Select>
                            </Form.Group>

                        </Row>

                        <Row className="mb-3">

                            <Form.Group as={ Col } controlId="formGridNombre">
                                <Form.Label>Nombre Cliente</Form.Label>
                                <Form.Control size="sm" type="text" placeholder={ user.UserName } 
                                onChange={ handleInputtAdd }
                                name="UserName"/>
                            </Form.Group>

                            <Form.Group as={ Col } controlId="formGridDocumento">
                                <Form.Label>Numero Documento</Form.Label>
                                <Form.Control size="sm" type="number" placeholder={ user.Document } 
                                onChange={ handleInputtAdd }
                                name="Document"/>
                            </Form.Group>
                            
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={ Col } controlId="formGridCorreo">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control size="sm" type="text" readOnly placeholder={ user.Email } />
                            </Form.Group>

                            <Form.Group as={ Col } controlId="formGridEstado">
                                <Form.Label>Estado</Form.Label>
                                <Form.Select size="sm" defaultValue="Choose..." onChange={ handleInputtAdd } name="State">
                                    <option>Choose...</option>
                                    <option>Activo</option>
                                    <option>Inactivo</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleClose }>
                        Close
                    </Button>
                    <Button variant="success" onClick={ editUser } >
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Edit;