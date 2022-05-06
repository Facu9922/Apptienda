import {useState, useContext} from "react";
/* import { ButtonCount } from "../ItemCount/ItemCount"; */
import InputCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

import Select from "react-select"






const ItemdDetail= ({product}) =>{
    const [selectedSize, setSelectedSize] = useState("")
    
    const {id,stock, img, modelo, marca,detalle,precio,} =product
  /*   const [count, setCount] = useState(1) */
    /* const [tipoInput,SetTipoInput] =useState(true)
    const [cantidad, setCant] = useState()
     */
    const {addItem, isInCart, saveCart} = useContext(CartContext)
    
    const handleAdd = (count)=>{
        const productObj = {
            id, img, marca,precio, modelo, cantidad: count , selectedSize
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
    const Count =  InputCount

    const options =[
        {value: "39", label: "39"},
        {value: "40", label: "40"},
        {value: "41", label: "41"}
    ]
    


    return(
        <section className="border py-2">
            <h1>Detail:</h1>
            <h2>{marca} - {modelo} </h2>
            <h2> $ {precio}</h2>
            <img className="w-25"src={img} alt="img"/>
            <h3 className="sizesStyle">Sizes: </h3>
            <Select className="container" options={options} onChange={e=>setSelectedSize(e.value)} />
            <p className="detailP h5"> {detalle} </p>
            <h3  className="h6"> ID: {id} </h3>
            <h3  className="h6"> Stock: {stock} </h3>
            

            {/* <button onClick={() => SetTipoInput(!tipoInput)}>Cambiar Count</button> */}
            {/* <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count} /> */}
            <footer>
                
              { isInCart(id) ? <Link onClick={saveCart} className="h3" to="/cart">  Go to Cart </Link> : < Count onConfirm={handleAdd} stock={stock}/> } 
              </footer>
        </section>
    )
}
export default ItemdDetail;