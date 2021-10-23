import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { eliminarProducto } from '../utils/api';


const BtnCardProductsDelete = ({ products, setProducts, estilos, product, setEjecutarConsulta }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const deleteProduct = async () => {
      await eliminarProducto(
        product._id,
        (response) => {
          console.log(response.data);
          toast.success('Producto eliminado con éxito');
          setEjecutarConsulta(true);
        },
        (error) => {
          console.error(error);
          toast.error('Error eliminando el producto');
        }
      );
      handleClose()
    };




return (
    <>
        <button className={`btn  ${estilos} btnCardChildren `} onClick={ handleShow }> Eliminar </button>
        

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar producto</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    {`¿Estás seguro de querer eliminar el producto: ${product.name}?`}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="danger" onClick={() => deleteProduct(product._id)} type="submit">
                        Eliminar
                    </Button>
                </Modal.Footer>
        </Modal>
      <ToastContainer position='bottom-center' autoClose={5000} />

    </>
)
}

export default BtnCardProductsDelete



/*
  const deleteVehicle = async () => {
    await eliminarVehiculo(
      vehiculo._id,
      (response) => {
        console.log(response.data);
        toast.success('vehículo eliminado con éxito');
        setEjecutarConsulta(true);
      },
      (error) => {
        console.error(error);
        toast.error('Error eliminando el vehículo');
      }
    );

    setOpenDialog(false);
  };
*/