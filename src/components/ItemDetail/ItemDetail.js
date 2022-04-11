

const ItemdDetail= ({product}) =>{
    const {id,stock, img, modelo, marca} =product
    return(
        <section>
            <h1>Detalle del producto:</h1>
            <h2>{marca}-{modelo} </h2>
            <img className="w-50"src={img} alt="img"/>
            <h3> ID: {id} </h3>
            <h3> Stock: {stock} </h3>
        </section>
    )
}
export default ItemdDetail;