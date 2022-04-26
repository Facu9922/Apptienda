import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs , collection, query, where} from "firebase/firestore"
import { firestoreDb } from "../services/firebase";
import ItemsSale from "./ItemsSale"

const Sale =()=>{
    const [products, setProdcuts] =useState([])
    const{ precioId }= useParams()
    useEffect(()=>{
        const collectionRef= precioId ? query (collection(firestoreDb, "products"), where("precio", "==", precioId)) : query (collection(firestoreDb, "products"))

        getDocs(collectionRef).then(response =>{
            console.log(response)
            const products = response.docs.map(doc =>{
                return{ Precio: doc.precio, ...doc.data()}
            })
            setProdcuts(products)
        })
      },[precioId])
      return(
          <>
          <h1>Sales</h1>
          <ItemsSale products={products}/>
          
          </>
          
          
      )
}

export default Sale