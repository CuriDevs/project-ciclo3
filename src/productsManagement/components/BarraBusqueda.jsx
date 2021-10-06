import React from 'react'
import searchImg from "../Images/search.png" 

const BarraBusqueda = () => {
    return (
        <form className="containerBarraBusqueda">
            <input type="text" className="inputBarraBusqueda childrenBarraBusqueda" placeholder="Buscar"/>
            {/* <button type="submit" className="btnBarraBusqueda childrenBarraBusqueda"><img src={searchImg} alt="search" /></button> */}
        </form>
    )
}

export default BarraBusqueda


