export type ActionType = {
    type: string;
    payload: any;
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export type LoginRequestProps = {
    email: string;
    password: string;
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export type LoginSuccessProps = {
    token: string;
}

export const LOGIN_ERROR = 'LOGIN_ERROR';