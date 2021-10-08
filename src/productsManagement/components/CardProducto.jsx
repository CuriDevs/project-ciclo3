import React, { useState, useEffect } from 'react'

import '../styles/styles.css'
import HeaderProducts from '../components/HeaderProducts'
import CardNuevoProducto from '../components/CardNuevoProducto'
import BtnCardProductsEdit from "./BtnCardProductsEdit"
import BtnCardProductsDelete from './BtnCardProductsDelete'





const CardProducto = ({ products, setProducts }) => {
    /* console.log(products) */

    /*Filtro de productos*/
    const [busqueda, setBusqueda] = useState('');
    const [productosFiltrados, setProductosFiltrados] = useState(products);

    useEffect(() => {
        setProductosFiltrados(
            products.filter((elemento) => {
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            })
        );
    }, [busqueda, products]);
    /* */


    return (
        <>
            {/* Header de la pagina */}
            <div className="headerProducts">
                <HeaderProducts productos={products} />
                <form className="containerBarraBusqueda">
                    <input type="text" className="inputBarraBusqueda childrenBarraBusqueda" placeholder="Buscar" value={busqueda} onChange={e => setBusqueda(e.target.value)} />
                </form>
            </div>

            {/* Tarjeta para agregar prodcuto */}
            <CardNuevoProducto productos={products} setProduct={setProducts} />

            {/* Tarjetas de los productos */}
            {
                productosFiltrados.length > 0 ?
                productosFiltrados.map((product) => {
                        return (
                            <div className="card" key={product.idProducto}>
                                <div className="cardBody">
                                    {/* <span>{product.idProducto}</span> */}
                                    <div className="containerTituloCard">
                                        <h3 className="titleCardProduct">{product.nombreProducto}</h3>
                                    </div>
                                    <span>$ {product.valorUnitarioProducto}</span>
                                    <p>Estado: {product.estadoProducto ? (<span>Disponible</span>) : (<span>No disponible</span>)}</p>
                                    <p className="cardDescipcion">{product.descripcionProducto}</p>
                                </div>
                                <div className="containerBtnCard">

                                    <BtnCardProductsEdit products={productosFiltrados} setProducts={setProducts} estilos={"btn-primary btnEdit"} product={product} />

                                    <BtnCardProductsDelete products={productosFiltrados} setProducts={setProducts} estilos={" btn-danger btnDelete"} nombreProducto={product.nombreProducto} id={product.idProducto} />
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
