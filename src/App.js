import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Sales from './Sales/pages/Sales';
import Products from "./productsManagement/pages/gestionProductos.jsx"

function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/sales', '/products']}>
            {/* Aqui va el componente de layout privado */}
              <Switch>

                {/* Forma 1 de hacer el enrotamiento con pagina x */}  
                <Route exact path="/sales"> 
                  <Sales />
                </Route>

                {/*  Forma 2 de hacer el enrutamiento con pagina x */}
                <Route exact path="/products" component={Products} />

              </Switch>
            {/* Aqui se cierra el componente de layout privado*/}
        </Route>

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
