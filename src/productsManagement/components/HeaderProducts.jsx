import React from 'react'
import BarraBusqueda from './BarraBusqueda'
import '../styles/styles.css'


const HeaderProducts = () => {
    return (
        <div className="headerProducts">
            <h1 className="header_titleProducts">Gestión de productos</h1>
            <BarraBusqueda />
        </div>
    )
}

export default HeaderProducts
