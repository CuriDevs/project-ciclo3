import React from "react";
import GoogleLogin from 'react-google-login';
import logo from "../Images/Jalmedfactory.png";
import nombre from "../Images/nombre.png";

function Login(){

    const respuestaGoogle=(respuesta)=>{

        console.log(respuesta);
        console.log(respuesta.profileObj.givenName);
}


return (
    <div className="Login">
      
      <header className="App-header">
        <img src={nombre}  alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <br /> 
        <GoogleLogin
         clientId="211997885169-ormlil5btqtitaieccaam41o75suskes.apps.googleusercontent.com"
         buttonText="Registrese o Ingrese Con Google"
         onSuccess={respuestaGoogle}
         onFailure={respuestaGoogle}
        cookiePolicy={'single_host_origin'}
      />,
      </header>
    </div>
  );
}

export default Login;
