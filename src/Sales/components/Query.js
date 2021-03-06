import Table from "react-bootstrap/Table";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fact from "./Fact";
import Button from "react-bootstrap/Button";
import '../styles/Query.css';

var Titulos = [ 'ID Venta', 'ID Producto', 'Valor Total', 'Cantidad', 'Precio Unitario', 'Fecha Venta', 'Estado', 'Cliente', 'Documento' ];

function Query({ ventas, setConsulta, users }) {

    if (!ventas.length) {
        return (
            <>
                <h1 class="title">No se registran ventas!</h1>
            </>
        );
    } else {
        return (
            <>
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
                                    <Fact ventas={ ventas } setConsulta={ setConsulta } users={ users } />
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Tab.Container>
            </>
        );
    }
}

export default Query;