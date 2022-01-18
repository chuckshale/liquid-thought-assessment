interface ProductProps {
    isSale: boolean;
    id: number;
    unitPrice: number;
    sku: string;
    image: string;
    isAvailable: boolean;
    description: string;
    currency: string;
    name: string;
    addToCart: React.MouseEventHandler<HTMLButtonElement>;
}

const Product = ({
    isSale,
    id,
    unitPrice,
    sku,
    image,
    description,
    currency,
    name,
    addToCart,
    isAvailable,
}: ProductProps) => {
    return (
        <div className="product__container">
            <div className="product__inner">
                <div className="product__title">{name}</div>
                <div className="product__image-container">
                    <div className="product__image">
                        <img src={image} alt={description} />
                    </div>
                    {isSale && <div className="product__sale">SALE</div>}
                </div>
                <div className="product__info">
                    {description} | {currency} {unitPrice}
                </div>
                <div className="product__info">{sku}</div>
            </div>
            {isAvailable && (
                <div className="product__add-to-cart">
                    <button className="product__add-item" onClick={addToCart}>
                        Add to Cart
                    </button>
                </div>
            )}
        </div>
    );
};

export default Product;
