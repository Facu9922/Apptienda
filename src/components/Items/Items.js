

import { Link } from "react-router-dom";




const Items =({products})=>{
/* const [productos, setProdcuts]= useState([])

useEffect(()=>{
getProducts().then(prods=>setProdcuts(prods)).catch(error=>console.log(error))
},[]) */



return <div className="d-flex flex-row container-fluid">

    {products.map((producto ,prodKey)=>
    <section key={prodKey} class="d-flex justify-content-center mx-2">
        <div className="card d-flex justify-content-center">

            <div className="imgBox">
                <img  src= {producto.img} alt={producto.marca} />
            </div>
  
            <div className="contentBox">
                <h3> Brand: {producto.marca}</h3>
                <h5> Model: {producto.modelo}</h5>
                <h2 className="price"> {producto.precio} $</h2>
                
                <Link className="buy" to={`/detail/${producto.id}`}>See Detail</Link>
            </div>
  
    </div>
  </section>      
        )}
</div>
}
export default Items

