import React, { FC, useContext, useEffect, useState } from "react";
import Card from "../components/card";
import Product from "../components/product";
import Loader from "../components/loader";
import { ShopContext } from "../context/shopContext";
import { getProductList } from "../api/products";
import { ProductType } from "../types/product";

const Shop: FC = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoader] = useState(false);

    const { addToCart } = useContext(ShopContext);

    const onAddToCart = (item: ProductType) => {
        addToCart(item);
        alert(`${item.description} added to cart!`);
    };

    const loadProducts = async () => {
        setLoader(true);
        const productList = await getProductList();
        if (productList) {
            setProducts(productList);
        }
        setLoader(false);
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div className="pr-container">
            <div className="pr-container__elements">
                <h1>Product List: {products && products.length} </h1>
            </div>
            <Loader loading={isLoading} />
            <div className="shop__items-container">
                {products &&
                    products.map((item: ProductType, index: number) => {
                        return (
                            <Card>
                                <Product
                                    isSale={item.isSale}
                                    id={item.id}
                                    unitPrice={item.unitPrice}
                                    sku={item.sku}
                                    image={item.image}
                                    isAvailable={item.isAvailable}
                                    description={item.description}
                                    currency={item.currency}
                                    name={item.name}
                                    key={index}
                                    addToCart={() => onAddToCart(item)}
                                />
                            </Card>
                        );
                    })}
            </div>
        </div>
    );
};

export default Shop;
