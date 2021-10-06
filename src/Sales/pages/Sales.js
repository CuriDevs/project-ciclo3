<<<<<<< HEAD
import Header from "../../Shared/components/Header";
import Query from "../components/Query";

function Sales() {
    return(
        <>
            <Header />
            <Query />
        </>    
    );
=======
import React, {useState, useEffect} from "react";
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

function Sales() {
  const [show, setShow] = useState(false);
  

  return (
    <>
      <Header />
      <Container className="principal">
        <Row className="justify-content-center">
          <Col className="principal-second" xs={6} md={2}>
            <Button id="registrar" variant="primary" onClick={() => setShow(true)} >Registrar{' '}<img src="https://img.icons8.com/material-outlined/20/ffffff/add.png"/></Button>
            <AddSales show={show} onHide={() => setShow(false)} />
          </Col>
          <Col className="principal-third" xs={6} md={7}>
            <InputGroup className="mb-3">
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
          </Col>
          <Col className="principal-fourth" xs={6} md={1}>
            <Button variant="primary"><img src="https://img.icons8.com/material-outlined/24/ffffff/search-in-list.png"/></Button>
          </Col>
        </Row>
      </Container>
      <Query />
    </>
  );
>>>>>>> 2209fa87ef72a197c6664edfc33413f5bd4c0e86
}

export default Sales;