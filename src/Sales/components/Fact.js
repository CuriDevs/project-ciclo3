import Remove from "./Remove";
import Edit from "./Edit";

function Fact({ ventas, setConsulta, users }) {

    return (
        <>
            { ventas.map((venta) => (
                <tr>
                    <th>{ venta._id }</th>
                    <th>{ venta.idProduct }</th>
                    <th>{ venta.vTotal }</th>
                    <th>{ venta.amount }</th>
                    <th>{ venta.price }</th>
                    <th>{ venta.dateV }</th>
                    <th>{ venta.idVendedor }</th>
                    <th>{ venta.nameC }</th>
                    <th>{ venta.Documento }</th>
                    <td><Edit venta={ venta } setConsulta={ setConsulta } users={ users } /></td>
                    <td><Remove venta={ venta } setConsulta={ setConsulta } /></td>
                </tr>
            )) }
        </>
    );
}

export default Fact;