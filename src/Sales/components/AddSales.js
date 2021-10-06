<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AddSales.css";
import React, {useState, useEffect} from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function AddSales () {
  
  const [showNotificacion, setShowNotificacion] = useState(false);

=======
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
import Query from "./Query"

function AddSales (props) {
>>>>>>> 2209fa87ef72a197c6664edfc33413f5bd4c0e86
  /*
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  */
<<<<<<< HEAD

  return (
    <>
    {/*esto se activara al momento de que el vendedor presione el boton de registrar*/}
    
    <Container className="principal">
      <Row className="justify-content-center mt-5 mb-5">
        <Col className="principal-first-container" lg="6">
            <div>
              <h1 className="mt5 mb-4"> Registro de ventas </h1>
              <hr />
              <Col sm>
                <FloatingLabel
                  controlId="floatingInputIdVenta"
                  label="Identificador de venta"
                >
                  <Form.Control type="number" placeholder="Identificador de venta" />
                </FloatingLabel>
              </Col>
              <hr />
              <Row className="mb-3">
                <Col sm>
                  <FloatingLabel
                    controlId="floatingInputIdProducto"
                    label="Identificador de producto"
                  >
                    <Form.Control type="number" placeholder="Identificador de producto"/>
                  </FloatingLabel>
                </Col>

                <Col sm>
                  <FloatingLabel
                    controlId="floatingInputValorTotal"
                    label="Valor total"
                  >
                    <Form.Control type="number" placeholder="Valor total" />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col sm>
                  <FloatingLabel
                    controlId="floatingInputCantidad"
                    label="Cantidad"
                  >
                    <Form.Control type="number" placeholder="Cantidad" />
                  </FloatingLabel>
                </Col>

                <Col sm>
                  <FloatingLabel
                    controlId="floatingInputPrecioUnitario"
                    label="Precio unitario"
                  >
                    <Form.Control type="number" placeholder="Precio unitario" />
                  </FloatingLabel>
                </Col>

                <Col sm>
                  <FloatingLabel
                    controlId="floatingInputFechaVenta"
                    label="Fecha de venta"
                  >
                    <Form.Control type="date" placeholder="" />
                  </FloatingLabel>
                </Col>
              </Row>
              <hr />
              <Row className="mb-3">
                <Col sm>
                  <FloatingLabel
                    controlId="floatingInputIdCliente"
                    label="Identificacion del cliente"
                  >
                    <Form.Control type="number" placeholder="Identificacion del cliente"
                    />
                  </FloatingLabel>
                </Col>

                <Col sm>
                  <FloatingLabel
                    controlId="floatingInputNombreCliente"
                    label="Nombre del cliente"
                  >
                    <Form.Control type="text" placeholder="Nombre del cliente" />
                  </FloatingLabel>
                </Col>
              </Row>
              <hr />

              <Button variant="primary mt-2" onClick={() => setShowNotificacion(true)} size="lg">Registrar</Button>
              
            </div>
        </Col>
        <Col className="principal-second-container" lg="1">
            <Button className="mt-2" variant="secondary" size="lg" href="/sales">Ventas</Button>
        </Col>
      </Row>
      
    </Container>
    </>
  );
=======
    const [lista, setLista] = useState([{id: "1"}]);
    
    const idVenta = useRef();

    const handleListAdd = () =>{
      
      setLista((stateBefore) => {
        return [...stateBefore, {id: "1", idP: "2", cant:"2", preciU: "2", precioT: "2", fechaV: "2", idC: "2", nomC: "hola"}]
      })
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
            
              <Form>
                <Row className="mb-3">
                  <Col xs={12} sm>
                    <Form.Group controlId="formGridIdVenta">
                      <Form.Label>Id venta</Form.Label>
                      <Form.Control reft={idVenta} type="number" placeholder="Identificador de venta" />
                    </Form.Group>
                  </Col>
                </Row>
                <hr/>
                <Row className="mb-3">
                  <Col xs={12} md={5}>
                    <Form.Group controlId="formGridIdProducto">
                      <Form.Label>Id producto</Form.Label>
                      <Form.Control type="number" placeholder="Identificador de producto" />
                    </Form.Group>
                  </Col>
                  
                  <Col xs={12} md={5}>
                    <Form.Group controlId="formGridCantidad">
                      <Form.Label>Cantidad</Form.Label>
                      <Form.Control type="number" placeholder="Cantidad" />
                    </Form.Group>
                  </Col>
                </Row>
                <hr/>
                <Row className="mb-3">
                  <Col xs={12} md={3}>
                    <Form.Group controlId="formGridIdPrecioU">
                      <Form.Label>Precio x U</Form.Label>
                      <Form.Control type="number" placeholder="Precio por U" />
                    </Form.Group>
                  </Col>
                  
                  <Col xs={12} md={3}>
                    <Form.Group controlId="formGridPrecioTotal">
                      <Form.Label>Precio total</Form.Label>
                      <Form.Control type="number" placeholder="Precio total" />
                    </Form.Group>
                  </Col>

                  <Col xs={12} md={3}>
                    <Form.Group controlId="formGridFechaVenta">
                      <Form.Label>Fecha de venta</Form.Label>
                      <Form.Control type="date" placeholder="Fecha de venta" />
                    </Form.Group>
                  </Col>
                </Row>
                <hr/>
                <Row className="mb-3">
                  <Col xs={12} md={5}>
                    <Form.Group controlId="formGridIdCliente">
                      <Form.Label>Identificacion del cliente</Form.Label>
                      <Form.Control type="number" placeholder="Identificacion del cliente"/>
                    </Form.Group>
                  </Col>
                  
                  <Col xs={12} md={5}>
                    <Form.Group controlId="formGridNombreCliente">
                      <Form.Label>Nombre del cliente</Form.Label>
                      <Form.Control type="text" placeholder="Nombre del cliente" />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Modal.Body>
  
          <Modal.Footer>
          <OverlayTrigger
            key={"top"}
            placement={"top"}
            overlay={
              <Tooltip>
                <strong>{"Guardar"}</strong>.
              </Tooltip>
            }
          >
            <Button onClick={handleListAdd} variant="primary"><img src="https://img.icons8.com/material-outlined/20/ffffff/save.png"/></Button>
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
          </Modal.Footer>
        </Modal>
      </>
    );
>>>>>>> 2209fa87ef72a197c6664edfc33413f5bd4c0e86
};

export default AddSales; 