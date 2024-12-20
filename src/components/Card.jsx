import { useContext } from "react"
import { ShoppingCartContext } from "../context"

const Card = ({product}) => {
    const context = useContext(ShoppingCartContext)

    return (
        <div className="card">
            <div className="card-img-container">
                <picture className="card-img-top">
                    <source media="(min-width:739px )" srcSet={product.desktop_image} sizes="" />
                    <img src={product.mobile_image} alt={product.name} />
                </picture>
                {product.quantity <= 0 ? (
                    <button
                        className="card-button"
                        onClick={()=>context.addToCart(product)}
                    ><img src="/src/assets/icon-add-to-cart.svg" alt="" /> <span>Add to Cart</span>
                    </button>
                ):(
                    <button>
                        hello world {/*FIXME:*/}
                    </button>
                )}
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
