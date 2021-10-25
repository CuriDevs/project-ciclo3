import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../Shared/components/Header"
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Edit from "../components/Edit";
import Remove from "../components/Remove";
import { api } from '../../utils/api.js'


const Titulos = [ 'ID Usuario', 'Nombre Completo', 'Correo', 'Rol', 'Estado', 'Documento de identificación', 'Fecha registro'];

function Rol() {

  //Listado de usuarios
  const [ users, setUsuarios ] = useState([]);

  const [ consulta, setConsulta ] = useState(true);

  //cada vez que recargemos el use entrara en funcion
  useEffect(() => {
    //con esta funcion pedimos todos los datos a la api
    const fetchData = async () => {
      const respUsers = await api.Users.list();
      setUsuarios(respUsers);
      setConsulta(false);
    };

    if (consulta) {
      fetchData();
    }

  }, [ consulta ]);

  if (!users.length) {
    return (
        <>
          <Header />
          <h1 class="title">No se registran Usuarios!</h1>
        </>
    );
  } else {
      return (
          <>
            <Header />
            <Container className="secondary">
              <Col>
                <Button variant="secondary" className="border border-5 border-white" href="/products">Volver</Button>{ ' ' }
                <Tab.Container defaultActiveKey="first" className="border border-5 Table">
                    <Row className="border border-5 border-white">
                        <Col md="auto">
                            <Table striped bordered hover size="sm" responsive="xl">
                                <thead>
                                    <tr>
                                        { Titulos.map((value) => (
                                            <th>{ value }</th>
                                        )) }
                                        <th colSpan="2">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody >
                                { users.map((user) => (
                                    <tr>
                                        <th>{ user._id }</th>
                                        <th>{ user.UserName }</th>
                                        <th>{ user.Email }</th>
                                        <th>{ user.Rol }</th>
                                        <th>{ user.State }</th>
                                        <th>{ user.Document }</th>
                                        <th>{ user.date }</th>
                                        <td><Edit user={ user } setConsulta={ setConsulta }  /></td>
                                        <td><Remove user={ user } setConsulta={ setConsulta } /></td>
                                    </tr>
                                )) }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Tab.Container>
              </Col>
            </Container>
          </>
      );
  }

}

export default Rol;
