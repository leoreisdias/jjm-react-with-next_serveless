import React, { useState, useMemo, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/router'
import PageHeader from '../components/PageHeader';

import styles from '../styles/reportpost.module.css';
import Input from '../components/Input';
import Textarea from '../components/Textarea';

import api from '../services/api';
import { PacmanLoader } from 'react-spinners';


function ReportPost() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [reportImage, setReportImage] = useState('');
    const [flag, setFlag] = useState(false);
    const [token, setToken] = useState('');


    const preview = useMemo(() => {
        return reportImage ? URL.createObjectURL(reportImage) : null;
    }, [reportImage]);

    const handleChange = (event: any) => {
        setReportImage(event.currentTarget.files[0])
    }

    const handleCreateReport = async (e: FormEvent) => {
        e.preventDefault();
        setFlag(true);

        const data = new FormData();
        data.append('reportImage', reportImage);
        data.append('title', title);
        data.append('description', description.replace(/\n/g, "##"));
        data.append('date', date);
        data.append('name', name);

        try {
            await api.post('/deathreports', data, {
                headers: {
                    authorization: 'Bearer ' + token
                }
            })
            alert('Nota Postada com Sucesso!');
            setFlag(false);
            router.push('/options')
        } catch (err) {
            alert("Login Obrigátorio para Postagem!!")
            router.push('/dashboard')
        }
    }

    useEffect(() => {
        let storage = localStorage.getItem('token')
        setToken(String(storage))
    }, [flag, token])

    return (
        <div id={styles.pageReportPost} className="container">
            <PageHeader
                title="Cadastro de Notas de Falecimento"
                description="Imagem do Falecido é opcional"
                backLink="reports"
            />

            {flag ? <PacmanLoader color={"#8257E5"} size={60} css={"margin: 20rem auto;"} /> :

                <main>
                    <form onSubmit={handleCreateReport} className={styles.formReport}>
                        <fieldset className={styles.reportpost}>
                            <legend>Postagem</legend>

                            <Input
                                name="title"
                                label="Titulo *"
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }}
                                required
                            />
                            <Input
                                name="name"
                                label="Nome do Falecido *"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                                required
                            />
                            <Textarea
                                name="description"
                                label="[OPCIONAL] Descrição da Nota de Falecimento"
                                value={description}
                                onChange={(e) => { setDescription(e.target.value) }}
                            />

                            <br />
                            <h2>Data</h2>
                            <Input
                                name="date"
                                label="Data *"
                                type="date"
                                value={date}
                                onChange={(e) => { setDate(e.target.value) }}
                                required
                            />

                        </fieldset>

                        <fieldset className={styles.reportpost}>
                            <legend>Imagem da Nota ou Falecido</legend>

                            <label
                                id={styles.image}
                                style={{ backgroundImage: `url(${preview})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}
                                className={reportImage ? styles.hasImage : styles.noImage}
                            >
                                <input
                                    type="file"
                                    onChange={handleChange}
                                />
                                <img src="/camera.svg" alt="Select" />
                            </label>
                            <br />
                        </fieldset>

                        <footer>
                            <p>
                                <img src="/warning.svg" alt="Aviso Importante" />
                        Importante! <br />

                        Preencha todos os dados não opcionais
                    </p>
                            <button type="submit">Salvar Nota</button>
                        </footer>
                    </form>
                </main>
            }
        </div>
    )
}

export default ReportPost;
