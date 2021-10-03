import React from 'react';
import Footer from './RegistroProductos/components/footer/footer'
import Navbar from '.RegistroProductos/components/navbar'

const PrivateLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <Navbar/>
                </nav> 
            </header>
            <main >
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>

      );
}
 
export default PrivateLayout;