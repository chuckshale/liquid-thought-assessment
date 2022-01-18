import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Register from "../../pages/register";
import Shop from "../../pages/shop";
import { Login } from "../../pages/login";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import Cart from "../cart/Cart";
import Checkout from "../../pages/checkout";

/**
 @param {string} title - Generic Header title used to identify dropdown
 */

interface Props {
    title: string;
}

const Header = ({ title }: Props) => {
    const { items } = useContext(ShopContext);

    const checkout = () => {};

    return (
        <Router>
            <>
                <div className="top-navbar">
                    <div className="nav-btn__container">
                        {" "}
                        <Link className="nav-btn" to="/">
                            Sign In
                        </Link>{" "}
                        <Link className="nav-btn" to="/register">
                            Sign Up
                        </Link>
                        <Link className="nav-btn" to="/shop">
                            Shop
                        </Link>
                    </div>
                    <div className="cart-container">
                        <Cart onClick={() => checkout} cartItems={items} />
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/shop" element={<Shop />}></Route>
                    <Route path="/checkout" element={<Checkout />}></Route>
                </Routes>
            </>
        </Router>
    );
};

export default Header;
