import React, { useState } from 'react'
import { Link } from "react-router-dom";


import imgPrueba from "../Images/plus.png"

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'


const CardNuevoProducto = ({ products, setProducts }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /*  const addProduct = (product) => {
        product.id = uuid4()
        setProducts([
            ...products,
            product])
    } */

    return (
        /* En el to del link va a donde se vaya a crear un nuevo producto */
        <>
            <button onClick={handleShow} className="card cardNuevoProducto">
                <img className="imgAgregarProducto" src={imgPrueba} alt="agregar pruducto" />
                <h3 className="titleCardAgregarProducto">Agregar producto</h3>
            </button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Body>
                    <Modal.Header closeButton>
                        <Modal.Title className="title-form">Agregar producto</Modal.Title>
                    </Modal.Header>
                    <>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
                            <FormControl
                                placeholder="Nombre del producto"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text>$</InputGroup.Text>
                            <FormControl aria-label="Amount (to the nearest dollar)" />
                        </InputGroup>
                        <Form.Check
                            inline
                            label="Disponible"
                            name="group1"
                            type="radio"
                            id={`inline-radio-1`}
                        />
                        <Form.Check
                            inline
                            label="No disponible"
                            name="group1"
                            type="radio"
                            id={`inline-radio-2`}
                        />
                        <InputGroup>
                            <InputGroup.Text>Descripcion</InputGroup.Text>
                            <FormControl as="textarea" aria-label="With textarea" />
                        </InputGroup>
                    </>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Guardar
                        </Button>
                    </Modal.Footer>





                </Modal.Body>

            </Modal>

        </>
    )
}

export default CardNuevoProducto
