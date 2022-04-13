import { useEffect, useState } from "react";
import getProducts from "../../utils/getProducts";
import Items from "../Items/Items";
import { useParams } from "react-router-dom";






const ItemListContainer =(props)=>{
    const [products, setProdcuts] =useState([])

    const{ marcaId }= useParams()
  /*   console.log(marcaId) */
    
    useEffect(()=>{
        getProducts(marcaId).then(prods=>{
            setProdcuts(prods)
        })
    },[marcaId])

    
    return(
        <div>
            <h1>{props.greeting}</h1>
            
            <Items products={products} />
            
        
        </div>
        
    )
}
export default ItemListContainer