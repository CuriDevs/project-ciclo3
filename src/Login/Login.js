import { createConnection } from "net";
import React, { useState, useEffect } from "react";
import GoogleLogin from 'react-google-login';
import logo from "../Images/Jalmedfactory.png";
import nombre from "../Images/nombre.png";
import { api } from '../Roles/utils/api';

function Login() {

  //const user = []
  const value = new Date().toLocaleDateString();

  const [ user, setList ] = useState({
    UserName: "",
    Email: "",
    UrlImage: "",
    Rol: "",
    State: "",
    date: value,
  });

  const creacion = async (data) => {
    const create = await api.Users.create(data);
    if (!create) {
      console.log('Usuario creado');
    }
  };

  const login = (res) => {
    localStorage.setItem("token", res.tokenId);
    setList(user.UserName = res.profileObj.name,
      user.Email = res.profileObj.email,
      user.UrlImage = res.profileObj.imageUrl,
      user.Rol = "Cliente",
      user.State = "Inactivo");
    console.log(res);
    console.log(user);
    creacion(user);
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
        />,
      </header>
    </div>
  );
};

export default Login;
