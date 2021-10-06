import React from 'react'

const BtnCardProducts = ({nombre, estilos, estiloBootstrap, deleteProduct, product}) => {

    return (
        <>
            <button className={`btn ${estiloBootstrap} ${estilos} btnCardChildren `} onClick={()=>{deleteProduct(product.idProducto)}}> {nombre} </button>
        </>    
    )
}

export default BtnCardProducts

