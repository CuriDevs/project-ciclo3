import React, {useState} from 'react'
import CardNuevoProducto from '../components/CardNuevoProducto'

import CardProducto from '../components/CardProducto'
import HeaderProducts from '../components/HeaderProducts'

import '../styles/styles.css'

//import productos from "../datosDePrueba/datosPrueba.json"

import Header from "../../Shared/components/Header"


const productos = [
    {
        idProducto: 1,
        nombreProducto: "Lorem, ipsum.",
        descripcionProducto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus ratione, sunt ab, voluptatem ipsa architecto obcaecati omnis laudantium officiis molestias, iste in. Facilis, ratione?",
        valorUnitarioProducto: 2500,
        estado: false
    },
    {
        idProducto: 2,
        nombreProducto: "Lorem, ipsum.",
        descripcionProducto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus ratione, sunt ab, voluptatem ipsa architecto obcaecati omnis laudantium officiis molestias, iste in. Facilis, ratione?",
        valorUnitarioProducto: 2500,
        estado: true
    },
    {
        idProducto: 3,
        nombreProducto: "Lorem, ipsum.",
        descripcionProducto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus ratione, sunt ab, voluptatem ipsa architecto obcaecati omnis laudantium officiis molestias, iste in. Facilis, ratione?",
        valorUnitarioProducto: 2500,
        estado: false
    },
    {
        idProducto: 4,
        nombreProducto: "Lorem, ipsum.",
        descripcionProducto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus ratione, sunt ab, voluptatem ipsa architecto obcaecati omnis laudantium officiis molestias, iste in. Facilis, ratione?",
        valorUnitarioProducto: 2500,
        estadoProducto: true
    },
    {
        idProducto: 5,
        nombreProducto: "Lorem, ipsum.",
        descripcionProducto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus ratione, sunt ab, voluptatem ipsa architecto obcaecati omnis laudantium officiis molestias, iste in. Facilis, ratione?",
        valorUnitarioProducto: 2500,
        estadoProducto: true
    },
    {
        idProducto: 6,
        nombreProducto: "Lorem, ipsum.",
        descripcionProducto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus ratione, sunt ab, voluptatem ipsa architecto obcaecati omnis laudantium officiis molestias, iste in. Facilis, ratione?",
        valorUnitarioProducto: 2500,
        estadoProducto: true
    },
    {
        idProducto: 7,
        nombreProducto: "Lorem, ipsum.",
        descripcionProducto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus ratione, sunt ab, voluptatem ipsa architecto obcaecati omnis laudantium officiis molestias, iste in. Facilis, ratione?",
        valorUnitarioProducto: 2500,
        estadoProducto: false
    },
    {
        idProducto: 8,
        nombreProducto: "Lorem, ipsum.",
        descripcionProducto: "Lorem ipsum dolor sit amet consectetur adipi",
        valorUnitarioProducto: 2500,
        estadoProducto: true
    },
    {
        idProducto: 9,
        nombreProducto: "Lorem, ipsum.",
        descripcionProducto: "Lorem ipsum dsssssssssssssssss sssssss ssssssssss sssssssssssssssss sssssssssss sss  s s ssssss sssssssss sssssssssssssssssssssssssssssolor sit amet consectetur adipisicing elit. Qui necessitatibus ratione, sunt ab, voluptatem ipsa architecto obcaecati omnis laudantium officiis molestias, iste in. Facilis, ratione?asdasdaasddd d ds sf sdf sf sd fsd f dsf sd fsd f sd fsd f sdf sdf sd fsd fs fs f sfsd fd fkndf s fkkllk nkfl ",
        valorUnitarioProducto: 2500,
        estadoProducto: true
    }
]



const GestionProductos = () => {

    
    const [products, setProducts] = useState(productos)

    
    return (
        <div className="containerGestionProductos">
            <Header />
            <HeaderProducts />
            <CardNuevoProducto />
            <ul className="containerCard">
                <CardProducto products={products}/>
            </ul>
        </div>
    )
}

export default GestionProductos
