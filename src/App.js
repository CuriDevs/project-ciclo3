import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Register from './Sales/pages/Register';
import Sales from './Sales/pages/Sales';
import Products from "./productsManagement/pages/gestionProductos.jsx"
import Rol from './Roles/pages/Rol';
import PrivateLayout from './RegistroProductos/layouts/PrivateLayout';
import Productos from "./RegistroProductos/RegistroyEdicion";
import Login from './Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/sales', '/register', '/products', '/RegistroyEdicion', '/Rol','/Login']}>
            {/* Aqui va el componente de layout privado */}
            
              <Switch>

                {/* Forma 1 de hacer el enrotamiento con pagina x */}  
                <Route exact path="/sales"> 
                  <Sales />
                </Route>

                {/*  Forma 2 de hacer el enrutamiento con pagina x */}
                <Route exact path="/products" component={Products} />

                {/*ruta para acceder a la pagina de registro */}
                <Route exact path="/register" component={Register} />
                
                <Route exact path="/rol" component={Rol} />
                
              
              </Switch>
          {/* Aqui se cierra el componente de layout privado*/}
        </Route>
                  


        <Route>
        
          {/* Aqui va el componente de layout publico */}
            <Switch>
              <Route>
                {/* Primera pantalla (antes de ingresar al sistema) */}
                <Login />
              </Route>

            </Switch>
                {/* Aqui se cierra el componente de layout publico*/}
        </Route>
      </Switch>
    </Router>

      
  );
}

export default App;