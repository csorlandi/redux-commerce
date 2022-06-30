import { LOGIN_REQUEST, LoginRequestProps } from "../types/actions";

export const loginRequest = ({ email, password }: LoginRequestProps) => ({
    type: LOGIN_REQUEST,
    payload: { email, password },
})