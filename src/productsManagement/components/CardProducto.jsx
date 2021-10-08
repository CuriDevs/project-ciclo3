import React, {useState, useEffect} from 'react'

import '../styles/styles.css'
import BtnCardProducts from './BtnCardProducts'
import HeaderProducts from '../components/HeaderProducts'

import CardNuevoProducto from '../components/CardNuevoProducto'





const CardProducto = ({products, setProducts}) => {
    /* console.log(props.products) */

    const [busqueda, setBusqueda] = useState("")

    const deleteProduct = (id) => {
        const arrayFiltrado = products.filter( product => product.idProducto !== id)
        console.log(arrayFiltrado)   
    }

    


    return (
        <>
            <div className="headerProducts">
                <HeaderProducts productos={products}  />
                <form className="containerBarraBusqueda">
                    <input type="text" className="inputBarraBusqueda childrenBarraBusqueda" placeholder="Buscar" value={busqueda} onChange={e => setBusqueda(e.target.value)}  />
                </form>
            </div>

            <CardNuevoProducto productos={products} setProduct={setProducts}/>
            {
            products.length > 0 ?
            products.map((product)=>{
                return(
                    <div className="card" key={product.idProducto}>
                        <div className="cardBody">
                            {/*  <span>{product.idProducto}</span>  */}
                            <div className="containerTituloCard">
                                <h3 className="titleCardProduct">{product.nombreProducto}</h3>
                            </div>
                            <span>$ {product.valorUnitarioProducto}</span>
                            <p>Estado: {product.estadoProducto ? (<span>Disponible</span>) : (<span>No disponible</span>)}</p>
                            <p className="cardDescipcion">{product.descripcionProducto}</p>
                        </div> 
                        <div className="containerBtnCard">
                            
                            <BtnCardProducts nombre={"Editar"} estilos={"btnEdit"} estiloBootstrap={"btn-primary"}/>

                            <BtnCardProducts nombre={"Eliminar"} estilos={"btnDelete"} estiloBootstrap={"btn-danger"} product={product} setProducts={setProducts} products={products} nombreProducto={product.nombreProducto}/>
                        </div>
                    </div>
                );
            }):(
                <h3>No hay productos</h3>
            )
        
        }
        </>
    )
}

export default CardProducto
