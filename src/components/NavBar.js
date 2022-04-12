import CartWidget from "./CartWidget/CartWidget"
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
const NavBar=()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <nav class="navbar navbar-light bg-light">
  <div class="container">
    <Link to="/" class="navbar-brand">
      <img src={"./images/SS.png"} alt="" width="100" height="90"/>
    </Link>
  </div>
</nav>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Men´s</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Women´s</a>
              </li>
              <li class="nav-item">
                <Link  className="nav-link" to="/list">Sneakers</Link>
              </li>
              <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Brands
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><img class="mb-2 mx-5 border-top " src={"./images/nike.svg"} alt="" width="70" height="90"/><a class=" brands mx-5" href="#">Nike</a></li>
            <li><img class="mb-2 mx-5 border-top" src={"./images/jordan.svg"} alt="" width="70" height="90"/> <a class=" brands mx-5 " href="#">Jordan</a></li>
            
            
          </ul>
        </li>
              <li class="nav-item">
                <a class="nav-link"href="#">Releases</a>
              </li>
              <li class="nav-item">
                <a class="nav-link"href="#">Sale</a>
              </li>
            </ul>
          </div>
          <CartWidget/>
          <form class="d-flex me-4">

      <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
      
      <button class="btn btn-outline-dark" type="submit">Search</button>
    </form>
          <button type="button" class="btn btn-dark me-3">Login</button>
        </div>
      </nav>
       
                    

    
    )
}

export default NavBar