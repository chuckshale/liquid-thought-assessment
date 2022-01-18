import React, { FC, useCallback, useState } from "react";
import InputField from "../components/input-field";
import useForm from "../hooks/useForm";
import Button from "../components/button";
import Loader from "../components/loader";
import { RegisterBody } from "../types/formValues";
import { createUser } from "../api/userAuth";
import AutoComplete from "../components/autoComplete";

const PullRequest: FC = () => {
    const [values, handleChange] = useForm<RegisterBody>({
        email: "",
        password: "",
        passwordConfirmation: "",
        name: "",
        address: "",
    });

    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);
    const [isLoading, setLoader] = useState(false);

    const onPublishPullRequest = useCallback(async () => {
        setLoader(true);
        setSuccess(false);
        try {
            const resp = await createUser(values);

            if (resp.success) {
                setError([]);
                setSuccess(true);
            } else {
                setError(resp);
            }
            setLoader(false);
        } catch (ex) {
            return;
        }
    }, [values]);

    const getUserAddress = (address: any) => {
        handleChange({ name: "address", value: address });
    };

    return (
        <>
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
                        name={"name"}
                        type="text"
                        placeholder="name"
                        title="Name"
                        onChange={handleChange}
                        value={values.name}
                    />
                </div>
                <div className="pr-container__elements">
                    <InputField
                        name={"password"}
                        type="password"
                        placeholder="password"
                        title="Password"
                        onChange={handleChange}
                        value={values.password}
                    />
                </div>
                <div className="pr-container__elements">
                    <InputField
                        name={"passwordConfirmation"}
                        type="password"
                        placeholder="Confirm"
                        title="Confirm"
                        onChange={handleChange}
                        value={values.passwordConfirmation}
                    />
                </div>
                <div className="pr-container__elements">
                    <AutoComplete
                        saveAddress={(address: any) => getUserAddress(address)}
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
                {success && (
                    <p className="success-mgs">
                        User "{values.name}" successfully created!
                    </p>
                )}
                <div className="pr-container__elements pr-container__elements-center">
                    {isLoading === false && (
                        <Button
                            title="Register"
                            onClick={onPublishPullRequest}
                        />
                    )}
                    <Loader spinnerColor="#000" loading={isLoading} />
                </div>
            </div>
        </>
    );
};

export default PullRequest;
