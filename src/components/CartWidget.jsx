import React from 'react'
import cart from "./images/cart.svg"

const CartWidget = () => {
    return (
        <button type="button" className="btn  border position-relative">
            <img src={cart} alt="carrito" width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3</span>
        </button>
    )
}

export default CartWidget;