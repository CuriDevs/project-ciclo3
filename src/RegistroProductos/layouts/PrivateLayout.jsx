import React from 'react';
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/footer/footer";
import Productos from '../RegistroyEdicion';

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
                <body  className="w-full h-full ">
                    <Productos/>
                 </body > 
            </section>
            <section className= "Pie">
                <footer>
                    <Footer/>
                </footer>
            </section>
        </div>

      );
}
 
export default PrivateLayout;