import React, { useState, FormEvent } from 'react';
import PageHeader from '../components/PageHeader';

import styles from '../styles/login.module.css';
import Input from '../components/Input';

import api from '../services/api';
import { useRouter } from 'next/router'

function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');


    async function handleCreateNews(event: FormEvent) {
        event?.preventDefault();

        try {
            const response = await api.post("/authenticate", {
                email,
                passwd
            })

            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userId', response.data.user._id)
            localStorage.setItem('name', response.data.user.name);
            alert(`Bem vindo(a) ${response.data.user.name}`)
            router.push('/options')

        } catch (err) {
            console.log("Erro");
            alert("Usuário ou senha incorretos!")
            window.location.reload();
        }

    }

    return (
        <div id={styles.pageLogin} className="container">
            <PageHeader
                title="Login de Acesso"
                description="Informe seu email e senha"
                backLink="dashboard"
            />

            <main>
                <form onSubmit={handleCreateNews} className="formLogin">
                    <fieldset className={styles.login}>
                        <legend>Bem vindo(a)</legend>

                        <Input
                            type="email"
                            name="email"
                            label="E-mail *"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            required
                        />
                        <Input
                            name="password"
                            type="password"
                            label="Senha *"
                            value={passwd}
                            onChange={(e) => { setPasswd(e.target.value) }}
                            required
                        />
                    </fieldset>
                    <footer>
                        <p>
                            <img src="/warning.svg" alt="Aviso Importante" />
                        Frase legal! <br />

                        Se você não se sente a altura, suba até ela
                            </p>
                        <button type="submit">Entrar</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default Login;
