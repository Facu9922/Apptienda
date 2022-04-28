import {  useEffect, useState } from "react";
/* import getProducts from "../../utils/getProducts"; */
import Items from "../Items/Items";
import { useParams } from "react-router-dom";
import { getDocs , collection, query, where} from "firebase/firestore"
import { firestoreDb } from "../../services/firebase";





const ItemListContainer =(props)=>{
    const [products, setProdcuts] =useState([])

    const{ marcaId }= useParams()
  /*   console.log(marcaId) */
    
    useEffect(()=>{
        /* getProducts(marcaId).then(prods=>{
            setProdcuts(prods)
        }) */
        const collectionRef = marcaId ? query (collection(firestoreDb, "products"), where("marca", "==", marcaId)) : collection(firestoreDb, "products")

        getDocs(collectionRef).then(response =>{
            console.log(response)
            const products = response.docs.map(doc =>{
                return{ id: doc.id, ...doc.data()}
            })
            setProdcuts(products)
        })

    },[marcaId])

    if (products.length === 0){
        return <h1>No hay Productos</h1>
    }
    return(
        <div>
            <h1>{props.greeting}</h1>
            
            <Items products={products} />
            
        
        </div>
        
    )
}
export default ItemListContainer