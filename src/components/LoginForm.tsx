import { FormEvent, useState } from "react"

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (!email || !password) return;

        alert('Opa!')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
            <button disabled={!email || !password}>Entrar</button>
        </form>
    )
}