import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return(
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">JALMED</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Modulos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Administracion de Ventas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Administracion de Productos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Administracion de usuarios</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Cerrar Sesion</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                        <img
                        alt=""
                        src="../Images/iconPngSinTexto.png"
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