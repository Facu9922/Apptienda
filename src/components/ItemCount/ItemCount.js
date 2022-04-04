import React from "react"


const ItemCount =({onAdd, stock, initial, count})=>{
   
    return(
    <div>
        <button class="btn btn-primary" onClick={()=>{if(count < stock) onAdd ("+")}}>+</button>
             {count}
             
         <button class="btn btn-primary" onClick={()=>{if(count > initial) onAdd ("-")}}>-</button>
    
    </div>
    )
}

export default ItemCount