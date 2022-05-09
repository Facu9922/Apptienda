import ItemsHome from '../components/Items/ItemsHome';
import { Link } from "react-router-dom";
import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs , collection, query, where, limit} from "firebase/firestore"
import { firestoreDb } from "../services/firebase";
import './Home.css'

const Home = ()=>{
    const [products, setProdcuts] =useState([])
    const{ marcaId }= useParams()
    
      
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
        
        <div className="fondoHome container-fluid">
          <h1 className='tituloFondoHome  container-fluid'>Reservartions Open</h1>
              <p className='textoFondoHome  container-fluid'>Reserve your pair of the new Crocs x Cinnamon Toast Crunch All-Terrain Clog through our app now!</p>
        
        </div>
          <h2>New Shoes Arrivals</h2>
        <div>
          <ItemsHome  products={products} />
        </div>
        <div className='py-2'>
          <img className="w-25 mx-5"src="./images/portada1.jpg" alt="img"/>
        
          <img className="w-25 mx-5"src="./images/portada2.jpg" alt="img"/>
          <img className="w-25"src="./images/portada3.jpg" alt="img"/>
        </div>
       
        
        
        </>
    )
}

export default Home