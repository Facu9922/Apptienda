import CartWidget from "./CartWidget/CartWidget"
import {  Link} from "react-router-dom"
import { firestoreDb } from "../services/firebase"
import {getDocs, collection} from "firebase/firestore"
import { useEffect, useState } from "react"

const NavBar=()=>{
    const [marca , setMarcas] =useState([])
    useEffect(()=>{
      getDocs(collection(firestoreDb, "marca")).then(response=>{
        const marca = response.docs.map(doc=>{
          return{id: doc.id, ...doc.data}
        })
        setMarcas(marca)
      })
    },[marca])

    
    

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <nav className="navbar navbar-light bg-light">
  <div className="container">
    <Link to="/" className="navbar-brand">
      <img src={"./images/SS.png"} alt="" width="100" height="90"/>
    </Link>
  </div>
</nav>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="marca/Jordan"> Jordan </Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="marca/Nike">  Nike  </Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="marca/Vans">  Vans </Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="/list">Sneakers</Link>
                </li>
          
            </ul>
          </div>
          <CartWidget/>
          <form className="d-flex me-4">

      <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
      
      <button className="btn btn-outline-dark" type="submit">Search</button>
    </form>
    
   
  
        </div>
      </nav>
       
                    

    
    )
}

export default NavBar