import '../styles/Notification.css';
import Container from "react-bootstrap/Container";

function Confirmacion({mensaje}) {

  return (
    <>
      <Container className="principal-notification">
        <h2>Info!</h2>
        <hr />
        <p>{mensaje}</p>
      </Container>
    </>
  );
}

export default Confirmacion;