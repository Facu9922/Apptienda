

import { Link } from "react-router-dom";


const ItemsHome =({products})=>{
/* const [productos, setProdcuts]= useState([])

useEffect(()=>{
getProducts().then(prods=>setProdcuts(prods)).catch(error=>console.log(error))
},[]) */



return <div className="d-flex flex-row">

    {products.map((producto)=>
    <section class="d-flex justify-content-around ">
        <div class="card d-flex justify-content-around mx-5">

            <div class="imgBox">
                <img  src= {producto.img} alt={producto.marca} />
            </div>
  
            
  
    </div>
  </section>      
        )}
</div>
}
export default ItemsHome