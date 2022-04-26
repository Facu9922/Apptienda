import ItemsHome from '../components/Items/ItemsHome';
import getProducts from '../utils/getProducts';
import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Home.css'

const Home = ()=>{
    const [products, setProdcuts] =useState([])
    const{ marcaId }= useParams()
    /*   console.log(marcaId) */
      
      useEffect(()=>{
          getProducts(marcaId).then(prods=>{
              setProdcuts(prods)
          })
      },[marcaId])
    return(
        <>
        
        <div className="fondoHome">
        <h1 className='tituloFondoHome'>Reservartions Open</h1>
        <p className='textoFondoHome'>Reserve your pair of the new Crocs x Cinnamon Toast Crunch All-Terrain Clog through our app now!</p>
        
        </div>
        <h2>New Shoes Arrivals</h2>
        <div>
        <ItemsHome  products={products} />
        
        </div>
        
        </>
    )
}

export default Home