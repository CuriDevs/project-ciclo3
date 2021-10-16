import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";

function Confirmacion(show) {

  return (
    <>
      <Alert {...show} variant="success" position="top-left" delay="3000" autohide>
        <Alert.Heading>Info!</Alert.Heading>
        <hr />
        <p>
          Registro exitoso!
        </p>
      </Alert>
    </>
  );
}

export default Confirmacion;