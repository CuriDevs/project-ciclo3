import { createConnection } from "net";
import React, { useState, useEffect } from "react";
import GoogleLogin from 'react-google-login';
import logo from "../Images/Jalmedfactory.png";
import nombre from "../Images/nombre.png";
import { api } from '../utils/api';
import { useHistory } from "react-router-dom";

function Login() {

  const history = useHistory();

  function navigateToHome() {
    history.push("/sales");
  }

  function navigateToProducts() {
    history.push("/products");
  }

  const value = new Date().toString();

  const [ user, setList ] = useState({
    UserName: "",
    Email: "",
    UrlImage: "",
    Rol: "",
    State: "",
    date: value,
  });

  const usuario = [];

  const creacion = async (data) => {
    const create = await api.Users.create(data);
    if (!create) {
      console.log('Usuario creado');
    }
  };

  const busqueda = async () => {
    const resultado = await api.Users.list();
    return resultado;
  }

  const validacion = (data, usuarios) => {
    var create = "vacio";
    for (let i=0; i<usuarios.length; i++) {
      if (usuarios[i].Email == data.Email && usuarios[i].State == "Activo") {
        console.log(usuarios[i].Email);
        create = "Creado";
        sessionStorage.setItem("_id", usuarios[i]._id);
        sessionStorage.setItem("Image", usuarios[i].UrlImage);
        sessionStorage.setItem("Name", usuarios[i].UserName);
      } else if (usuarios[i].Email == data.Email && usuarios[i].State == "Inactivo") {
        create = "Inactivo";
      } else {
        create = "Por crear"
      }
    }

    if (create == "Creado") {
      navigateToProducts();
      console.log('Redigido');
    } else if (create == "Inactivo") {
      console.log('Pendiente activacion')
    } else {
      creacion(data);
      navigateToHome();
      console.log('Usuario creado');
    }
  }

  const login = async (res) => {
    sessionStorage.setItem("token", res.tokenId);
    sessionStorage.setItem("_id", res._id);
    sessionStorage.setItem("Image", res.UrlImage);
    sessionStorage.setItem("Name", res.UserName);
    setList(user.UserName = res.profileObj.name,
      user.Email = res.profileObj.email,
      user.UrlImage = res.profileObj.imageUrl,
      user.Rol = "Cliente",
      user.State = "Inactivo");
    console.log(res);
    const usuarios = await busqueda();
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
