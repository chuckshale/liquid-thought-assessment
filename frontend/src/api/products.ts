const endpoint = "http://localhost:8000"; // in acutal scenario it would be defined in a .env file

export const getProductList = () => {
    return fetch(`${endpoint}/api/products`)
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((err) => console.log(err));
};
