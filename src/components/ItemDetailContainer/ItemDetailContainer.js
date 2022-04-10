import { getProductsById } from "../../Mock/ProductsMock";
import ItemdDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";

const ItemDetailContainer =()=>{
    const [product, setProdcut] = useState()

    useEffect(()=>{
        getProductsById().then(item=>{
            setProdcut(item)
        })
        return(()=>{
            setProdcut()
        })
    }, [])

    return( 
        <div>
            <ItemdDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer