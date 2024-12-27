import { useContext } from "react"
import { ShoppingCartContext } from "../context"

const ConfirmationModal = () => {
    const context = useContext(ShoppingCartContext)
    return (
        <div className="modal">
            <div className="modal-content">
                <img className='modal-icon' src="./src/assets/icon-order-confirmed.svg" alt="" />
                <h3 className='modal-title'>Order Confirmed</h3>
                <p className='modal-text'>we hope you enjoy your food!</p>
                <div className='modal-order_resume'>
                    {context.cart.map(item => (
                        <div key={item.id} className='confirm-item'>
                            <div className='confirm-thumbnail'>
                                <img src={item.desktop_image} alt="" />
                            </div>
                            <div className='confirm-desc'>
                                <h4 className='confirm-title'>{item.name}</h4>
                                <p className='confirm-price'>x{item.quantity} </p>
                            </div>
                            <p className='confirm-total'>${item.quantity * item.price}</p>
                        </div>
                    ))}
                    <div className="cart-item-totals">
                        <p className="total-text">Order Total</p>
                        <p className="total-number">${context.getTotal()}</p>
                    </div>
                </div>
                <button 
                    className="modal-button"
                    onClick={() => {
                        context.setModal(false)
                        context.reStartOrder()
                    }}
                >Start New Order</button>
            </div>
        </div>
    )
}

export default ConfirmationModal
