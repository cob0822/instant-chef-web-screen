export interface User {
    name: string;
    email?: string;
    phone_number?: number;
    password: string;
    passwordConfirm?: string;
}