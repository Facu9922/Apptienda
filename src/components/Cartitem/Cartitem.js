import CartContext from "../../context/CartContext"
import { useContext } from "react"

const CartItem =({id, marca, modelo, cantidad, precio, img, selectedSize})=>{
    const {removeItem} =useContext(CartContext)

    const handleRemove = (id) =>{
        removeItem(id)
    }
    
       
    return(
        <article>
           

          <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Brand and Model </th>
      <th scope="col">Size</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">SubTotal</th>
        <button className = "btn btn-outline-secondary" onClick={() => handleRemove(id)}>X</button>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{marca} {modelo}</td>
      <td>{selectedSize}</td>
      <td>{cantidad}</td>
      <td>{precio}</td>
      <td>{cantidad * precio} </td>
    </tr>
   
  </tbody>
</table>

        </article>
        
    )
}
export default CartItem

