import { createContext, useState } from "react";
import { ProductType } from "../../types/product";

interface ShopContextState {
    items: any;
    addToCart: (item: ProductType) => void;
    updateCart: (items: ProductType[]) => void;
}

const defaultState: ShopContextState = {
    items: [],
    addToCart: () => {},
    updateCart: () => {},
};

export const ShopContext = createContext<ShopContextState>(defaultState);

const ShopContextProvider = ({ children }: any) => {
    const [items, setItems] = useState(defaultState.items);

    const addToCart = (newItem: ProductType) =>
        setItems((items: ProductType[]) => [...items, newItem]);

    const updateCart = (newList: ProductType[]) => {
        setItems(newList);
    };
    return (
        <ShopContext.Provider
            value={{
                items,
                addToCart,
                updateCart,
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
