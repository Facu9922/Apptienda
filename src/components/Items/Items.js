import React, {useState, useEffect} from "react";
import getProducts from "../../utils/getProducts";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"



const Items =()=>{
const [productos, setProdcuts]= useState([])

useEffect(()=>{
getProducts().then(prods=>setProdcuts(prods)).catch(error=>console.log(error))
},[])
return <div className="d-flex flex-row">

    {productos.map((producto)=>
    <section class="d-flex justify-content-center mx-2">
        <div class="card d-flex justify-content-center">

            <div class="imgBox">
                <img  src= {producto.img} alt={producto.marca} />
            </div>
  
            <div class="contentBox">
                <h3> Brand: {producto.marca}</h3>
                <h5> Model: {producto.modelo}</h5>
                <h2 class="price"> {producto.precio} $</h2>
                
                <a href="#" class="buy">Buy Now</a>
            </div>
  
    </div>
  </section>      
        )}
</div>
}
export default Items

