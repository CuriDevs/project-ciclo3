import React from 'react'
import './NavMenu.css'

export const NavMenu =()=>{
    
    return (   
    <container className='menuLista'>           
        <ul className='Menu'>
            <a href="App.jsx">Menu</a>
            <ul className='lista'>
                <li><a href="#"> Registro Productos</a></li>
                <li><a href=""> Gestion Productos</a></li>
                <li><a href=""> Registro Ventas</a></li>
                <li><a href=""> Gestion Ventas</a></li>
            </ul>
        </ul> 
    </container>

    )
}
