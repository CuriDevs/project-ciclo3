import React, {useState, useEffect, useRef} from "react";
import '../styles/Notification.css';
import Container from "react-bootstrap/Container";
import ProgressBar from "react-bootstrap/ProgressBar";
import Toast from 'react-bootstrap/Toast'

function Confirmacion({setNotifyFalse, mensaje}) {
/*   let now = 0;
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
  } */
  const notifyFalse = () =>{
    setNotifyFalse(false);
  }

  return (
    <>
      <Toast onClose={notifyFalse} className="principal-notification" delay={3000} autohide>
      <Toast.Header>
      <strong className="me-auto">Info</strong>
      </Toast.Header>
        <Toast.Body>{mensaje}</Toast.Body>
      </Toast>
    </>
  );
}

export default Confirmacion;