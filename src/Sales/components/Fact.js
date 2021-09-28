import Button from "react-bootstrap/Button";
import Remove from "./Remove";

function Fact ({Clientes}) {

    return(
        <>
        <tr>
            {Clientes.map ((value) => (
                <th>{value}</th>
            ))}
            <td><Button variant="primary">Editar</Button>{' '}</td>
            <td><Remove/></td>
        </tr>
        </>
    );

}

export default Fact;