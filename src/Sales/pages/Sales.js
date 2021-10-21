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
import Notification from '../components/Notification';

import { api } from '../utils/api';

function Sales() {
  
  //muestra el modal de registro ventas
  const [ show, setShow ] = useState(false);
  
  //lista de ventas registradas
  const [ ventas, setVentas ] = useState([]);

  //hook para mostrar la notificacion
  const [notify, setNotify] = useState(false);

  //consultar venta
  const [search,  setSearch] = useState({
    idSales:""
  });

  //con esta funcion pedimos todos los datos a la api
  const fetchData = async () => {
    const response = await api.ventas.list();
    setVentas(response);
  };

  //cada vez que recargemos el use entrara en funcion
  useEffect(() => {
    fetchData();
  }, []);
  
  //function para ordenar los datos
  const sortData = (datos) =>{
    //ordenamos los datos y retornamos
    const listAdd = {
      idSales: datos.idSales,
      idProduct: datos.idProduct,
      vTotal: datos.vTotal,
      amount: datos.amount,
      price: datos.price,
      dateV: datos.dateV,
      state: datos.state,
      idClient: datos.idClient,
      nameC: datos.nameC,
      nameV: datos.nameV,
    }
    return listAdd;
  }

  //guarda los datos del input search
  const handleInput = (e) => {
    setSearch({
      ...search, 
      [e.target.name] : e.target.value
    });
  };

  //al presionar el boton buscar nos mostrara solo los datos buscados
  const handleListAdd = (e) =>{
    e.preventDefault();

    const fetchData = async() =>{
      console.log('enviando datos a la api')
      const res = await api.ventas.getProduct(search.idSales);
      if(res === null){
        console.log('venta no encontrada')
        return; //404
        //se llama al componente notification y mostramos un mensaje de que no se muestra el producto, en proceso
      }
      
      const object = sortData(res);
      setVentas([object]);
      console.log('datos guardados en el hook')
    }

    fetchData();
  }

  //recibimos un boolean(false) que mandamos desde sales, para cerrar el modal
  const show2 = datos => {
    setShow(datos) //cambiamos el estado de show pasando false para cerrar el modal
  }
  
  /* const send = async(datos) =>{
    //en caso de tener todo correctamente pasamos los datos a la funcion que ordena
    const list = sortData(datos);

    console.log('enviando datos');
    console.log(list);
    
    await api.ventas.create(list);
    console.log('datos enviados');
    //solicitamos una nueva consulta para refrescar los datos y poder mostrar los registros recientes
    fetchData();
  } */

  //obtenemos los datos de el componente AddSales y validamos que no esten vacios
  const datosConsulta = (datos) =>{
    
    if(
      datos.idSales === '' ||
      datos.idProduct === '' ||
      datos.vTotal === '' ||
      datos.amount == 0 ||
      datos.price == 0 ||
      datos.idClient === '' ||
      datos.nameC === '' ||
      datos.nameV === ''
    ){
      //mandamos true, si los capos estan vacios o si uno de ellos lo esta
      setNotify(true);
      return;
    }

    const object = sortData(datos);
    //enviamos los datos a la funcion que se encargara de enviarlos a la api
    const send = async(datos) =>{
      //en caso de tener todo correctamente pasamos los datos a la funcion que ordena
      const list = sortData(datos);
  
      console.log('enviando datos');
      console.log(list);
      
      await api.ventas.create(list);
      console.log('datos enviados');
      
    }

    send (object); //enviamos los datos recibidos a la funcion encargada de enviarlos a la api

    //solicitamos una nueva consulta para refrescar los datos y poder mostrar los registros recientes
    fetchData();

    //en caso de que ningun capo este vacio, mandamos false para no mostrar el mensaje
    setNotify(false);
  }
  
  //esta variable captura el mensaje y lo manda al componente
  let component;

  if(notify){
    component = <Notification show={true} mensaje="Todos los campos son obligatorios!"/>;
  }else{
    component = null;
  }

  return (
    <>
      <Header />
      <Container className="primary">
        <Row>{component}</Row>
        <Row className="justify-content-center" >
          <Col className="principal-second" xs={ 6 } md={ 2 }>
            <Button id="registrar" variant="primary" onClick={() => setShow(true)}>Crear</Button>
            <AddSales show={show} show2={show2} datosConsulta={datosConsulta} />
          </Col>
          <Col className="principal-third" xs={ 6 } md={ 7 }>
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={handleInput}
                placeholder="Buscar"
                type="text"
                name="idSales"
              />
            </InputGroup>
          </Col>
          <Col className="principal-fourth" xs={ 6 } md={ 1 } >
            <Button onClick={handleListAdd} type="submit"><img src="https://img.icons8.com/material-outlined/24/ffffff/search-in-list.png" /></Button>
          </Col>
          <Col className="principal-fifth" xs={ 6 } md={ 1 } >  
            <Button onClick={fetchData}><img src="https://img.icons8.com/material-outlined/24/ffffff/list.png"/></Button>
          </Col>
        </Row>
      </Container>
      <Container className="secondary">
        <Col>
          {/* <Toast /> */}
          <Query ventas={ ventas } />
        </Col>
      </Container>
    </>
  );
}

export default Sales;