import { useContext } from "react"
import { ShoppingCartContext } from "../context"
import Cart from "./Cart"
import ConfirmationModal from "./ConfirmationModal"
import Products from "./Products"

const AppUI = () => {
    const context = useContext(ShoppingCartContext)
    return (
        <div className="container">
            {context.modal ? <ConfirmationModal/> : null}
            <Products/>
            <Cart/>
        </div>
    )
}

export default AppUI
