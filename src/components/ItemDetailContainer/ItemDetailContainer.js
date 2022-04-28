import { getProductsById } from "../../Mock/ProductsMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestoreDb } from "../../services/firebase";
import { getDoc, doc } from "firebase/firestore"



const ItemDetailContainer =({setCart, cart})=>{
    const [product, setProdcut] = useState({})
    
    const { productId } = useParams()
    
    

    useEffect(()=>{
        /* getProductsById(productId).then((item)=>{
            setProdcut(item)
        })
         return(()=>{
            setProdcut()
        })  */
        getDoc(doc(firestoreDb, "products", productId)).then(response=>{
            console.log(response)
            const product = { id: response.id, ...response.data()}
            setProdcut(product)
        })

       

    }, [productId])

    return( 
        
        <div>
            
            <ItemDetail product={product} setCart={setCart} cart={cart} />
        </div>
    )
}

export default ItemDetailContainer