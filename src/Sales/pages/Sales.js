import React, {useState, useEffect} from "react";
import "../styles/AddSales.css";
import Header from "../../Shared/components/Header";
import Query from "../components/Query";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import AddSales from "../components/AddSales";
import Container from "react-bootstrap/Container";

function Sales() {
    const [show, setShow] = useState(false)

    return(
        <>
            <Header />
                <Container>
                    <Row>
                        <Button className="btn-principal" variant="primary" onClick={() => setShow(true)}>Registrar</Button>
                        <AddSales show={show} onHide={() => setShow(false)}/>
                    </Row>
                </Container>
            <Query />
        </>    
    );
}

export default Sales;