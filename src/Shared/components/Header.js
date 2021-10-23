import React, { useState, useEffect } from "react";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../Images/logo copia1.png';
import Fondo from '../../Images/Fondo.png';
import styles from "../styles/Image.css";
import { useHistory } from "react-router-dom";

import {
    Link
} from "react-router-dom";

function Header() {

    const history = useHistory();

    const url = sessionStorage.getItem('Image');
    const user = sessionStorage.getItem('_id');
    const name = sessionStorage.getItem('Name');

    const logout = () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem('Image');
        sessionStorage.removeItem('_id');
        sessionStorage.removeItem('Name');
        history.push("/");
    };

    return (
        
        <Navbar bg="dark" expand="lg" variant="dark" >
            <Container>
                <Link to="">
                    <Navbar.Brand href="#home" >
                        <img src={ logo } width="80" height="80" className="align-top d-inline-block" />

                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Modulos" id="basic-nav-dropdown" menuVariant="dark" ml="2">

                            <Link to="/sales">
                                <NavDropdown.Item href="#action/3.1">Administracion de Ventas</NavDropdown.Item>
                            </Link>
                            <Link to="/products">
                                <NavDropdown.Item href="#action/3.2">Administracion de Productos</NavDropdown.Item>
                            </Link>

                            <Link to="/rol">
                                <NavDropdown.Item href="#action/3.3">Administracion de Usuarios</NavDropdown.Item>
                            </Link>

                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/" onClick={logout}>Cerrar Sesion</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/* <Images usuarios={usuarios} /> */}
                    <img
                        alt="User"
                        src={ url }
                        width="60"
                        height="60"
                        className="align-top d-inline-block img-border"
                    />{ ' ' }
                    <Navbar.Text>
                        Signed in as: <a href="#login">{name}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;