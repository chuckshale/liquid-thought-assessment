export type RegisterBody = {
    email: string;
    name: string;
    password: string;
    passwordConfirmation: string;
    address: string;
};

export type LoginBody = {
    email: string;
    password: string;
};
