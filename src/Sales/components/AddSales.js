import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function AddSales (props) {
  /*
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  */

    return (
      <>
        {/* lo que esta en onClick hace lo mismo que la linea comentada de arriba solo que no le pasarias una variable(handleClose o Show) si no directaente el arrow function*/}
  
        {/*<Button controId="registro" variant="primary" onClick={() => {}}>{" "}Registrar{" "}</Button>*/}
        {/*recibimos lo que nos manda el hook con la variable show y la ponemos en unas llaves dentro de modal con unos 3 puntos antes, que no se para que sirven*/}
        <Modal {...props} className="mb">
          <Modal.Header>
            <Modal.Title>Regitro de ventas</Modal.Title>
          </Modal.Header>
  
          <Modal.Body className="show-grid">
            <Form>
              <Col xs={12} md={12}>
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
                <Col xs={6} md={6}>
                  <FloatingLabel
                    controlId="floatingInputIdProducto"
                    label="Identificador de producto"
                    className="mb-3"
                  >
                    <Form.Control type="" placeholder="Identificador de producto"/>
                  </FloatingLabel>
                </Col>
  
                <Col xs={6} md={6}>
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
                <Col xs={6} md={4}>
                  <FloatingLabel
                    controlId="floatingInputCantidad"
                    label="Cantidad"
                    className="mb-3"
                  >
                    <Form.Control type="" placeholder="Cantidad" />
                  </FloatingLabel>
                </Col>
  
                <Col xs={6} md={4}>
                  <FloatingLabel
                    controlId="floatingInputPrecioUnitario"
                    label="Precio unitario"
                    className="mb-3"
                  >
                    <Form.Control type="" placeholder="Precio unitario" />
                  </FloatingLabel>
                </Col>
  
                <Col xs={6} md={4}>
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
                <Col xs={6} md={6}>
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
  
                <Col xs={6} md={6}>
                  <FloatingLabel
                    controlId="floatingInputNombreCliente"
                    label="Nombre del cliente"
                    className="mb-0"
                  >
                    <Form.Control type="" placeholder="Nombre del cliente" />
                  </FloatingLabel>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="primary"> Registrar venta</Button>
            <Button variant="secondary" onClick={props.onHide}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default AddSales; 