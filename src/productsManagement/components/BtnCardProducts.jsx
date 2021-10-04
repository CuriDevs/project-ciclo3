import React from 'react'
import BorrarProducto from "./borrarProducto"

const BtnCardProducts = ({nombre, claseUnicaEstilos, claseEstiloBoostrap}) => {

    return (
        <>
            <button className={`btn ${claseEstiloBoostrap} ${claseUnicaEstilos} btnCardChildren `}>{nombre}</button>
        </>    
    )
}

export default BtnCardProducts

