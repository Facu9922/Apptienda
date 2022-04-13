import CartWidget from "./CartWidget/CartWidget"
import {  Link} from "react-router-dom"
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
              <Link className="nav-link" to="marca/Jordan"> Jordan </Link>
              </li>
              <li class="nav-item">
              <Link  className="nav-link" to="marca/Nike">  Nike  </Link>
              </li>
              <li class="nav-item">
                <Link  className="nav-link" to="/list">Sneakers</Link>
              </li>
           {/*    <li className="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Brands
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li className="brands mx-5"> </li>
            <li className="brands mx-5"> </li>
            
            
          </ul>
        </li> */}
              <li class="nav-item">
                <a class="nav-link">Releases</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Sale</a>
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