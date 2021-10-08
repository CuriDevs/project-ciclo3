import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const BtnCardProductsDelete = ({ products, setProducts, estilos, nombreProducto, id/* , product */}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const deleteProduct = (id) => {
        const arrayFiltrado = products.filter(product => product.idProducto !== id)
        console.log(id)
        console.log(products.idProducto)
        console.log(arrayFiltrado)
        setProducts(arrayFiltrado)
        handleClose()
    }




return (
    <>
        <button className={`btn  ${estilos} btnCardChildren `} onClick={ handleShow }> Eliminar </button>
        

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar producto</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    {`¿Estás seguro de querer eliminar el producto: ${nombreProducto}?`}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="danger" onClick={() => deleteProduct(id)} type="submit">
                        Eliminar
                    </Button>
                </Modal.Footer>
        </Modal>
    </>
)
}

export default BtnCardProductsDelete



/*
  const eliminarVehiculo = async () => {
    const options = {
      method: 'DELETE',
      url: 'https://vast-waters-45728.herokuapp.com/vehicle/delete/',
      headers: { 'Content-Type': 'application/json' },
      data: { id: vehiculo._id },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('vehículo eliminado con éxito');
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error eliminando el vehículo');
      });
    setOpenDialog(false);
  };

*/