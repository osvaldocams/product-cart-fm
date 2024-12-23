import { useContext } from "react"
import { ShoppingCartContext } from "../context"

const Cart = () => {
    const context = useContext(ShoppingCartContext)

    // const getTotal = () => context.cart.reduce((total, item) => total + (item.quantity * item.price), 0)
    
    const renderCart = () => {
        if(context.cart.length > 0){
            return(
                <div className='cart'>
                    <h3 className="cart-title">Your Cart ({context.cart.length})</h3>
                    <div className="cart-filled">
                        {context.cart.map(item => (
                            <div className="cart-item" key={item.id}>
                                <div className="cart-item-left">
                                    <h3 className="cart-item-title">{item.name}</h3>
                                    <div className="cart-item-info">
                                        <span>{item.quantity}x</span>
                                        <span>@${item.price} </span>
                                        <span>${item.price * item.quantity}</span>
                                    </div>
                                </div>
                                <div className="cart-item-right">
                                    <img 
                                        src="/src/assets/icon-remove-item.svg" alt="" 
                                        onClick={() => context.removeFromCart(item.id)}
                                    />
                                </div>
                            </div>
                        ))}
                        <div className="cart-item-totals">
                            <p className="total-text">Order Total</p>
                            <p className="total-number">${context.getTotal()}</p>
                        </div>
                        <div className="carbon">
                            <img src="src/assets/icon-carbon-neutral.svg" alt="" />
                            <p>This is a <span>carbon neutral</span> delivery</p>
                        </div>
                        <button 
                            className="cart-item-confirm"
                            onClick={() => context.setModal(true)}
                        >
                            Confirm Order
                        </button>
                    </div>
                </div>
            )
        }else{
            return(
                <div className='cart'>
                    <h3 className="cart-title">Your Cart (0)</h3>
                    <div className="cart-empty">
                        <img src="/src/assets/illustration-empty-cart.svg" alt="" />
                        <p>Your added items will appear here</p>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="cart-div">
            {renderCart()}
            <div></div>
        </div>
    )
}


export default Cart
