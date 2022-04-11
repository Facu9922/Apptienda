import { getProductsById } from "../../Mock/ProductsMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";


const ItemDetailContainer =({id})=>{
    const [product, setProdcut] = useState({})

    useEffect(()=>{
        getProductsById(id).then((item)=>{
            setProdcut(item)
        })
         return(()=>{
            setProdcut()
        }) 
    }, [])

    return( 
        
        <div>
            
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer