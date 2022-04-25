import {useState, useContext} from "react";
import { ButtonCount } from "../ItemCount/ItemCount";
import InputCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";








const ItemdDetail= ({product}) =>{
    const {id,stock, img, modelo, marca,detalle,size,precio,} =product
  /*   const [count, setCount] = useState(1) */
    const [tipoInput,SetTipoInput] =useState(true)
    const [cantidad, setCant] = useState()
    
    const {addItem, isInCart} = useContext(CartContext)

    const handleAdd = (count)=>{
        const productObj = {
            id, marca,precio, cantidad: count
        }

        addItem(productObj)
    }
        /* console.log(count)
        
        setCant(count)
        const objProd = {
            id, marca,modelo, precio, cantidad : count,
        }
        
        addItem([{...objProd, cantidad: count}])
        console.log(cantidad)
    }
     */
    const Count = tipoInput ? ButtonCount : InputCount



    return(
        <section className="border py-2">
            <h1>Detail:</h1>
            <h2>{marca} - {modelo} </h2>
            <img className="w-25"src={img} alt="img"/>
            <h3 className="sizesStyle">Sizes: {size} </h3>
            <p className="detailP"> {detalle} </p>
            <h3> ID: {id} </h3>
            <h3> Stock: {stock} </h3>
            

            <button onClick={() => SetTipoInput(!tipoInput)}>Cambiar Count</button>
            {/* <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count} /> */}
            <footer>
                
              { isInCart(id) ? <Link to="/cart">Go to Cart </Link> : < Count onConfirm={handleAdd} stock={stock}/> } 
              </footer>
        </section>
    )
}
export default ItemdDetail;