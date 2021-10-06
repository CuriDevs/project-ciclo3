import React, { Component } from "react";
import {MenuItems} from './MenuItems';
import {Button} from './Button';
import './navbar.css';
import logo from '../../../Images/iconPngSinTexto.png'
import avatar from '../../../Images/avatar.png'

class Navbar extends Component {
    state = {clicked:false}

    handleClick = () => {
        this.setStates({clicked: !this.state.clicked})
    }
    
render(){
    return (
        <nav className="NavbarItems">
            <div className="navbar-logo">
            <img  src={logo} alt="logo" />    
             </div> 
             <div className="navbar-avatar">
             <i class="far fa-user-circle"></i>
   
             </div> 
            <div class="flex flex-wrap justify-center">
                
            </div>
            <div className="Menu-icon" onClick={this.handleClick}>
                <i className= {this.state.clicked ? 'fas fa-time' : 'fas fa-bars'}></i>
            </div>
            
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) =>  {
                    return (
                        <li key= {index}>
                            <a className={item.cName} href = {item.url}>
                            {item.title}
                            </a>
                        </li>
                     )
                })}
             </ul> 
              
              <Button>Login</Button>
           
        </nav>        
        );
    }        
}
export default Navbar;