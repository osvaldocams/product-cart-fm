import React from 'react'

const Card = () => {
    return (
        <div className="card">
            <div className="card-img-container">
                <picture className="card-img-top">
                    <source media="(min-width:739px )" srcSet="/src/assets/image-brownie-desktop.jpg" sizes="" />
                    <img src="/src/assets/image-brownie-mobile.jpg" alt="" />
                </picture>
                <button
                    className="card-button"
                ><img src="/src/assets/icon-add-to-cart.svg" alt="" /> <span>Add to Cart</span>
                </button>
            </div>
            <div className="card-body">
                <p className="card-text">Waffle</p>
                <h5 className="card-title">Waffle with Berries</h5>
                <p className="card-price">$6.50</p>
            </div>
        </div>
    )
}

export default Card
