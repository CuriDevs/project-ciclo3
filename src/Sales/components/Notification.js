import React, {useState, useEffect, useRef} from "react";
import '../styles/Notification.css';
import Container from "react-bootstrap/Container";
import ProgressBar from "react-bootstrap/ProgressBar";

function Confirmacion({mensaje}) {

  const [time, setTime] = useState(0);
  const [show, setShow] = useState(false);
  let now = 0;
  //if(mensaje){
  const progressInstance = (
    //if(show){
      setInterval(() => {
        now++;
      }, 1000)
    //}
  );
  //}
  console.log(show)
  
  if(now === 100){
    setShow(false)
  }
  

  return (
    <>
      <Container className="principal-notification">
        <strong><h4>Info</h4></strong>
        <hr/>
        <body>
          {mensaje}
          <ProgressBar now={progressInstance} />
        </body>
      </Container>
    </>
  );
}

export default Confirmacion;