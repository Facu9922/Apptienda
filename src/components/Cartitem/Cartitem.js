import CartContext from "../../context/CartContext"
import { useContext } from "react"

const CartItem =({id, marca, modelo, cantidad, precio, img, selectedSize})=>{
    const {removeItem} =useContext(CartContext)

    const handleRemove = (id) =>{
        removeItem(id)
    }
    
       
    return(
        <article>
            <header>
                <h2>CART</h2>
            </header>
            <section>
                <ul>
                <li >{marca} {modelo} Talle: {selectedSize} cantidad: {cantidad} precio unitario: {precio}  subtotal: {cantidad * precio} 
                        
                        <img className="w-25"src={img} alt="img"/>
                        <button onClick={() => handleRemove(id)}>X</button>
                        
                </li>
                </ul>
            </section>
        </article>
    )
}
export default CartItem

