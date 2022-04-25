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
            count += prod.cantidad
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
    
        
        
    
    return(
        
        <CartContext.Provider value={{
            cart,
            addItem,
             getcantidad, 
             isInCart,
             clearCart,
             removeItem,
             
        }}>
        
            {children}

        </CartContext.Provider>

    )
}

export default CartContext