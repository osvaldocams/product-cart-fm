import { createContext, useState } from "react";
import { data } from "../data/data";

export const ShoppingCartContext = createContext()
export const ShoppingCartProvider = ({children}) =>{

    const [products, setProducts] = useState(data)

    return (
        <ShoppingCartContext.Provider value={{
            products
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
} 

// import { useContext } from "react"
// import { ShoppingCartContext } from "../context"
// const context = useContext(ShoppingCartContext)