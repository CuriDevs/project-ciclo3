import React from 'react'

import '../styles/styles.css'
import BtnCardProducts from './BtnCardProducts'

const CardProducto = (props) => {
    console.log(props.products)

    return (
        <>
            {props.products.map((product)=>{
                return(
                    <div className="card">
                        <div className="cardBody">
                            <span>{product.idProducto}</span>
                            <div className="containerTituloCard">
                                <h3 className="titleCardProduct">{product.nombreProducto}</h3>
                            </div>
                            <span>$ {product.valorUnitarioProducto}</span>
                            <p>Estado: {product.estadoProducto ? (<span>Disponible</span>) : (<span>No disponible</span>)}</p>
                            <p className="cardDescipcion">{product.descripcionProducto}</p>
                        </div> 
                        <BtnCardProducts />
                    </div>
                );
            })}
        </>
    )
}

export default CardProducto
