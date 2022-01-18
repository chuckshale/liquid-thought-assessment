import React, { FC } from "react";
import "./App.css";
import Header from "./components/header/";
import ShopContextProvider from "./context/shopContext/shop-context";

const App: FC = () => {
    return (
        <>
            <ShopContextProvider>
                <Header title="Dashboard" />
            </ShopContextProvider>
        </>
    );
};

export default App;
