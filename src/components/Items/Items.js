

import { Link } from "react-router-dom";




const Items =({products})=>{
/* const [productos, setProdcuts]= useState([])

useEffect(()=>{
getProducts().then(prods=>setProdcuts(prods)).catch(error=>console.log(error))
},[]) */



return <div className="d-flex flex-row container-fluid">

    {products.map((producto)=>
    <section class="d-flex justify-content-center mx-2">
        <div class="card d-flex justify-content-center">

            <div class="imgBox">
                <img  src= {producto.img} alt={producto.marca} />
            </div>
  
            <div class="contentBox">
                <h3> Brand: {producto.marca}</h3>
                <h5> Model: {producto.modelo}</h5>
                <h2 class="price"> {producto.precio} $</h2>
                
                <Link className="buy" to={`/detail/${producto.id}`}>See Detail</Link>
            </div>
  
    </div>
  </section>      
        )}
</div>
}
export default Items

