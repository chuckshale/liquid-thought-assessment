import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import { ProductType } from "../../types/product";
import Button from "../button";

// import shoppingCart from "/shopping-cart.svg";

interface CartProps {
    cartItems: any;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Cart = ({ cartItems, onClick }: CartProps) => {
    const [visble, setVisible] = useState(false);
    const navigate = useNavigate();
    const { items } = useContext(ShopContext);

    const removeItem = (index: number) => {
        items.splice(index, 1);
    };
    return (
        <div
            className="cart-container"
            onClick={() => setVisible((prevState) => !prevState)}
        >
            <div className="cart-image-container">
                <img
                    className="cart-image"
                    src={process.env.PUBLIC_URL + "/shopping-cart.svg"}
                    alt="shopping-cart"
                />
                <div className="cart-count">{cartItems.length}</div>
            </div>
            {visble && cartItems.length >= 1 && (
                <div className="mini-cart-container">
                    <div className="mini-cart-elements">
                        {cartItems.map((item: ProductType, index: number) => {
                            return (
                                <div className="mini-cart-inner" key={index}>
                                    <div className="mini-cart-image-container">
                                        <img
                                            className="mini-cart-image"
                                            src={item.image}
                                            alt={item.description}
                                        />
                                    </div>
                                    <div className="mini-cart-price">
                                        {item.currency} {item.unitPrice}
                                    </div>
                                    <div className="mini-cart-description">
                                        {item.description}
                                    </div>
                                    <div className="mini-cart-item-remove-btn">
                                        <button
                                            onClick={() => removeItem(index)}
                                        >
                                            x
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mini-cart-checkout-btn">
                        <Button
                            title="checkout"
                            onClick={() => navigate("/checkout")}
                        />{" "}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
