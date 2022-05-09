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
            <input type="number"  className="form-control container" onChange={handleChange} value={count}/>
            <button className= "btn btn-outline-secondary mx-2" onClick={()=>onConfirm(count)}>Add to Cart</button>
    
        </div>
    )
}


export default InputCount