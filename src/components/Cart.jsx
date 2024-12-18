
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
            <div></div>
        </div>
    )
}

export default Cart
