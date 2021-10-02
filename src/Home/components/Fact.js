import Remove from "./Remove";
import Edit from "./Edit";

function Fact ({Clientes}) {

    return(
        <>
        <tr>
            {Clientes.map ((value) => (
                <th>{value}</th>
            ))}
            <td><Edit/></td>
            <td><Remove/></td>
        </tr>
        </>
    );

}

export default Fact;