import Table from "react-bootstrap/Table";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fact from "./Fact";
import Button from "react-bootstrap/Button";

var Titulos = ['Identificador','Valor Venta','Cantidad','Precio Unitario','Fecha Venta','Documento Identificación','Nombre Cliente','Vendedor'];
var Clientes = [1,'$90000','2','$45000','2021-09-26','1031456987','Manuel Lopez','Jose Jose']

function Query () {
    return(
        <>
            <Button variant="secondary" className="border border-5 border-white">Volver</Button>{' '}
            <Tab.Container defaultActiveKey="first" className="border border-5">
                <Row className="border border-5 border-white">
                    <Col sm={1}></Col>
                    <Col md="auto">
                    <Table striped bordered hover size="sm" responsive="xl">
                        <thead>
                            <tr>
                                {Titulos.map ((value) => (
                                    <th>{value}</th>
                                ))}
                                <th colSpan="2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Fact Clientes={Clientes}/>
                            
                            {/* <tr>
                                <td>2</td>
                                {Cliente2.map ((value) => (
                                    <th>{value}</th>
                                ))}
                                <td><Button variant="primary">Editar</Button>{' '}</td>
                                <td><Button variant="danger">Eliminar</Button>{' '}</td>
                            </tr> */}
                            
                        </tbody>
                    </Table>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
            </Tab.Container> 
        </>
    );
}

export default Query;