import Button from "react-bootstrap/Button";

function Dato ({Clientes}) {
    return(
        <tr>
            {Clientes.map ((value) => (
                <th>{value}</th>
            ))}
            <td><Button variant="primary">Editar</Button>{' '}</td>
            <td><Button variant="danger">Eliminar</Button>{' '}</td>
        </tr>
    );
}

export default Dato;