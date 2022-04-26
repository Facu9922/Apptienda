import ItemsHome from '../components/Items/ItemsHome';
import getProducts from '../utils/getProducts';
import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs , collection, query, where, limit} from "firebase/firestore"
import { firestoreDb } from "../services/firebase";
import './Home.css'

const Home = ()=>{
    const [products, setProdcuts] =useState([])
    const{ marcaId }= useParams()
    /*   console.log(marcaId) */
      
      useEffect(()=>{
        const collectionRef= marcaId ? query (collection(firestoreDb, "products"), where("marca", "==", marcaId)) : query (collection(firestoreDb, "products"), limit(3) )

        getDocs(collectionRef).then(response =>{
            console.log(response)
            const products = response.docs.map(doc =>{
                return{ id: doc.id, ...doc.data()}
            })
            setProdcuts(products)
        })
      },[marcaId])
    return(
        <>
        
        <div className="fondoHome">
        <h1 className='tituloFondoHome'>Reservartions Open</h1>
        <p className='textoFondoHome'>Reserve your pair of the new Crocs x Cinnamon Toast Crunch All-Terrain Clog through our app now!</p>
        
        </div>
        <h2>New Shoes Arrivals</h2>
        <div className='d-flex flex-row'>
        <ItemsHome  products={products} />
        
        </div>
        
        </>
    )
}

export default Home