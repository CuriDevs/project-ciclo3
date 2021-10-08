import React, { useState, useRef } from 'react'
import { Link } from "react-router-dom";


import imgPrueba from "../Images/plus.png"

import Modal from 'react-bootstrap/Modal'
/* import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form' */


const CardNuevoProducto = ({ products, setProducts}) => {

    const [show, setShow] = useState(false);
    const [estadoProducto, setEstadoProducto] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    /*  const addProduct = (product) => {
        product.id = uuid4()
        setProducts([
            ...products,
            product])
    } */


    const form = useRef(null);


    const submitForm = (product) => {
        product.id = 1234
        setProducts([
            ...products,
            product])
        }


    return (
        
        <>
            <button onClick={handleShow} className="card cardNuevoProducto">
                <img className="imgAgregarProducto" src={imgPrueba} alt="agregar pruducto" />
                <h3 className="titleCardAgregarProducto">Agregar producto</h3>
            </button>

            <Modal show={show} onHide={handleClose}>

                <div className='flex flex-col items-center justify-center my-2'>
                    <Modal.Header>
                        <h2 className='text-2xl font-extrabold text-gray-800'>Nuevo producto</h2>
                    </Modal.Header>
                    <form ref={form} onSubmit={submitForm} className='flex flex-col'>
                        
                        <label className='flex flex-col' htmlFor='nombreProducto'>
                            Nombre del producto
                            <input
                                name='nombreProducto'
                                className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                                type='text'
                                placeholder='iphone 10'
                                required
                            />
                        </label>

                        <label className='flex flex-col' htmlFor='valorProducto'>
                            Valor del producto
                            <input
                                name='valorProducto'
                                className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                                type='number'
                                min={0}
                                max={100000000}
                                placeholder='1000000'
                                required
                            />
                        </label>

                        <label className='flex flex-col' htmlFor='disponibleProducto'>
                            Estado del producto
                            <select
                                className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                                name='disponibleProducto'
                                required
                                defaultValue={0}
                            >
                                <option disabled value={0}>
                                    Seleccione una opción
                                </option>
                                <option value="Disponible">Disponible</option>
                                <option value="No disponible">No disponible</option>
                            </select>
                        </label>
                        
                        <label className='flex flex-col' htmlFor='descripcionProducto'>
                            Descripción del producto
                            <textarea
                                name='descripcionProducto'
                                className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 h-80'
                                placeholder=' Capacidad: 256 GB
                                Alto: 14,36 cm
                                Ancho: 7,09 cm
                                Grosor: 0,77 cm
                                Peso: 174 g'
                                required
                            />

                            
                        </label>
                        <Modal.Footer>
                        <button
                            type='submit'
                            className='col-span-2 bg-blue-600 p-2 rounded-md shadow-md hover:bg-blue-800 text-white'>
                            Guardar producto
                        </button>
                        </Modal.Footer>
                    </form>
                </div>

            </Modal>

        </>
    )
}

export default CardNuevoProducto


/*
const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoVehiculo = {};
    fd.forEach((value, key) => {
      nuevoVehiculo[key] = value;
    });

    const options = {
      method: 'POST',
      url: 'https://vast-waters-45728.herokuapp.com/vehicle/create',
      headers: { 'Content-Type': 'application/json' },
      data: { name: nuevoVehiculo.name, brand: nuevoVehiculo.brand, model: nuevoVehiculo.model },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Vehículo agregado con éxito');
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error creando un vehículo');
      });

    setMostrarTabla(true);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Crear nuevo vehículo</h2>
      <form ref={form} onSubmit={submitForm} className='flex flex-col'>
        <label className='flex flex-col' htmlFor='nombre'>
          Nombre del vehículo
          <input
            name='name'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='text'
            placeholder='Corolla'
            required
          />
        </label>
        <label className='flex flex-col' htmlFor='marca'>
          Marca del vehículo
          <select
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            name='brand'
            required
            defaultValue={0}
          >
            <option disabled value={0}>
              Seleccione una opción
            </option>
            <option>Renault</option>
            <option>Toyota</option>
            <option>Ford</option>
            <option>Mazda</option>
            <option>Chevrolet</option>
          </select>
        </label>
        <label className='flex flex-col' htmlFor='modelo'>
          Modelo del vehículo
          <input
            name='model'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='number'
            min={1992}
            max={2022}
            placeholder='2014'
            required
          />
        </label>

        <button
          type='submit'
          className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
        >
          Guardar vehiculo
        </button>
      </form>
    </div>
  );
};
*/



