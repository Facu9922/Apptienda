import { getProductsById } from "../../Mock/ProductsMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const ItemDetailContainer =({id})=>{
    const [product, setProdcut] = useState({})
    
    const { productId } = useParams()
    

    useEffect(()=>{
        getProductsById(productId).then((item)=>{
            setProdcut(item)
        })
         return(()=>{
            setProdcut()
        }) 
    }, [productId])

    return( 
        
        <div>
            
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer