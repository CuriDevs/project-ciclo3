import React from 'react'

import '../styles/styles.css'
import BtnCardProducts from './BtnCardProducts'

const CardProducto = (props) => {
    console.log(props.products)

    return (
        <>
            {props.products.map((product)=>{
                return(
                    <card className="card">
                        <span>{product.idProducto}</span>
                        <div className="containerTituloCard">
                            <h3 className="titleCardProduct">{product.nombreProducto}</h3>
                        </div>
                        <span>$ {product.valorUnitarioProducto}</span>
                        <p>Estado: {product.estadoProducto ? <span>Disponible</span> : <span>No disponible</span>}</p>
                        <p>{product.descripcionProducto}</p>
                        <BtnCardProducts />
                    </card>
                );
            })}
        </>
    )
}

export default CardProducto
