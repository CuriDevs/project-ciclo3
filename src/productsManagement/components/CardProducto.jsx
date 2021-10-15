import React, { useState, useEffect } from 'react'
import { nanoid } from "nanoid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import '../styles/styles.css'
import HeaderProducts from '../components/HeaderProducts'
import CardNuevoProducto from '../components/CardNuevoProducto'
import BtnCardProductsEdit from "./BtnCardProductsEdit"
import BtnCardProductsDelete from './BtnCardProductsDelete'

import { obtenerProductos } from '../utils/api';



const CardProducto = (/* { products, setProducts } */) => {
    /* console.log(products) */

    const [productos, setProductos] = useState([])
    /*Filtro de productos*/
    const [busqueda, setBusqueda] = useState('');
    const [productosFiltrados, setProductosFiltrados] = useState(productos);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    useEffect(() => {
        const fecthProductos = async () => {
            await obtenerProductos((response) => {
                console.log('la respuesta que se recibio fue', response);
                setProductos(response.data);
                setEjecutarConsulta(false);
            }, (error) => {
                console.error('Salio un error:', error);
            }
            )
        };
        console.log('consulta', ejecutarConsulta);
        if (ejecutarConsulta) {
            fecthProductos();
        }
    }, [ejecutarConsulta]);

    useEffect(() => {
        setProductosFiltrados(
            productos.filter((elemento) => {
                /* setEjecutarConsulta(true); */
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            })
            );
    }, [busqueda, productos]);
    /* */



    return (
        <>
            {/* Header de la pagina */}
            <div className="headerProducts">
                <HeaderProducts productos={productos} />
                <form className="containerBarraBusqueda">
                    <input type="text" className="inputBarraBusqueda childrenBarraBusqueda" placeholder="Buscar" value={busqueda} onChange={e => setBusqueda(e.target.value)} />
                </form>
            </div>

            {/* Tarjeta para agregar prodcuto */}
            <CardNuevoProducto productos={productos} setProduct={setProductos} setEjecutarConsulta={setEjecutarConsulta}/>

            {/* Tarjetas de los productos */}
            {
                productosFiltrados.length > 0 ?
                    productosFiltrados.map((product) => {
                        return (
                            <div className="card" key={nanoid()}>
                                <div className="cardBody">
                                    {/* <span>{product.id}</span> */}
                                    <div className="containerTituloCard">
                                        <h3 className="titleCardProduct">{product.name}</h3>
                                    </div>
                                    <span>$ {product.value}</span>
                                    <p>Estado: {product.status ? (<span>Disponible</span>) : (<span>No disponible</span>)}</p>
                                    <p className="cardDescipcion">{product.description}</p>
                                </div>
                                <div className="containerBtnCard">

                                    <BtnCardProductsEdit products={productosFiltrados} setProducts={setProductos} estilos={"btn-primary btnEdit"} product={product} setEjecutarConsulta={setEjecutarConsulta}/>

                                    <BtnCardProductsDelete products={productosFiltrados} setProducts={setProductos} estilos={" btn-danger btnDelete"} nombreProducto={product.nombre} id={product.id} product={product} setEjecutarConsulta={setEjecutarConsulta}/>
                                </div>
                            </div>
                        );
                    }) : (
                        <div className="containerNoHayProductos">
                            <h3>No hay productos</h3>
                        </div>
                    )

            } 

        </>
    )
}

export default CardProducto
