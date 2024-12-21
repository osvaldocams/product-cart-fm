import { createContext, useEffect, useState } from "react";
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
    
    const increaseQuantity = (id) => {
        const updatedCart = cart.map(item => {
            if(item.id === id && item.quantity < 5){
                return {
                    ...item,
                    quantity:item.quantity + 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }
    const decreaseQuantity = (id) => {
        const updatedCart = cart.reduce((acc, item) => {
            if (item.id === id) {
                if (item.quantity > 1) {
                    acc.push({
                        ...item,
                        quantity: item.quantity - 1
                    });
                }
            } else {
                acc.push(item);
            }
            return acc;
        }, []);
        setCart(updatedCart);
    }

    return (
        <ShoppingCartContext.Provider value={{
            products,
            cart,
            setCart,
            addToCart,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
} 

// import { useContext } from "react"
// import { ShoppingCartContext } from "../context"
// const context = useContext(ShoppingCartContext)