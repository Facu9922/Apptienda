

import { Link } from "react-router-dom";


const ItemsHome =({products})=>{
/* const [productos, setProdcuts]= useState([])

useEffect(()=>{
getProducts().then(prods=>setProdcuts(prods)).catch(error=>console.log(error))
},[]) */



return <div className="d-flex">

    {products.map((producto)=>
    <section>
        <div>

            <div>
                <Link to={`/detail/${producto.id}`}><img  className="w-25" src= {producto.img} alt={producto.marca} /> </Link>
            </div>
  
            
  
    </div>
  </section>      
        )}
</div>
}
export default ItemsHome