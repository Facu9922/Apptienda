import { useContext } from "react"
import CartContext from "../context/CartContext"

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)

    if(cart.length === 0) {
        return (
            <h1>No hay productos</h1>
        )
    }

    return (
        <>
        <h1>Cart</h1>
        <ul>
            {
                cart.map(prod => <li key={prod.id} >{prod.marca} {prod.modelo} Talle: {prod.selectedSize} cantidad: {prod.cantidad} precio unitario: {prod.precio}  subtotal: {prod.cantidad * prod.precio} 
                        <img className="w-25"src={prod.img} alt="img"/>
                        <button onClick={() => removeItem(prod.id)}>X</button>
                </li>)
                
            }   
        </ul>
        </>
    )
}

export default Cart