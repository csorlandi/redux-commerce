import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux";

import { loginRequest } from "../store/actions/auth";

export default function LoginForm() {
    const [email, setEmail] = useState('eve.holt@reqres.in');
    const [password, setPassword] = useState('cityslicka');

    const dispatch = useDispatch();

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (!email || !password) return;

        dispatch(loginRequest({
            email, password,
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
            <button disabled={!email || !password}>Entrar</button>
        </form>
    )
}