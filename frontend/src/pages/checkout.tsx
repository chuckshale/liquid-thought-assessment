import React, { useCallback, useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import { ProductType } from "../types/product";
import Button from "../components/button";
const Checkout = () => {
    const { items } = useContext(ShopContext);
    const [orderTotal, setOrderTotal] = useState(0);

    const addTotal = useCallback(() => {
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            sum += items[i]["unitPrice"];
        }
        setOrderTotal(sum);
    }, [items]);

    useEffect(() => {
        addTotal();
    }, [addTotal, items]);
    return (
        <div className="pr-container">
            <div className="pr-container__elements">
                Checkout items ({items.length})
                <div className="checkout-items-list">
                    {items &&
                        items.map((item: ProductType, index: number) => {
                            return (
                                <div
                                    className="checkout-items-container"
                                    key={index}
                                >
                                    <div className="checkout-items-inner">
                                        {item.name} - {item.description} |{" "}
                                        <strong>ZAR</strong> : {item.unitPrice}
                                    </div>
                                </div>
                            );
                        })}
                </div>
                {orderTotal > 0 && <div>Total : {orderTotal}</div>}
                <Button
                    title="checkout"
                    // eslint-disable-next-line no-restricted-globals
                    onClick={() => confirm(`Order total is ${orderTotal}`)}
                />
            </div>
        </div>
    );
};

export default Checkout;
