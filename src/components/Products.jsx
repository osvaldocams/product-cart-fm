import Card from "./Card"

const Products = () => {
    return (
        <div className="products">
            <h1 className="products-title">Desserts</h1>
            <div className="products-cards-container">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default Products
