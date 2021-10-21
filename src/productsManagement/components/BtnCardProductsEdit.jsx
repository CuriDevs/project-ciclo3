import React, { useState, useRef } from 'react'
import Modal from 'react-bootstrap/Modal'
/* import Button from 'react-bootstrap/Button' */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editarProducto } from '../utils/api';
/* import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form' */


const BtnCardProductsEdit = ({ estilos, product, setEjecutarConsulta }) => {

    const [show, setShow] = useState(false);

    const [infoNuevoProducto, setInfoNuevoProducto] = useState({
        name: product.name,
        value: product.value,
        status: product.status,
        description: product.description,
        urlImg: product.urlImg,
        nombreImg: product.nombreImg
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const actualizarVehiculo = async () => {

        await editarProducto(
            product._id,
            {
                name: infoNuevoProducto.name,
                value: infoNuevoProducto.value,
                status: infoNuevoProducto.status,
                description: infoNuevoProducto.description,
                urlImg: infoNuevoProducto.urlImg,
                nombreImg: infoNuevoProducto.nombreImg
            },
            (response) => {
                console.log(response.data);
                toast.success('Producto modificado con éxito');
                setEjecutarConsulta(true);
            },
            (error) => {
                toast.error('Error modificando el producto');
                console.error(error);
            }
        );
    };

    //TODO: tratar de cambiar lo que se envia por la url para evitar que la página vuelva a cargar

    return (
        <>
            <button className={`btn ${estilos} btnCardChildren `} onClick={handleShow}> Editar </button>


            <Modal show={show} onHide={handleClose}>
                <div className='flex flex-col items-center justify-center my-2'>
                    <Modal.Header>
                        <h2 className='text-2xl font-extrabold text-gray-800'>Editar producto</h2>
                    </Modal.Header>

                    <form className='flex flex-col'>
                        <label className="flex bg-gray-200 rounded-md p-2 justify-center">ID: {product._id}</label>
                        <br />

                        <div className="my-2">
                            <label className='flex flex-col' htmlFor='nombreProducto'>
                                Nombre del producto
                                <input
                                    name="nombreProducto"
                                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                                    type='text'
                                    value={infoNuevoProducto.name}
                                    onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, name: e.target.value })}
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
                                    value={infoNuevoProducto.urlImg}
                                    onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, urlImg: e.target.value })}
                                
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
                                    value={infoNuevoProducto.nombreImg}
                                    onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, nombreImg: e.target.value })}
                                
                                />
                            </label>
                        </div>

                        <div className="my-2">
                            <label className='flex flex-col' htmlFor='valorProducto'>
                                Valor del producto
                                <input
                                    name="valorProducto"
                                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                                    type='text'
                                    value={infoNuevoProducto.value}
                                    onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, value: e.target.value })}
                                />
                            </label>
                        </div>


                        <div className="my-2">
                            <p>Estado del producto</p>
                            <div className="flex flex-col">
                                {infoNuevoProducto.status ?
                                    <>
                                        <label>
                                            <input type="radio" name="status" value={true} required checked onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, status: e.target.value })} /> Disponible
                                        </label>
                                        <label>
                                            <input type="radio" name="status" value={"false"} required onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, status: e.target.value })} /> No disponible
                                        </label>
                                    </>
                                    :
                                    <>
                                        <label>
                                            <input type="radio" name="status" value={"true"} required onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, status: e.target.value })} /> Disponible
                                        </label>
                                        <label>
                                            <input type="radio" name="status" value={"false"} required checked onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, status: e.target.value })} /> No disponible
                                        </label>
                                    </>
                                }

                            </div>
                        </div>

                        <div className="my-2">
                            <label className='flex flex-col' htmlFor='descripcionProducto'>
                                Descripción del producto
                                <textarea
                                    name='descriptionProducto'
                                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 h-80'
                                    value={infoNuevoProducto.description}
                                    onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, description: e.target.value })}
                                    placeholder='Capacidad: 256 GB
                                Alto: 14,36 cm
                                Ancho: 7,09 cm
                                Grosor: 0,77 cm
                                Peso: 174 g'
                                    required
                                />
                            </label>
                        </div>
                        <Modal.Footer>
                            <button
                                type="button" className='col-span-2 bg-gray-600 p-2 rounded-md shadow-md hover:bg-gray-800 text-white' onClick={handleClose} >
                                Cancelar
                            </button>

                            <button
                                type='button'
                                onClick={() => actualizarVehiculo()}
                                className='col-span-2 bg-blue-600 p-2 rounded-md shadow-md hover:bg-blue-800 text-white'>
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

export default BtnCardProductsEdit



