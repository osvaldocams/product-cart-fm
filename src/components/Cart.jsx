
const Cart = () => {
    
    return (
        <div className="cart-div">
            <div className='cart'>
                <h3 className="cart-title">Your Cart (0)</h3>
                <div className="cart-empty">
                    <img src="/src/assets/illustration-empty-cart.svg" alt="" />
                    <p>Your added items will appear here</p>
                </div>
            </div>
            <div className='cart'>
                <h3 className="cart-title">Your Cart (7)</h3>
                <div className="cart-filled">
                    <div className="cart-item">
                        <div className="cart-item-left">
                            <h3 className="cart-item-title">Classic tiramisu</h3>
                            <div className="cart-item-info">
                                <span>1x</span>
                                <span>@$5.50</span>
                                <span>$5.50</span>
                            </div>
                        </div>
                        <div className="cart-item-right">
                            <img src="/src/assets/icon-remove-item.svg" alt="" />
                        </div>
                    </div>
                    <div className="cart-item-totals">
                        <p className="total-text">Order Total</p>
                        <p className="total-number">$46.50</p>
                    </div>
                    <div className="carbon">
                        <img src="src/assets/icon-carbon-neutral.svg" alt="" />
                        <p>This is a <span>carbon neutral</span> delivery</p>
                    </div>
                    <button className="cart-item-confirm">
                        Confirm Order
                    </button>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Cart
