import React, { FC, useCallback, useState } from "react";
import InputField from "../components/input-field";
import useForm from "../hooks/useForm";
import Button from "../components/button";
import { LoginBody } from "../types/formValues";
import { userLogin } from "../api/userAuth";
import Loader from "../components/loader";
import { useNavigate } from "react-router-dom";

export const Login: FC = () => {
    const [values, handleChange] = useForm<LoginBody>({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const [error, setError] = useState([]);
    const [isLoading, setLoader] = useState(false);

    const onUserlogin = useCallback(async () => {
        setLoader(true);
        try {
            const resp = await userLogin(values);

            if (resp.success) {
                setError([]);
                navigate("/shop");
            } else {
                setError(resp);
            }
            setLoader(false);
        } catch (ex) {
            return;
        }
    }, [values, navigate]);

    return (
        <div className="pr-container">
            <div className="pr-container__elements">
                <div className="pr-container__elements">
                    <InputField
                        name={"email"}
                        type="text"
                        placeholder="email"
                        title="Email"
                        onChange={handleChange}
                        value={values.email}
                    />
                </div>
                <InputField
                    name={"password"}
                    type="password"
                    placeholder="password"
                    title="Password"
                    onChange={handleChange}
                    value={values.password}
                />
            </div>
            {error &&
                error.length > 0 &&
                error.map((error, index) => {
                    return (
                        <p className="error" key={index}>
                            {error}
                        </p>
                    );
                })}

            <div className="pr-container__elements pr-container__elements-center">
                {isLoading === false && (
                    <Button title="Login" onClick={onUserlogin} />
                )}
                <Loader spinnerColor="#000" loading={isLoading} />
            </div>
        </div>
    );
};
