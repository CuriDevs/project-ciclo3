import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import {useState} from "react";

function Dato ({Clientes}) {
    const [show, setShow] = useState(true);
    
        if (show) {
            return(
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    Change this and that and try again. Duis mollis, est non commodo
                    luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    Cras mattis consectetur purus sit amet fermentum.
                </p>
            </Alert>
            );
        }
        
    return(
        <tr>
            {Clientes.map ((value) => (
                <th>{value}</th>
            ))}
            <td><Button variant="primary">Editar</Button>{' '}</td>
            <td><Button variant="danger" onClick={() => setShow(true)}>Eliminar</Button>{' '}</td>
        </tr>
    );
}

export default Dato;