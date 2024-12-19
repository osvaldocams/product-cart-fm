import { useContext } from "react"
import { ShoppingCartContext } from "../context"
import Card from "./Card"

const Products = () => {
    const context = useContext(ShoppingCartContext)
    return (
        <div className="products">
            <h1 className="products-title">Desserts</h1>
            <div className="products-cards-container">
                {context.products.map(product => (
                    <Card
                        product={product}
                        key={product.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Products
