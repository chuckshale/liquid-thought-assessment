import { user } from "../interfaces/user";
import { LoginBody } from "../types/formValues";

const endpoint = "http://localhost:8000"; // in acutal scenario it would be defined in a .env file
const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

export const createUser = ({
    name,
    password,
    passwordConfirmation,
    email,
    address,
}: user) => {
    const body = { name, password, passwordConfirmation, email, address };

    return fetch(`${endpoint}/api/users`, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
    })
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((err) => {
            return [
                "Unable to register user, email already exists or try again later...",
            ];
        });
};

export const userLogin = ({ email, password }: LoginBody) => {
    const body = { email, password };

    return fetch(`${endpoint}/api/sessions`, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
    })
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((err) => {
            return [
                "unable to login you in, either password or username are incorrect.",
            ];
        });
};
