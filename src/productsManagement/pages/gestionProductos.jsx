import React, { useState} from 'react'

import CardProducto from '../components/CardProducto'

import '../styles/styles.css'

import productos from "../datosDePrueba/datosPrueba.json"

import Header from "../../Shared/components/Header"


const GestionProductos = () => {


    /*El set products se usara para agregar y eliminar productos (para editar no estoy seguro)*/
    const [products, setProducts] = useState(productos)

    




    /* Se obtiene el valor de la barra de busqueda
    const valorInputInGP = value => console.log(value)
    /*Se sube desde BarraBusqueda a HeaderProducts a gestionProductos

 */
    
/*     
    useEffect(()=>{
        console.log("busqueda", busqueda)
        console.log("lista de productos", productos) 
        console.log("lista filtrada", productos.filter(element => {
            return JSON.stringify(element).toLowerCase().includes(busqueda.toLowerCase())
        }))   

        
        console.log()

        setProductosFiltrados(products.filter(element => {
            return JSON.stringify(element).toLowerCase().includes(valorBarraBusqueda.toLowerCase())
        }))

    },[valorBarraBusqueda, products])
    
 */

    return (
        <div className="containerGestionProductos">
            <Header />
            {/* Pase los otros componentes a CardProducto para salir de varios problemas,
            probablemente el código sea mas difícil de leer */}
            <ul className="containerCard">
                <CardProducto products={products} setProducts={setProducts} />
            </ul>
        </div>
    )
}

export default GestionProductos




/*
const [busqueda, setBusqueda] = useState("")

    

    

    
*/

/* 

const productos = [
    {
        idProducto: 1,
        nombreProducto: "Lorem, ipsum.",
        descripcionProducto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus ratione, sunt ab, voluptatem ipsa architecto obcaecati omnis laudantium officiis molestias, iste in. Facilis, ratione?",
        valorUnitarioProducto: 2500,
        estadoProducto: false
    },
    {
        idProducto: 2,
        nombreProducto: "Lorem, ipsum.",
        descripcionProducto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus ratione, sunt ab, voluptatem ipsa architecto obcaecati omnis laudantium officiis molestias, iste in. Facilis, ratione?",
        valorUnitarioProducto: 2500,
        estadoProducto: true
    },
    {
        idProducto: 3,
        nombreProducto: "Lorem, ipsum.",
        descripcionProducto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus ratione, sunt ab, voluptatem ipsa architecto obcaecati omnis laudantium officiis molestias, iste in. Facilis, ratione?",
        valorUnitarioProducto: 2500,
        estadoProducto: false
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
        estadoProducto:true
    },
    {
        idProducto: 6,
        nombreProducto: "Lorem, ipsum.",
        descripcionProducto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus ratione, sunt ab, voluptatem ipsa architecto obcaecati omnis laudantium officiis molestias, iste in. Facilis, ratione?",
        valorUnitarioProducto: 2500,
        estadoProducto:true
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
 */


