
import CartContext from "../../../context/CartContext"
import { useContext, useState } from "react"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from "../../../services/firebase"
import { Link } from 'react-router-dom'

const Form = () => {

    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)

    const { cart, getTotal } = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            prodOrder: cart.map(prod => { return ({ id: prod.id, name: prod.marca, quantity: prod.cantidad, priceUni: prod.precio }) }),
            buyer: input,
            total: getTotal(),
            date: new Date
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.cantidad

                    if (dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock })
                }
            }).then(({ id }) => {
                batch.commit()
                const orderId = id
                console.log(`El id de la orden es ${id}`)
                return setOrderId(orderId)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    if (orderId) {
        return (
            <>  
                <h1 className="BuyTitle">Gracias por tu compra!</h1>
                <h3 className="Code">Tu código es: {orderId}</h3>
                <p className="Code">Pronto nos contactaremos para coordinar la entrega</p>
            </>
        )
    }

    if (loading) {
        return <h1>Procesando compra</h1>
    }


    return (
        <form  onSubmit={handleSubmit}>
            <div >
                <div className="d-flex flex-column container">
                    <h1>Your Data</h1>
                    <label>Name: <input type='text' className="form-control" onChange={handleChange} name="nombre" value={input.nombre}/></label>
                    <label>Email: <input type="email" className="form-control" onChange={handleChange} name="correo" value={input.correo}/></label>
                    <label>Adress: <input type='text' className="form-control" onChange={handleChange} name="direccion" value={input.direccion}/></label>
                    <label>Phone:<input type="number" className="form-control" onChange={handleChange} name="telefono" value={input.telefono}/></label>
                    <button className="btn btn-outline-secondary" onClick={() => createOrder()}>Checkout</button>
                </div>
            </div>
        </form>
    )
}

export default Form