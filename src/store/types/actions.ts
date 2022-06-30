export type ActionType = {
    type: string;
    payload: any;
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export type LoginRequestProps = {
    email: string;
    password: string;
}