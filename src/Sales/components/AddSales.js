import React, {useState, useEffect, useRef} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AddSales.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Query from "./Query";

import { api } from '../utils/api';

function AddSales (props) {
  /*
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  */
    const [list, setList] = useState({
      idSales:"",
      idProduct:"",
      vTotal:0,
      amount:0,
      price:0,
      dateV:"",
      state:"En proceso",
      idClient:"",
      nameC:"",
      nameV:""
    });

    const handleInputtAdd = e =>{
      //cambiamos el estado 
      setList({
        ...list, 
        [e.target.name] : e.target.value
      });
    }

    const handleListAdd = async(e) => {
      e.preventDefault();
      
      //enviamos los datos a la api
      await api.ventas.create(list);
    }

    return (
      <>
        {/* lo que esta en onClick hace lo mismo que la linea comentada de arriba solo que no le pasarias una variable(handleClose o Show) si no directaente el arrow function*/}
  
        {/*<Button controId="registro" variant="primary" onClick={() => {}}>{" "}Registrar{" "}</Button>*/}
        {/*recibimos lo que nos manda el hook con la variable show y la ponemos en unas llaves dentro de modal con unos 3 puntos antes, que no se para que sirven*/}
        
        <Modal {...props} className="mb" size="">
          <Modal.Header>
            <Modal.Title>Regitro de ventas</Modal.Title>
          </Modal.Header>
  
          <Modal.Body className="show-grid">
            <Container>
            
              <Form onSubmit={handleListAdd}>
                <Row className="mb-3">
                  <Col xs={12} sm>
                    <Form.Group controlId="formGridIdVenta">
                      <Form.Label>Id venta</Form.Label>
                      <Form.Control type="text" placeholder="Identificador de venta" onChange={handleInputtAdd} name="idSales"/>
                    </Form.Group>
                  </Col>
                </Row>
                <hr/>
                <Row className="mb-3">
                  <Col xs={12} md={5}>
                    <Form.Group controlId="formGridIdProducto">
                      <Form.Label>Id producto</Form.Label>
                      <Form.Control type="texto" placeholder="Identificador de producto" onChange={handleInputtAdd} name="idProduct"/>
                    </Form.Group>
                  </Col>
                  
                  <Col xs={12} md={5}>
                    <Form.Group controlId="formGridCantidad">
                      <Form.Label>Cantidad</Form.Label>
                      <Form.Control type="number" placeholder="Cantidad" onChange={handleInputtAdd} name="vTotal"/>
                    </Form.Group>
                  </Col>
                </Row>
                <hr/>
                <Row className="mb-3">
                  <Col xs={12} md={3}>
                    <Form.Group controlId="formGridIdPrecioU">
                      <Form.Label>Precio x U</Form.Label>
                      <Form.Control type="number" placeholder="Precio por U" onChange={handleInputtAdd} name="amount"/>
                    </Form.Group>
                  </Col>
                  
                  <Col xs={12} md={3}>
                    <Form.Group controlId="formGridPrecioTotal">
                      <Form.Label>Precio total</Form.Label>
                      <Form.Control type="number" placeholder="Precio total" onChange={handleInputtAdd} name="price"/>
                    </Form.Group>
                  </Col>

                  <Col xs={12} md={3}>
                    <Form.Group controlId="formGridFechaVenta">
                      <Form.Label>Fecha de venta</Form.Label>
                      <Form.Control type="date" placeholder="Fecha de venta" onChange={handleInputtAdd} name="dateV"/>
                    </Form.Group>
                  </Col>
                </Row>
                <hr/>
                <Row className="mb-3">
                  <Col xs={12} md={5}>
                    <Form.Group controlId="formGridIdCliente">
                      <Form.Label>Identificacion del cliente</Form.Label>
                      <Form.Control type="texto" placeholder="Identificacion del cliente" onChange={handleInputtAdd} name="idClient"/>
                    </Form.Group>
                  </Col>
                  
                  <Col xs={12} md={5}>
                    <Form.Group controlId="formGridNombreCliente">
                      <Form.Label>Nombre del cliente</Form.Label>
                      <Form.Control type="text" placeholder="Nombre del cliente" onChange={handleInputtAdd} name="nameC"/>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col xs={12} sm>
                    <Form.Group controlId="formGridNombreVendedor">
                      <Form.Label>Nombre del vendedor</Form.Label>
                      <Form.Control type="text" placeholder="Nombre del vendedor" onChange={handleInputtAdd} name="nameV"/>
                    </Form.Group>
                  </Col>
                    <OverlayTrigger
                    key={"top"}
                    placement={"top"}
                    overlay={
                      <Tooltip>
                        <strong>{"Guardar"}</strong>.
                      </Tooltip>
                    }
                    >
                      <Button type="submit" className="btn btn-primary"><img src="https://img.icons8.com/material-outlined/20/ffffff/save.png"/></Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      key={"top"}
                      placement={"top"}
                      overlay={
                        <Tooltip>
                          <strong>{"Cerrar"}</strong>.
                        </Tooltip>
                      }
                    >
                      <Button variant="danger" onClick={props.onHide}><img src="https://img.icons8.com/material-outlined/20/ffffff/close-window.png"/></Button>
                </OverlayTrigger>
                </Row>
              </Form>
            </Container>
          </Modal.Body>
        </Modal>
      </>
    );
};

export default AddSales; 