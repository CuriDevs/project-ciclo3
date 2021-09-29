import React from 'react'

const BarraBusqueda = () => {
    return (
        <form className="form-inline my-2 my-lg-0 containerBarraBusqueda">
            <input className="form-control mr-sm-2 mx-1" type="search" placeholder="Buscar por nombre" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0 mx-1" type="submit">Buscar</button>
        </form>
    )
}

export default BarraBusqueda
