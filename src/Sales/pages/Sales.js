import React, { useState, useEffect } from "react";
import '../styles/Sales.css';
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

import { api } from '../utils/api';

function Sales() {
  const [ show, setShow ] = useState(false);
  const [ ventas, setVentas ] = useState([]);

  //consultar venta
  const [search,  setSearch] = useState({
    idSales:""
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.ventas.list();
      setVentas(response);
    };

    fetchData();
  }, []);
  
  //implementando busqueda individual, aun en proceso...
  const handleInput = async(e) => {
    setSearch({
      ...search, 
      [e.target.name] : e.target.value
    });
  };

  const handleListAdd = async(e) =>{
    e.preventDefault();
    
    const res = await api.ventas.getProduct(search.idSales);
    setVentas(res);
  }


  return (
    <>
      <Header />
      <Container className="principal">
        <Row className="justify-content-center" >
          <Col className="principal-second" xs={ 6 } md={ 2 }>
            <Button id="registrar" variant="primary" onClick={ () => setShow(true) } >Crear{''}<img src="https://img.icons8.com/material-outlined/20/ffffff/add.png" /></Button>
            <AddSales show={ show } onHide={ () => setShow(false) } />
          </Col>
          <Col className="principal-third" xs={ 6 } md={ 7 }>
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={handleInput}
                name="idSales"
              />
            </InputGroup>
          </Col>
          <Col className="principal-fourth" xs={ 6 } md={ 1 } onSubmit={handleListAdd}>
            <Button type="submit"><img src="https://img.icons8.com/material-outlined/24/ffffff/search-in-list.png" /></Button>
          </Col>
        </Row>
      </Container>
      <Query ventas={ ventas } />
    </>
  );
}

export default Sales;