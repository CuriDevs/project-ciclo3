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
import PrivateRoute from "./Shared/components/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/rol" exact component={Rol}></PrivateRoute>
        <PrivateRoute path="/sales" exact component={Sales}></PrivateRoute>
        <PrivateRoute path="/products" exact component={Products}></PrivateRoute>
        {/*<Route path={['/sales', '/register', '/products', '/RegistroyEdicion', '/Rol','/Login']}>
            
            
              <Switch>

                  
                <Route exact path="/sales"> 
                  <Sales />
                </Route>

                
                <Route exact path="/products" component={Products} />

                
                <Route exact path="/register" component={Register} />
                
                <Route />
                
              
              </Switch>
          
        </Route> */}
                  


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