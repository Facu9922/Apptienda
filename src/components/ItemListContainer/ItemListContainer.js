import React,{useState} from "react";
import ItemCount from "../ItemCount/ItemCount";



const ItemListContainer =(props)=>{
    
  

  const [count, setCount] = useState(1)

  const onAdd =(cond)=>{
    if(cond === "-"){
        setCount(count -1)
    }
    if( cond === "+"){
        setCount(count +1)
    }
  }
  const stock = 10;
  const initial = 1;

    return(
        <div>
            <h1>{props.greeting} </h1>
            <h2>Count</h2>
        <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count} />
        
        </div>
        
    )
}
export default ItemListContainer