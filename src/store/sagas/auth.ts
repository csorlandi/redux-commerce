import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects'
import { loginError, loginSuccess } from '../actions/auth';

import { ActionType, LOGIN_REQUEST } from '../types/actions'

function* login(action: ActionType) {
    try {
        const { email, password } = action.payload;

        const { data } = yield call(
            axios.post,
            'https://reqres.in/api/login',
            { email, password },
        );

        yield put(loginSuccess(data.token));
    } catch (error) {
        // @ts-ignore
        console.log(error.response);
        yield put(loginError('Erro ao autenticar o usuário'));
    }
}

export default function* authSagas() {
    yield takeLatest(LOGIN_REQUEST, login);
}