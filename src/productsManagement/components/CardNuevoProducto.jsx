import React from 'react'
import { Link } from "react-router-dom";
import imgPrueba from "../Images/plus.png"



const CardNuevoProducto = () => {
    return (
        /* En el to del link va a donde se vaya a crear un nuevo producto */
        <Link to="" className="card cardNuevoProducto">
                <img className="imgAgregarProducto" src={imgPrueba} alt="agregar pruducto" />
                <h3 className="titleCardAgregarProducto">Agregar producto</h3>    
        </Link>
    )
}

export default CardNuevoProducto
