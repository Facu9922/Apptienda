import { useContext, useState } from "react"
import CartContext from "../context/CartContext"
import CartItem from "../components/Cartitem/Cartitem"
import { firestoreDb } from "../services/firebase/index"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
const Cart = () => {
    const [loading, setLoading] = useState(false)

    const { cart, getTotal, cleanCart, getcantidad,  } = useContext(CartContext)

   

    const generateOrder=()=>{
        setLoading(true)

        const orderBuy ={
            items: cart,
            buyer: {
                name: "Facu",
                phone: "123467",
                email: "facundo.agudo@gmail.com"
            },
            total: getTotal(),
            
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')


        const outStock = []

        

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodCant = cart.find(prod => prod.id === doc.id)?.cantidad

                    if(dataDoc.stock >= prodCant) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodCant})
                    } else {
                        outStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if(outStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, orderBuy)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outStock})
                }
            }).then(({ id }) => {
                batch.commit()
                alert(`El id de la orden es ${id}`)
            }).catch(error => {
                alert(error)
            }).finally(() => {
                setLoading(false)
            })
    }


    if (loading){
        return <h1>Generate Order...</h1>
    }    
    
    if(getcantidad=== 0) {
        return (
            <h1>No hay productos</h1>
        )
    } 
    

    return (     
        <div>
            
            { cart.map(p => <CartItem key={p.id}  {...p}/>) }
            <h3>Total: ${getTotal()}</h3>
            
            <button onClick={() => cleanCart()} >Clear Cart</button>
            <button onClick={() => generateOrder()} >Generate Buy Order</button> 

        </div>
        
    )
}

export default Cart