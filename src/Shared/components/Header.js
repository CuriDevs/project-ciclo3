import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {
    Link
} from "react-router-dom";

function Header() {
    return(
        <Navbar bg="dark" expand="lg" variant="dark" >
            <Container>
                <Link to="">
                    <Navbar.Brand href="#home">JALMED</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Modulos" id="basic-nav-dropdown" menuVariant="dark">
                        
                        <Link to="/sales">
                            <NavDropdown.Item href="#action/3.1">Administracion de Ventas</NavDropdown.Item>
                        </Link>

                        <Link to="/register">
                            <NavDropdown.Item href="#action/3.1">Registro ventas</NavDropdown.Item>
                        </Link>
                        
                        <Link to="/products">
                            <NavDropdown.Item href="#action/3.2">Administracion de Productos</NavDropdown.Item>
                        </Link>
                        
                        <Link to="/rol"> 
                            <NavDropdown.Item href="#action/3.3">Administracion de Usuarios</NavDropdown.Item>
                        </Link>
                        
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Cerrar Sesion</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                        <img
                        alt="User"
                        src="../../Images/iconPngSinTexto.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;