import AddSales from "../components/AddSales";


const QueryProducts = ({products}) =>{

  return(
    <>
      {
        products.map((value) => (
        <option>{
          <AddSales idProduct={value} />, 
          value._id}</option>
      ))
      };
    </>
  );
}


export default QueryProducts;