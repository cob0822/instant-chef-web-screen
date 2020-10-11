export interface ResponseWithAccessToken<T> {
    access_token: string;
    expires_in?: number;
    token_type?: string;
    user: T;
}