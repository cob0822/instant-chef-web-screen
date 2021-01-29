export interface User {
    name?: string;
    email?: string;
    phone_number?: number;
    password: string;
    passwordConfirm?: string;
    created_at?: string;
    updated_at?: string;
    email_verified_at?: string;
}