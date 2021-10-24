import React, { useState, useEffect } from "react";
import "../styles/Sales.css";
import Header from "../../Shared/components/Header";
import Query from "../components/Query";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import AddSales from "../components/AddSales";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

import { api } from '../../utils/api';

function Sales() {

  //muestra el modal de registro ventas
  const [ show, setShow ] = useState(false);

  //Listado de usuarios
  const [ users, setUsuarios ] = useState([]);

  //lista de ventas registradas
  const [ ventas, setVentas ] = useState([]);

  //consultar venta
  const [ search, setSearch ] = useState({
    idSales: ""
  });

  const [ consulta, setConsulta ] = useState(true);

  //cada vez que recargemos el use entrara en funcion
  useEffect(() => {
    //con esta funcion pedimos todos los datos a la api
    const fetchData = async () => {
      const response = await api.ventas.list();
      const respUsers = await api.Users.list();
      setVentas(response);
      setUsuarios(respUsers);
      setConsulta(false);
    };

    if (consulta) {
      fetchData();
    }

  }, [ consulta ]);


  //guarda los datos del input search
  const handleInput = (e) => {
    if (e.target.value === '') {
      setConsulta(true);
    }
    setSearch({
      ...search,
      [ e.target.name ]: e.target.value,
    });

    e.preventDefault();

    searchIdSales();
  };

  const searchIdSales = async () => {
    console.log('enviando datos a la api');
    const res = await api.ventas.getProduct(search.idSales);
    if (res === null) {
      console.log('venta no encontrada');
      return; //404
      //se llama al componente notification y mostramos un mensaje de que no se muestra el producto, en proceso
    }
    setVentas([ res ]);
  };

  //recibimos un boolean(false) que mandamos desde sales, para cerrar el modal
  const show2 = datos => {
    setShow(datos); //cambiamos el estado de show pasando false para cerrar el modal
  };

  return (
    <>
      <Header />
      <Container className="primary">
        {/*<Row>{component }</Row>*/ }
        <Row className="justify-content-center" >
          <Col className="principal-second" xs={ 6 } md={ 2 }>
            <Button id="registrar" variant="primary" onClick={ () => setShow(true) }>Crear</Button>
            <AddSales show={ show } show2={ show2 } setConsulta={ setConsulta } users={ users } />
          </Col>
          <Col className="principal-third" xs={ 6 } md={ 7 }>
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={ handleInput }
                placeholder="Buscar"
                type="text"
                name="idSales"
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>
      <Container className="secondary">
        <Col>
          {/* <Toast /> */ }
          <Query ventas={ ventas } setConsulta={ setConsulta } users={ users } />
        </Col>
      </Container>
    </>
  );
}

export default Sales;