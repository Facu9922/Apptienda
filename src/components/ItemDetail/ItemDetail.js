

const ItemdDetail= ({id, detalle, stock}) =>{
    return(
        <section>
            <h2> {detalle} </h2>
            <h3> {id} </h3>
            <h3> {stock} </h3>
        </section>
    )
}
export default ItemdDetail;