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
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Notification from './Notification';

import { api } from '../../utils/api';

//api productos
import { obtenerProductos } from '../../productsManagement/utils/api.js';

function AddSales ({show, show2, setConsulta}) {

  const [notify, setNotify] = useState(false);
  const [notifyError, setNotifyError] = useState(false);
  //const handle = () => setNotifyError(true);

  const [productos, setProductos] = useState([])

  const [consultarProducto, setConsultarProducto] = useState({_id_product: ''})
  const user_id = sessionStorage.getItem('_id');
  //le damos el estado inicial al hook, osea sus valores por default
  const [list, setList] = useState({
    idProduct: '',
    vTotal: 0,
    amount: 0,
    price: 0,
    dateV: "",
    state: "En proceso",
    idVendedor: "",
    nameC: "",
    Documento: 1,
  });

  useEffect(() => {
    const fecthProductos = async () => {
      await obtenerProductos((response) => {
        console.log('la respuesta que se recibio fue', response);
        setProductos(response.data);
      }, (error) => {
        console.error('Salio un error:', error);
      }
      )}
    fecthProductos();

  }, []);

  //escucha el cambio de los inputs
  const handleInputtAdd = (e) => {

    //cambiamos el estado
    setList({...list,
      [e.target.name]: e.target.value, //obtenemos los datos y los pasamos al hook
    });

  };

  //luego esto se acciona al momento de presionar el boton guardar
  const handleListAdd = (e) => {
    e.preventDefault();
    insert(list);
    
    setConsulta(true);
  };
  
  
  const insert = async(list) =>{
    const listAdd = {
      idProduct: list.idProduct,
      vTotal: list.vTotal,
      amount: list.amount,
      price: list.price,
      dateV: list.dateV,
      state: list.state,
      idVendedor: user_id,
      nameC: list.nameC,
      Documento: list.Documento,
    };
    const res = await api.ventas.create(listAdd);
    console.log(res);
    console.log(res.statusCode)

    if(res.statusCode == 400){
      setNotifyError(true);
    }
    if(res.statusCode == 201){
      setNotify(true);
    }
  }

  const handleInputIdProduct = (e) => {

      //cambiamos el estado
      setConsultarProducto({
        ...consultarProducto,
        [e.target.name]: e.target.value, //obtenemos los datos y los pasamos al hook
      });
      e.preventDefault();

  };

  const getResIdProductos = () =>{
    const productData = productos.filter(item => item._id === consultarProducto._id_product);
    console.log(productData);
    /*mapeamos el array productData que creamos al filtrar la lista productos para obtener el _id y le ponemos [0] ya que 
    el mapeo nos devuelve el valor en un array en la posicion 0, lo mismo hacemos con el value*/
    list.idProduct = productData.map(item => item._id)[0]; 
    list.price = productData.map(item => item.value)[0];
    list.vTotal = list.amount * list.price;
  }
  getResIdProductos();


  let component;
  if(notify){
    component = <Notification setNotify={setNotify} setNotifyError={setNotifyError} show={notify} mensaje='Venta registrada correctamente!'/>
  }else
    if(notifyError){
      component = <Notification setNotify={setNotify} setNotifyError={setNotifyError}  show={notifyError} mensaje='Todos los campos son obligatorios'/>
    }else{
      component = null;
    }
  //al presionar el boton de cerrar el modal enviamos un boolean(false) a la page sales para cambiar el estado del hook show

  const close = () =>{
    show2(false);
  }

  return (
    <>
      <Row>{component }</Row>
      <Modal onClose={show} show={show} className="mb" onHide={show}>
        <Modal.Header>
          <Modal.Title>Regitro de ventas</Modal.Title>
        </Modal.Header>

        <Modal.Body className="show-grid">
          <Container className="principal">
            <Form onSubmit={handleListAdd}>
              <Row className="mb-3">
              </Row>
              <Row className="mb-3">
                <Col xs={12} sm>
                  
                  <FloatingLabel controlId="formGridIdProducto" label="Id producto">
                    <Form.Select aria-label="Floating label select example" onChange={handleInputIdProduct} name="_id_product">
                      <option>Seleciona el Id del producto</option>
                      {/*<QueryProducts products={productos}/>*/}
                      {productos.map((value) => (
                        <option>{value._id}</option>
                      ))} 
                      {/*<option value="3">Three</option>*/}
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>
              <hr />
              <Row className="mb-3">
                <Col xs={12} sm>
                  <Form.Group controlId="formGridIdPrecioU">
                    <Form.Label>Precio x U</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder={list.price}
                      readOnly
                      onChange={handleInputtAdd}
                      name="price"
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
                  <Form.Group controlId="formGridPrecioTotal">
                    <Form.Label>Precio total</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder={list.vTotal}
                      readOnly
                      onChange={handleInputtAdd}
                      name="vTotal"
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
                      name="Documento"
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
                  <Form.Group controlId="formGridIdVendedor">
                    <Form.Label>Id vendedor</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={user_id}
                      readOnly
                      onChange={handleInputtAdd}
                      name="idVendedor"
                    />
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
                <Button onClick={handleListAdd} className="btn btn-primary">
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
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddSales; 