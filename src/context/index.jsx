import { createContext, useState } from "react";
import { data } from "../data/data";


export const ShoppingCartContext = createContext()
export const ShoppingCartProvider = ({children}) =>{

    const [products, setProducts] = useState(data)

    const [cart, setCart] = useState([])

    
    const addToCart = (item) => {
        const productExist = cart.findIndex(cartItem => cartItem.id === item.id)
        if(productExist >= 0){
            return item
        }
        else{
            item.quantity = 1
            setCart([...cart, item])
        }
    }

    const removeFromCart = (id) =>{
        const updatedCart = cart.filter(item => item.id !== id)
        setCart(updatedCart)
    }

    return (
        <ShoppingCartContext.Provider value={{
            products,
            cart,
            setCart,
            addToCart,
            removeFromCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
} 

// import { useContext } from "react"
// import { ShoppingCartContext } from "../context"
// const context = useContext(ShoppingCartContext)