import React from "react"
import { useState } from "react"



const InputCount =({onConfirm, stock, initial=1})=>{
   
   console.log(stock)
    const [count, setCount] =useState(initial)

    const handleChange = (e)=>{
       if (e.target.value <= stock){
        setCount(e.target.value)
       } 
        
    }
    
    return (
        <div>
            <input type="number" onChange={handleChange} value={count}/>
            <button onClick={()=>onConfirm(count)}>Add to Cart</button>
    
        </div>
    )
}
/* export const ButtonCount = ({onConfirm, stock, initial=1})=>{
    const [count, setCount] =useState(initial)
    const increment = () =>{
        
            setCount(count + 1)
        
    }
    const decrement = ()=>{
        
            setCount(count - 1)
        
    }
    return(
        <div>
            <button onClick={decrement}>-</button> 
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>add to cart</button>
        </div>
    )
    
} */

export default InputCount