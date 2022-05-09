

import { Link } from "react-router-dom";
import "./itemsHome.css"

const ItemsHome =({products})=>{




return <>

    {products.map((producto)=>






    
        
          
                <Link to={`/detail/${producto.id}`}><img  className="img-thumbnail tamaño" src= {producto.img} alt={producto.marca}  />  </Link>
               
            
              
            
  
    
       
        )}
</>
}
export default ItemsHome