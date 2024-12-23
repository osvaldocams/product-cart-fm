import { useContext } from "react"
import { ShoppingCartContext } from "../context"

const Card = ({product}) => {
    const context = useContext(ShoppingCartContext)

    const renderQuantity = (id) => context.cart.map(item =>{
        if(item.id === id){
            return(
                <span key={item.id} className="controls-quantity">{item.quantity} </span>
            )
        }
    })
    const renderActiveStyles = (id) => context.cart.filter(item => item.id === id).length ? 'active' : null

    const renderButton = (id) => {
        const isInCart = context.cart.filter(item => item.id === id).length
        if(isInCart){
            return (
                <div 
                    className="controls"
                >
                    <button 
                        className="controls-button"
                        onClick={() => context.decreaseQuantity(product.id)}
                    >
                        <svg className="controls-button" xmlns="http://www.w3.org/2000/svg" width="0" height="0" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
                    </button>

                    {renderQuantity(product.id)}

                    <button 
                        className="controls-button"
                        onClick={()=> context.increaseQuantity(product.id)}
                    >
                        <svg className="controls-button" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
                    </button>
                </div>
            )
        }else{
            return(
                <button
                        className="card-button"
                        onClick={()=>context.addToCart(product)}
                    ><img src="/src/assets/icon-add-to-cart.svg" alt="" /> <span>Add to Cart</span>
                </button>
            )
        }
    }

    return (
        <div className="card">
            <div className="card-img-container">
                <picture className="card-img-top">
                    <source media="(min-width:739px )" srcSet={product.desktop_image} sizes="" />
                    <img className={`${renderActiveStyles(product.id)}`} src={product.mobile_image} alt={product.name} />
                </picture>
                {renderButton(product.id)}
            </div>
            <div className="card-body">
                <p className="card-text">{product.category} </p>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-price">${product.price}</p>
            </div>
        </div>
    )
}


export default Card

// {context.cart.map(item => (        
//     <span>{item.quantity}x</span>
// ))}