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

function AddSales ({show, show2, datosConsulta}) {

  //le damos el estado inicial al hook, osea sus valores por default
  const [list, setList] = useState({
    idSales: "",
    idProduct: "",
    vTotal: 0,
    amount: 0,
    price: 0,
    dateV: "",
    state: "En proceso",
    idClient: "",
    nameC: "",
    nameV: "",
  });

  //escucha el cambio de los inputs
  const handleInputtAdd = (e) => {
    //cambiamos el estado
    setList({
      ...list,
      [e.target.name]: e.target.value, //obtenemos los datos y los pasamos al hook
    });
  };

  //luego esto se acciona al momento de presionar el boton guardar
  const handleListAdd = (e) => {
    e.preventDefault();

    //mandamos los datos a la funcion de la page principal
    datosConsulta(list);
  };

  //al presionar el boton de cerrar el modal enviamos un boolean(false) a la page sales para cambiar el estado del hook show
  const close = () =>{
    show2(false);
  }

  return (
    <>
      <Modal show={show} className="mb" onHide={false}>
        <Modal.Header>
          <Modal.Title>Regitro de ventas</Modal.Title>
        </Modal.Header>

        <Modal.Body className="show-grid">
          <Container className="principal">
            <Form onSubmit={handleListAdd}>
              <Row className="mb-3">
                <Col xs={12} sm>
                  <Form.Group controlId="formGridIdVenta">
                    <Form.Label>Id venta</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Identificador de venta"
                      onChange={handleInputtAdd}
                      name="idSales"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <hr />
              <Row className="mb-3">
                <Col xs={12} sm>
                  <Form.Group controlId="formGridIdProducto">
                    <Form.Label>Id producto</Form.Label>
                    <Form.Control
                      type="texto"
                      placeholder="Identificador de producto"
                      onChange={handleInputtAdd}
                      name="idProduct"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <hr />
              <Row className="mb-3">
                <Col xs={12} sm>
                  <Form.Group controlId="formGridPrecioTotal">
                    <Form.Label>Precio total</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Precio total"
                      onChange={handleInputtAdd}
                      name="vTotal"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={12} sm>
                  <Form.Group controlId="formGridCantidad">
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Cantidad"
                      onChange={handleInputtAdd}
                      name="amount"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={12} sm>
                  <Form.Group controlId="formGridIdPrecioU">
                    <Form.Label>Precio x U</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Precio por U"
                      onChange={handleInputtAdd}
                      name="price"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <hr />
              <Row className="mb-3">
                <Col xs={12} sm>
                  <Form.Group controlId="formGridFechaVenta">
                    <Form.Label>Fecha de venta</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Fecha de venta"
                      onChange={handleInputtAdd}
                      name="dateV"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <hr />
              <Row className="mb-3">
                <Col xs={12} sm>
                  <Form.Group controlId="formGridIdCliente">
                    <Form.Label>Identificacion del cliente</Form.Label>
                    <Form.Control
                      type="texto"
                      placeholder="Identificacion del cliente"
                      onChange={handleInputtAdd}
                      name="idClient"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={12} sm>
                  <Form.Group controlId="formGridNombreCliente">
                    <Form.Label>Nombre del cliente</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nombre del cliente"
                      onChange={handleInputtAdd}
                      name="nameC"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <hr />
              <Row className="mb-3">
                <Col xs={12} sm>
                  <Form.Group controlId="formGridNombreVendedor">
                    <Form.Label>Nombre del vendedor</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nombre del vendedor"
                      onChange={handleInputtAdd}
                      name="nameV"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <OverlayTrigger
                key={"top"}
                placement={"top"}
                overlay={
                  <Tooltip>
                    <strong>{"Guardar"}</strong>.
                  </Tooltip>
                }
              >
                <Button type="submit" className="btn btn-primary">
                  <img src="https://img.icons8.com/material-outlined/20/ffffff/save.png" />
                </Button>
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
                <Button variant="danger" onClick={close}>
                  <img src="https://img.icons8.com/material-outlined/20/ffffff/close-window.png" />
                </Button>
              </OverlayTrigger>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddSales; 