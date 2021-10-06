import React from 'react';
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/footer/footer";
import Modal from '../modal'

const PrivateLayout = () => {
    return (
        <div>
           <section className= "Navegacion">
                <header>
                    <nav>
                        <Navbar/>
                    </nav> 
                </header>
            </section>

            <section className= "Productos">
                <body  className="w-screen h-screen ">
                    
                    <Modal/>
                 </body > 
            </section>            
          
        </div>

      );
}
 
export default PrivateLayout;