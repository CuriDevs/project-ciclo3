import React, {useEffect, useState} from 'react';


const Productos = ()=> {
    const [nombreProducto, setNombreProducto]= useState('');
    const [valorProducto, setValorProducto]= useState('');
    const [descripcionProducto, setDescripcionProducto]= useState('');
    const [idProducto, setIdProducto]= useState('');

useEffect(() => {
        console.log('', idProducto);
        console.log('',nombreProducto);
        console.log('', valorProducto);
        console.log('', descripcionProducto);
        

    },[idProducto,nombreProducto,valorProducto,descripcionProducto]);

    const agregarDatosBD = () => {
        console.log('', idProducto)
    };
    const cancelarDatos = () => {
        console.log('', idProducto)
    };
    const editarDatos = () => {
        console.log('', idProducto)
    };
    const consultarDatos = () => {
            console.log('', idProducto)
    };
    const guardarDatos = () => {
        console.log('', idProducto)
};

    return(
    <form className='h-screen p-4 my-4 border-2 border-black mx-96 place-self-auto decoration-clone sm:decoration-slice bg-gradient-to-b from-blue-200 bg-gradient-to-f to-white'> 
            <h1  className= "p-10 text-bold"> Registro de Productos</h1>
                 <div className= 'p-2 '>
                    <input value={idProducto} onChange={(e)=> {setIdProducto(e.target.value);}} className='mx-4 text-center placeholder-blue-500 border-2 border-gray-600 border-opacity-50 rounded md:ring-4' type="text" placeholder= 'ID del Producto'/> 
                        <div className= 'p-10 space-x-10'>
                            <input value={nombreProducto} onChange={(e)=> {setNombreProducto(e.target.value);}} className='text-center placeholder-blue-500 border-2 border-gray-600 border-opacity-50 rounded md:ring-4' type="text" placeholder= 'Nombre del Producto   '/>
                            <input value={valorProducto} onChange={(e)=> {setValorProducto(e.target.value);}} className='text-center placeholder-blue-500 border-2 border-gray-600 border-opacity-50 rounded md:ring-4'type="text" placeholder= ' Valor por Producto '/> 
                                <div className= 'py-5 '>
                                    <div class="flex px-20 space-x-5">
                                        <h6 class="text-gray-800  text-bold  ">Estado</h6>
                                            <input type="checkbox" class=" form-checkbox transition duration-500 ease-in-out hover:bg-green-600 transform hover:-translate-y-1 hover:scale-110 "checked/>
                                            <span class="text-green-700 ml-1">Disponible</span>
                                            <input type="checkbox" class="form-checkbox transition duration-500 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 "checked/>
                                            <span class="text-red-700 ml-1">No Disponible</span>
                                        </div>
                                        <div>
                                            <input value={descripcionProducto} onChange={(e)=> {setDescripcionProducto(e.target.value);}} className='h-40 px-40 placeholder-blue-500 border-2 border-gray-600 border-opacity-50 rounded 'type='text' placeholder= 'Descripcion del producto'/>
                                        </div>
                                            <div className= 'guardar'>
                                                <button  type='button' onclick={guardarDatos} className='p-2 flex-inline'>
                                                    <img src="./CrearProductos/Images/Floppy-icon.png" alt="Guardar"/>
                                                </button>
                                                <button  type='button' onclick={guardarDatos} className='p-2 flex-inline'>
                                                    <img src="./CrearProductos/Images/Trash-icon.png" alt="Eliminar" />
                                                </button>
                                            </div>
                                        </div>
                                            <div className= 'inline p-4 pr-5 m-8 space-x-10 ' >
                                                <button  type='button' onclick={editarDatos} className='px-4 py-3 text-white transition-opacity duration-100 bg-blue-700 rounded '>Editar</button>
                                                <button  type='button' onclick={consultarDatos} className='px-4 py-3 text-white transition-opacity duration-100 bg-yellow-600 rounded'>Consultar</button>
                                                <button  type='button' onclick={agregarDatosBD} className='px-4 py-3 text-white transition-opacity duration-100 bg-green-500 rounded'>Agregar</button>
                                                <button  type='button' onclick={cancelarDatos} className='px-4 py-3 text-white transition-opacity duration-100 bg-red-600 rounded'>Cancelar</button>
                                            </div>
                                        </div>
                                    </div>
            </form>
    
    )
}

export default Productos;