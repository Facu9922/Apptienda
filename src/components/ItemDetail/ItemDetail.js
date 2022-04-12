import React,{useState} from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemdDetail= ({product}) =>{
    const {id,stock, img, modelo, marca,detalle,size} =product
    const [count, setCount] = useState(1)




const onAdd =(cond)=>{
    if(cond === "-"){
        setCount(count -1)
    }
    if( cond === "+"){
        setCount(count +1)
    }
  }

const initial = 1;
    return(
        <section className="border py-2">
            <h1>Detail:</h1>
            <h2>{marca} - {modelo} </h2>
            <img className="w-25"src={img} alt="img"/>
            <h3 className="sizesStyle">Sizes: {size} </h3>
            <p className="detailP"> {detalle} </p>
            <h3> ID: {id} </h3>
            <h3> Stock: {stock} </h3>
            <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count} />
        </section>
    )
}
export default ItemdDetail;