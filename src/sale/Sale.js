
import ItemsSale from "./ItemsSale"
import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs , collection, query, where} from "firebase/firestore"
import { firestoreDb } from "../services/firebase";


const Sale =()=>{
    const [products, setProdcuts] =useState([])
    const{ saleId }= useParams()
    useEffect(()=>{
        const collectionRef = saleId ? query (collection(firestoreDb, "products"), where("marca", "==", saleId),where("precio", "==", 10000)) : collection(firestoreDb, "products")


        getDocs(collectionRef).then(response =>{
            console.log(response)
            const products = response.docs.map(doc =>{
                return{ Precio: doc.id, ...doc.data()}
            })
            setProdcuts(products)
        })
      },[saleId])
      return(
          <>
          <h1>Sales</h1>
          <ItemsSale products={products}/>
          
          </>
          
          
      )
}

export default Sale