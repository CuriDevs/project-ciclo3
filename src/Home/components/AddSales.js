import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AddSales.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function AddSales () {
  /*
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  */

  return (
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
                  className="mb-3"
                >
                  <Form.Control type="" placeholder="Identificador de venta" />
                </FloatingLabel>
              </Col>
              <hr />
              <Row className="mb-3">
                <Col sm>
                  <FloatingLabel
                    controlId="floatingInputIdProducto"
                    label="Identificador de producto"
                    className="mb-3"
                  >
                    <Form.Control type="" placeholder="Identificador de producto"/>
                  </FloatingLabel>
                </Col>

                <Col sm>
                  <FloatingLabel
                    controlId="floatingInputValorTotal"
                    label="Valor total"
                    className="mb-3"
                  >
                    <Form.Control type="" placeholder="Valor total" />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col sm>
                  <FloatingLabel
                    controlId="floatingInputCantidad"
                    label="Cantidad"
                    className="mb-3"
                  >
                    <Form.Control type="" placeholder="Cantidad" />
                  </FloatingLabel>
                </Col>

                <Col sm>
                  <FloatingLabel
                    controlId="floatingInputPrecioUnitario"
                    label="Precio unitario"
                    className="mb-3"
                  >
                    <Form.Control type="" placeholder="Precio unitario" />
                  </FloatingLabel>
                </Col>

                <Col sm>
                  <FloatingLabel
                    controlId="floatingInputFechaVenta"
                    label="Fecha de venta"
                    className="mb-3"
                  >
                    <Form.Control type="" placeholder="" />
                  </FloatingLabel>
                </Col>
              </Row>
              <hr />
              <Row className="mb-3">
                <Col sm>
                  <FloatingLabel
                    controlId="floatingInputIdCliente"
                    label="Identificacion del cliente"
                    className="mb-0"
                  >
                    <Form.Control
                      type=""
                      placeholder="Identificacion del cliente"
                    />
                  </FloatingLabel>
                </Col>

                <Col sm>
                  <FloatingLabel
                    controlId="floatingInputNombreCliente"
                    label="Nombre del cliente"
                    className="mb-0"
                  >
                    <Form.Control type="" placeholder="Nombre del cliente" />
                  </FloatingLabel>
                </Col>
              </Row>
              <hr />

              <Button variant="primary mt-2" >Registrar</Button>
            </div>
        </Col>
        <Col className="principal-second-container" lg="1">
            <Button href="/sales">Ventas</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AddSales; 