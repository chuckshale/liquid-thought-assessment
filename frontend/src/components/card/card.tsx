interface CardProps {
    children: JSX.Element;
}

const Card = ({ children }: CardProps) => {
    return (
        <div className="card__container">
            <div className="card__inner">{children}</div>
        </div>
    );
};

export default Card;
