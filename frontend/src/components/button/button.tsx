/**
 @param {string} title - title used to identify button
 @param {function} onClick - function used to trigger assigned function
 */

interface Props {
    title: string;
    onClick(): void;
}

const Button = ({ title, onClick }: Props) => {
    return (
        <>
            <button className="btn" onClick={onClick}>
                {" "}
                {title}{" "}
            </button>
        </>
    );
};

export default Button;
