import { Link } from "react-router-dom";

const ItemsSale =({products})=>{
    /* const [productos, setProdcuts]= useState([])
    
    useEffect(()=>{
    getProducts().then(prods=>setProdcuts(prods)).catch(error=>console.log(error))
    },[]) */
    
    
    
    return <div className="d-flex flex-row container-fluid">
    
        {products.map((prod)=>
        <section  class="d-flex justify-content-center mx-2">
            <div class="card d-flex justify-content-center">
    
                <div  class="imgBox">
                    <img  src= {prod.img} alt={prod.marca} />
                </div>
      
                <div class="contentBox">
                    <h3> Brand: {prod.marca}</h3>
                    <h5> Model: {prod.modelo}</h5>
                    <h2 class="price"> {prod.precio} $</h2>
                    
                    <Link className="buy" to={`/detail/${prod.id}`}>See Detail</Link>
                </div>
      
        </div>
      </section>      
            )}
    </div>
    }
    export default ItemsSale