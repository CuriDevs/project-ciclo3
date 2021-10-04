import React from 'react'
import searchImg from "../Images/search.png" 

const BarraBusqueda = () => {
    return (
        <form className="containerBarraBusqueda">
            <input type="text" className="inputBarraBusqueda childrenBarraBusqueda" />
            <button type="submit" className="btnBarraBusqueda childrenBarraBusqueda"><img src={searchImg} alt="search" /></button>
        </form>
    )
}

export default BarraBusqueda


{/* <input className="form-control mr-sm-2 mx-1" type="search" placeholder="Buscar" aria-label="Search" />
<button className="btn btn-outline-success my-2 my-sm-0 mx-1" type="submit">Buscar</button> */}
        

{/*  <input type="text" />
            <select name="" id="">
                <option value={null} ></option>
                <option value="idProducto">Buscar por ID</option>
                <option value="nombreProducto">Buscar por nombre</option>
                <option value="descripcionProducto">Buscar por descripcion</option>
            </select>
            <input type="submit" /> */}