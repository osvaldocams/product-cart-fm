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

    return (
        <ShoppingCartContext.Provider value={{
            products,
            cart,
            setCart,
            addToCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
} 

// import { useContext } from "react"
// import { ShoppingCartContext } from "../context"
// const context = useContext(ShoppingCartContext)