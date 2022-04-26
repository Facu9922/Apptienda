import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { Link } from "react-router-dom";


const CartWidget =()=>{
    const { getcantidad } =useContext(CartContext)
return(
    <div className="me-2 ">
        <Link  to="/cart"><img class="me-4"src={"./images/shopping-cart.png"} alt="" width="50" height="40"/></Link>
        {parseInt(getcantidad())}
    </div>
    
)
}
export default CartWidget