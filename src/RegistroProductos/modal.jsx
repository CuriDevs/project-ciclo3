import React, {} from 'react';


const Productos = ()=> {
    

 return(
   
    <form action="#" method="POST">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="px-2 py-4 bg-white space-y- sm:p-5"></div>
         <div className="mt-3 md:mt-0 sm:col-span-2">
            <h2 className= "p-1 text-bold"> Registro de Productos</h2>
                <div class="relative flex w-full flex-wrap items-stretch mb-3 ">
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label  className="block text-sm font-medium text-gray-700"></label>
                         <input type="text"name="id Producto" id="ID" placeholder="Id Producto"
                         className="block w-full mt-1 border-2 border-gray-400 rounded-md shadow-sm to-black text text-sm-center focus:ring-indigo-500 focus:border-indigo-500"/>
                        </div>
                    </div>
                 <div class="relative flex w-full flex-wrap items-stretch mb-3 ">
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700"></label>
                        <input type="text"name="Nombre Producto" id="Nombre" placeholder="Nombre Producto"
                        className="block w-full mt-1 border-2 border-gray-400 rounded-md shadow-sm to-black text text-sm-center focus:ring-indigo-500 focus:border-indigo-500"/>
                    </div>
                                </div>                    
                                    <div class="relative flex w-full flex-wrap items-stretch mb-3 ">
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700"></label>
                                    <input type="text"name="Valor Producto" id="Valor" placeholder="Valor Unitario"
                                    className="block w-full mt-1 border-2 border-gray-400 rounded-md shadow-sm to-black text text-sm-center focus:ring-indigo-500 focus:border-indigo-500"/>
                                </div>
                            </div>                                                    
                                <div className= "flex flex-wrap items-stretch w-full mb-3 space-x-5 elative">
                                <div className="col-span-6 sm:col-span-3 lg:col-span-2 ">
                                <h6 className="text-gray-800 text-bold ">Estado</h6>
                                <input type="checkbox" class=" form-checkbox transition duration-500 ease-in-out hover:bg-green-600 transform hover:-translate-y-1 hover:scale-110 "checked/>
                                <span className="ml-1 text-green-700">Disponible</span>
                                <input type="checkbox" className="transition duration-500 ease-in-out transform form-checkbox hover:bg-red-600 hover:-translate-y-1 hover:scale-110 "checked/>
                                <span className="ml-1 text-red-700">No Disponible</span>
                            <div>
                                <label htmlFor="about" className="block text-sm font-medium text-gray-700"></label>
                                <div className="mt-2">
                                <textarea id="descripcion"  name="descripcion"rows={3} 
                                className="block w-full mt-1 mb-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Descripcion del Producto"
                                defaultValue={''} />
                            </div>    
                            <button type="submit" className="inline-flex justify-center px-4 py-1 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              Create 
                            </button>  
                            <button type="submit" className="inline-flex justify-center px-4 py-1 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              Update 
                            </button>                          
                            <button type="submit" className="inline-flex justify-center px-4 py-1 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              Cancel 
                            </button> 
                           </div>  
                        </div>                  
                    </div>
                 </div>
              </div>
    </form>
    

    )
}

export default Productos;