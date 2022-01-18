/**
 @param {string} spinnerColor - Optional color to define spinner otherwise defaults to #000
 @param {boolean} loading - boolean to toggle showing component.
 */

interface Props {
    spinnerColor?: string;
    loading: boolean;
}

const Loader = ({ spinnerColor = "#000", loading = false }: Props) => {
    return (
        <>
            {loading && (
                <div
                    id="loading"
                    style={{ borderTopColor: spinnerColor }}
                ></div>
            )}
        </>
    );
};

export default Loader;
