import React from "react"


const ItemCount =({onAdd, stock, initial, count})=>{
   
    return(
    <div class="border-bottom border-2 py-2">
        <button class="btn btn-primary me-3" onClick={()=>{if(count < stock) onAdd ("+")}}>+</button>
             {count}
             
         <button class="btn btn-primary mx-3" onClick={()=>{if(count > initial) onAdd ("-")}}>-</button>
    
    </div>
    )
}

export default ItemCount