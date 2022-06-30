import { call } from 'redux-saga/effects'

export default function* authSagas() {
    yield call(console.log, 'Saga');
}