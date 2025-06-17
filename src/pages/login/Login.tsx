import { useState } from "react"

export const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleEntrar = () => {
        console.log(email)
        console.log(senha)
    }
    return (
        <div>
            <form action="">

                <label>
                    <span>Email</span>
                    <input type='email' value={email} onChange={ evento => setEmail(evento.target.value)}/>
                </label>

                <br/>
                <br/>

                <label>
                    <span>Senha</span>
                    <input type='password' value={senha} onChange={ evento => setSenha(evento.target.value)}/>
                </label>

                <br />
                <br />

                <button type='button' onClick={handleEntrar}>Entrar</button>

            </form>
        </div>
    )
}