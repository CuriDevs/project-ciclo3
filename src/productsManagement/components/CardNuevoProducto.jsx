import React, { useState, useRef } from 'react'
import { Link } from "react-router-dom";


import imgPrueba from "../Images/plus.png"

import Modal from 'react-bootstrap/Modal'
/* import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form' */

import { crearProducto } from '../utils/api'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CardNuevoProducto = ({ products, setProducts, setEjecutarConsulta }) => {

  const [show, setShow] = useState(false);
  const [estadoProducto, setEstadoProducto] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });

    await crearProducto(
      {
        name: nuevoProducto.name,
        value: nuevoProducto.value,
        status: nuevoProducto.status,
        description: nuevoProducto.description,
        urlImg: nuevoProducto.urlImg,
        nombreImg: nuevoProducto.nombreImg
      },
      (response) => {
        console.log(response.data);
        toast.success('El producto fue agregado con éxito');
        setEjecutarConsulta(true);
      },
      (error) => {
        console.error(error);
        toast.error('Error creando un producto');
      }
    );
    handleClose()

  }

  return (

    <>
      <button onClick={handleShow} className="card cardNuevoProducto">
        <img className="imgAgregarProducto" src={imgPrueba} alt="agregar pruducto" />
        <br/>
        <h3 className="titleCardAgregarProducto">Agregar producto</h3>
      </button>

      <Modal show={show} onHide={handleClose}>

        <div className='flex flex-col items-center justify-center my-2'>
          <Modal.Header>
            <h2 className='text-2xl font-extrabold text-gray-800'>Nuevo producto</h2>
          </Modal.Header>
          <form ref={form} onSubmit={submitForm} className='flex flex-col'>
            <div className="my-2">
              <label className='flex flex-col' htmlFor='name'>
                Nombre del producto
                <input
                  name='name'
                  className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                  type='text'
                  placeholder='iphone 10'
                  required
                />
              </label>
            </div>

            <div className="my-2">
              <label className='flex flex-col' htmlFor='urlImg'>
                Url imagen
                <input
                  name='urlImg'
                  className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                  type='text'
                  placeholder='http://via.placeholder.com/640x360'
                  required
                />
              </label>
            </div>

            <div className="my-2">
              <label className='flex flex-col' htmlFor='nombreImagen'>
                Nombre imagen
                <input
                  name='nombreImg'
                  className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                  type='text'
                  placeholder='Imagen Iphone 10'
                  required
                />
              </label>
            </div>

            <div className="my-2">
              <label className='flex flex-col' htmlFor='value'>
                Valor del producto
                <input
                  name='value'
                  className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                  type='number'
                  min={0}
                  max={100000000}
                  placeholder='1000000'
                  required
                />
              </label>
            </div>

            <div className="my-2">
              <p>Estado del producto</p>
              <div className="flex flex-col">
              <label>
                <input type="radio" name="status" value={true} /> Disponible
              </label>
              <label>
                <input type="radio" name="status" value={false} required/> No disponible
              </label>
              </div>
            </div>

            <div className="my-2">
              <label className='flex flex-col' htmlFor='description'>
                Descripción del producto
                <textarea
                  name='description'
                  className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 h-80'
                  placeholder=' Capacidad: 256 GB
                                Alto: 14,36 cm
                                Ancho: 7,09 cm
                                Grosor: 0,77 cm
                                Peso: 174 g'
                  required
                />
              </label>
            </div>
            <Modal.Footer>
              <button type="button" onClick={handleClose} className="col-span-2 bg-gray-600 p-2 rounded-md shadow-md hover:bg-gray-800 text-white">Cancelar</button>

              <button
                type='submit'
                
                className='col-span-2 bg-blue-600 p-2 rounded-md shadow-md hover:bg-blue-800 text-white '>
                Guardar producto
              </button>
            </Modal.Footer>
          </form>
        </div>

      </Modal>
      <ToastContainer position='bottom-center' autoClose={5000} />
    </>
  )
}


export default CardNuevoProducto


/*
const FormularioCreacionVehiculos = ({ setMostrarTabla, listaVehiculos, setVehiculos }) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoVehiculo = {};
    fd.forEach((value, key) => {
      nuevoVehiculo[key] = value;
    });

    await crearVehiculo(
      {
        name: nuevoVehiculo.name,
        brand: nuevoVehiculo.brand,
        model: nuevoVehiculo.model,
      },
      (response) => {
        console.log(response.data);
        toast.success('Vehículo agregado con éxito');
      },
      (error) => {
        console.error(error);
        toast.error('Error creando un vehículo');
      }
    );

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