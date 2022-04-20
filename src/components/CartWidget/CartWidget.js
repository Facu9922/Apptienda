import { useContext } from "react"
import CartContext from "../../context/CartContext"


const CartWidget =()=>{
    const { getcantidad } =useContext(CartContext)
return(
    <div className="me-2 ">
        <img class="me-4"src={"./images/shopping-cart.png"} alt="" width="50" height="40"/>
        {getcantidad()}
    </div>
    
)
}
export default CartWidget