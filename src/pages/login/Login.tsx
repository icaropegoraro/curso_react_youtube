import { useState, useMemo, useRef, useCallback } from 'react'
import { InputLogin } from './components/InputLogin'

export const Login = () => {

    const inputPasswordRef = useRef<HTMLInputElement>(null)

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const emailLength = useMemo(() => {
        return email.length * 1000
    }, [email]);

    const handleEntrar = useCallback(() => {
        console.log(email)
        console.log(senha)
    },[email, senha])

    return (
        <div>
            <form action="">

                <p>Quantidade de caracteres: {emailLength}</p>

                <InputLogin
                    label='Email'
                    onChange={newValue => setEmail(newValue)}
                    value={email}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <br/>
                <br/>

                <InputLogin
                    label='Senha'
                    onChange={newValue => setSenha(newValue)}
                    value={senha}
                    type='password'
                />

                <br />
                <br />

                <button type='button' onClick={handleEntrar}>Entrar</button>

            </form>
        </div>
    )
}