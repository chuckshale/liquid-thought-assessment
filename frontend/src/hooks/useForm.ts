import { useCallback, useReducer } from "react";

export type InputChangeEvent = {
    name: string;
    value: string;
};

function useFormState<T extends Record<string, string>>(initialValue: T) {
    const [state, dispatch] = useReducer(
        (prevState: T, { name, value }: InputChangeEvent) => ({
            ...prevState,
            [name]: value,
        }),
        initialValue
    );

    const handleDispatch = useCallback(
        ({ name, value }: InputChangeEvent) => {
            dispatch({
                name,
                value,
            });
        },
        [dispatch]
    );

    return [state, handleDispatch] as const;
}

export default useFormState;
