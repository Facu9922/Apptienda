import React, {useState, useEffect} from "react";
import getProducts from "../../utils/getProducts";


const Items =()=>{
const [productos, setProdcuts]= useState([])

useEffect(()=>{
getProducts().then(prods=>setProdcuts(prods)).catch(error=>console.log(error))
},[])

    {productos.map((producto)=>
        <div>
            <h2> {producto.marca} </h2>
            <h2> {producto.modelo} </h2>
            <img class="w-25" src= {producto.img} alt={producto.marca} />
            
        </div>
        )}

}
export default Items