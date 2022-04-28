

import { Link } from "react-router-dom";
import './itemsHome.css'

const ItemsHome =({products})=>{
/* const [productos, setProdcuts]= useState([])

useEffect(()=>{
getProducts().then(prods=>setProdcuts(prods)).catch(error=>console.log(error))
},[]) */



return <>

    {products.map((producto)=>






    
        
          
                <Link to={`/detail/${producto.id}`}><img  className="w-25" src= {producto.img} alt={producto.marca} /> </Link>
               
            
              
            
  
    
       
        )}
</>
}
export default ItemsHome