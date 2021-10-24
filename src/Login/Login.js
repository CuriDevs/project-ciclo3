import React, { useState, useEffect } from "react";
import GoogleLogin from 'react-google-login';
import logo from "../Images/Jalmedfactory.png";
import nombre from "../Images/nombre.png";
import { api } from '../utils/api';
import { useHistory } from "react-router-dom";

function Login() {

  const history = useHistory();

  function navigateToProducts() {
    history.push("/products");
  }

  const value = new Date().toString();

  const baseUser = {
    UserName: "",
    Email: "",
    UrlImage: "",
    Rol: "",
    State: "",
    Document: 0,
    date: value,
  };

  const [usuarios, setConsulta] = useState([]);
  const [consulta, setUsers] = useState(true);

  //cada vez que recargemos el use entrara en funcion
  useEffect(() => {
    //con esta funcion pedimos todos los datos a la api
    const fetchData = async () => {
      const response = await api.Users.list();;
      if (!response.message) {
        setConsulta(response);
        setUsers(false);
      }
    }
    if(consulta){
      fetchData();
    }
  }, [consulta]);

  const creacion = async (data) => {
    await api.Users.create(data);
  };

  const validacion = (data, usuarios) => {
    var estado = "vacio";
    if (!usuarios.length) {
      creacion(data);
      sessionStorage.clear();
      alert('Usuario creado, espere la activación por el Administrador del sistema');
    } else {
      for (let i=0; i<usuarios.length; i++) {
        if (usuarios[i].Email == data.Email) {
          estado = usuarios[i].State;
          sessionStorage.setItem("_id", usuarios[i]._id);
          break;
        } else {
          estado = "Por crear";
        }
      }
  
      if (estado == 'Activo') {
        navigateToProducts();
      } else if (estado == "Inactivo") {
        sessionStorage.clear();
        alert('Pendiente activación del usuario');
        setUsers(true);
      } else if (estado == "Por crear") {
        creacion(data);
        sessionStorage.clear();
        alert('Usuario creado, espere la activación por el Administrador del sistema');
        setUsers(true);
      }
    }
  }

  const login = (res) => {
    sessionStorage.clear();
    sessionStorage.setItem("token", res.tokenId);
    sessionStorage.setItem("Image", res.profileObj.imageUrl);
    sessionStorage.setItem("Name", res.profileObj.name);
    const user = {...baseUser}
    user.UserName = res.profileObj.name;
    user.Email = res.profileObj.email;
    user.UrlImage = res.profileObj.imageUrl;
    user.Rol = "Cliente";
    user.State = "Inactivo";
    console.log(user);
    console.log(usuarios);
    validacion(user, usuarios);
  };

  const loginError = (err) => {
    console.log(err);
  };

  return (
    <div className="Login">

      <header className="App-header">
        <img src={ nombre } alt="logo" />
        <img src={ logo } className="App-logo" alt="logo" />
        <br />
        <GoogleLogin
          clientId="211997885169-ormlil5btqtitaieccaam41o75suskes.apps.googleusercontent.com"
          buttonText="Registrese o Ingrese con Google"
          onSuccess={ login }
          onFailure={ loginError }
          cookiePolicy={ 'single_host_origin' }
        />
      </header>
    </div>
  );
};

export default Login;
