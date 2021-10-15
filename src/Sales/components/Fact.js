import Remove from "./Remove";
import Edit from "./Edit";

function Fact ({ventas}) {

    return(
        <>
        {ventas.map ((venta) => (
                <tr>
                    <th>{venta.idSales}</th>
                    <th>{venta.idProduct}</th>
                    <th>{venta.vTotal}</th>
                    <th>{venta.amount}</th>
                    <th>{venta.price}</th>
                    <th>{venta.dateV}</th>
                    <th>{venta.idClient}</th>
                    <th>{venta.nameC}</th>
                    <th>{venta.nameV}</th>
                    <td><Edit venta={venta}/></td>
                    <td><Remove/></td>
                </tr>
            ))}
        </>
    );

}

export default Fact;