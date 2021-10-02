import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Register from './Sales/pages/Register';
import Sales from './Sales/pages/Sales';
import Products from "./productsManagement/pages/gestionProductos.jsx"
import Rol from './Home/pages/Rol';
import Productos from './RegistroProductos/RegistroyEdicion'
import PrivateLayout from "./layouts/PrivateLayout";
function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/sales', '/register', '/products']}>
            {/* Aqui va el componente de layout privado */}
              <Switch>

                {/* Forma 1 de hacer el enrotamiento con pagina x */}  
                <Route exact path="/sales"> 
                  <Sales />
                </Route>

                {/*ruta para acceder a la pagina de registro */}
                <Route exact path="/register" component={Register} />

                {/*  Forma 2 de hacer el enrutamiento con pagina x */}
                <Route exact path="/products" component={Products} />

                <Productos/>

                <Route exact path="/rol" component={Rol} />


              </Switch>
            {/* Aqui se cierra el componente de layout privado*/}
        </Route>
        <PrivateLayout/>
        <Route>
          {/* Aqui va el componente de layout publico */}
            <Switch>
              <Route>
                {/* Primera pantalla (antes de ingresar al sistema) */}
              </Route>

            </Switch>
          {/* Aqui se cierra el componente de layout publico*/}
        </Route>
        
      </Switch>

    </Router>

      
  );
}

export default App;
