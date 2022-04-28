import { createContext, useState } from "react";


const CartContext = createContext()

export const CartContextProvider = ({children})=>{
    const [cart, setCart] =useState([])
     
    console.log(cart)

    const addItem =(prodToAdd)=>{
        setCart([...cart,prodToAdd])
    }

     const getcantidad = () => {
        let count = 0
        cart.forEach(prod => {
            count += parseInt(prod.cantidad)
        })
        return count
    } 
    
    const isInCart =(id)=>{
        return cart.some(prod=> prod.id === id)
    }
   
    const clearCart = () =>{
        setCart([])
    }

    const removeItem = (id)=>{
        const products= cart.filter(prod => prod.id !== id)
        setCart(products)
    }
    const getTotal =()=>{
        let total = 0
        cart.forEach(prod=>{
            total += prod.cantidad * prod.precio
        })
        return total
    }
    const cleanCart = () => {
        setCart([])
    }
        
        
    
    return(
        
        <CartContext.Provider value={{
            cart,
            addItem,
             getcantidad, 
             isInCart,
             clearCart,
             removeItem,
             getTotal,
             cleanCart
             
        }}>
        
            {children}

        </CartContext.Provider>

    )
}

export default CartContext