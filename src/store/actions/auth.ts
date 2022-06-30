import { LOGIN_REQUEST, LoginRequestProps, LOGIN_SUCCESS, LoginSuccessProps, LOGIN_ERROR } from "../types/actions";

export const loginRequest = ({ email, password }: LoginRequestProps) => ({
    type: LOGIN_REQUEST,
    payload: { email, password },
})

export const loginSuccess = (token: LoginSuccessProps) => ({
    type: LOGIN_SUCCESS,
    payload: { token },
})

export const loginError = (error: string) => ({
    type: LOGIN_ERROR,
    payload: { error },
})