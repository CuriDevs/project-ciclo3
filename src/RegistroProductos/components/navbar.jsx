import React, { Component } from "react";
import {MenuItems} from './MenuItems';
import {Button} from './Button';
import {NavMenu} from './NavMenu';
import './navbar.css';

class Navbar extends Component {
    state = {clicked:false}

    handleClick = () => {
        this.setStates({clicked: !this.state.clicked})
    }
    
render(){
    return (
        <nav className="NavbarItems">
            <h3 className="navbar-logo">JALMED<i className= "logo"></i></h3> 
            <div class="flex flex-wrap justify-center">
                <div class="w-8/12 md:w-6 px-4">
                <img src="https://mdbootstrap.com/img/new/avatars/15.jpg" alt="Maria" class="rounded-full max-w-full h-auto align-middle border-none" />
                </div>
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
              < NavMenu/>
              <Button>Login</Button>
           
        </nav>        
        );
    }        
}
export default Navbar;