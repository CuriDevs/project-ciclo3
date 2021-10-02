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

  /*
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  */

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
};

export default AddSales; 