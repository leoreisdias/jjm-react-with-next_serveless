import React, { useState, useMemo, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/router'
import PageHeader from '../components/PageHeader';

import styles from '../styles/newspost.module.css';
import Input from '../components/Input';
import Textarea from '../components/Textarea';

import api from '../services/api';
import { PacmanLoader } from 'react-spinners';


function NewPost() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [subjects, setSubjects] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState('');
    const [video_url, setVideo_url] = useState('');
    const [facebook_url, setFacebook_url] = useState('');
    const [webImageOne, setWebImageOne] = useState('');
    const [webImageTwo, setWebImageTwo] = useState('');
    const [editorial, setEditorial] = useState('');
    const [author, setAuthor] = useState('');
    const [source, setSource] = useState('');
    const [summary, setSummary] = useState('');
    const [flag, setFlag] = useState(false);
    const [token, setToken] = useState('');


    const preview = useMemo(() => {
        return image ? URL.createObjectURL(image) : null;
    }, [image]);

    const handleChange = (event: any) => {
        setImage(event.currentTarget.files[0])
    }

    const handleCreateNews = async (e: FormEvent) => {
        e.preventDefault();

        setFlag(true);
        const data = new FormData();
        data.append('image', image);
        data.append('title', title);
        data.append('description', description.replace(/\n/g, "##"));
        data.append('date', date);
        data.append('subjects', subjects);
        data.append('author', author);
        data.append('summary', summary.replace(/\n/g, "##"));
        if (video_url !== '')
            data.append('video_url', video_url);
        if (facebook_url !== '')
            data.append('facebook_url', facebook_url);
        if (webImageOne !== '')
            data.append('webImageOne', webImageOne);
        if (webImageTwo !== '')
            data.append('webImageTwo', webImageTwo);
        if (editorial !== '')
            data.append('editorial', editorial.replace(/\n/g, "##"));
        if (source !== '')
            data.append('source', source);


        try {
            await api.post('/news', data, {
                headers: {
                    authorization: 'Bearer ' + token
                }
            })

            alert('Notícia Postada com Sucesso!');
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
        <div id={styles.pageNewPost} className="container">
            <PageHeader
                title="Cadastrar notícia"
                description="Separe o assunto entre virgulas"
                backLink="news"
            />
            {flag ? <PacmanLoader color={"#8257E5"} size={60} css={"margin: 20rem auto;"} /> :
                <main>
                    <form onSubmit={handleCreateNews} className={styles.formNewsPost}>
                        <fieldset className={styles.newPost}>
                            <legend>Postagem</legend>

                            <Input
                                name="title"
                                label="Titulo *"
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }}
                                required
                                maxLength={90}
                            />
                            <Input
                                name="subjects"
                                label="Palavras Chave *"
                                value={subjects}
                                onChange={(e) => { setSubjects(e.target.value) }}
                                required
                            />
                            <Textarea
                                name="summary"
                                label="Resumo *"
                                value={summary}
                                onChange={(e) => { setSummary(e.target.value) }}
                                required
                                maxLength={125}
                            />
                            <Textarea
                                name="description"
                                label="Descrição Completa *"
                                value={description}
                                onChange={(e) => { setDescription(e.target.value) }}
                                required
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
                            <Input
                                name="source"
                                label="Nome da Fonte (Se houver fonte externa)"
                                type="text"
                                value={source}
                                onChange={(e) => { setSource(e.target.value) }}
                            />

                        </fieldset>

                        <fieldset className={styles.newPost}>
                            <legend>Imagem da Postagem *</legend>

                            <label
                                id={styles.image}
                                style={{ backgroundImage: `url(${preview})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}
                                className={image ? styles.hasImage : styles.noImage}
                            >
                                <input
                                    type="file"
                                    onChange={handleChange}
                                    required
                                />
                                <img src="/camera.svg" alt="Select" />
                            </label>

                            <Input
                                name="altImage1"
                                label="[OPCIONAL] Imagem Alternativa 1 - URL"
                                type="text"
                                value={webImageOne}

                                onChange={(e) => { setWebImageOne(e.target.value) }}
                            />

                            <Input
                                name="altImage2"
                                label="[OPCIONAL] Imagem Alternativa 2 - URL"
                                type="text"
                                value={webImageTwo}

                                onChange={(e) => { setWebImageTwo(e.target.value) }}
                            />
                            <br />
                        </fieldset>

                        <fieldset className={styles.newPost}>
                            <legend>Videos Opcionais - Escolha somente uma fonte de Video</legend>
                            <Input
                                name="altVideo"
                                label="[OPCIONAL] YouTube -  URL"
                                type="text"
                                value={video_url}
                                onChange={(e) => { setVideo_url(e.target.value) }}
                            />

                            <Input
                                name="altVideoFace"
                                label="[OPCIONAL] Facebook Video -  Incorporação"
                                type="text"
                                value={facebook_url}
                                onChange={(e) => { setFacebook_url(e.target.value) }}
                            />
                        </fieldset>



                        <fieldset className={styles.newPost}>
                            <legend>Parte Reservada ao Autor(a)</legend>
                            <Input
                                name="authorName"
                                label="Autor - Sim, seu nome mesmo *"
                                type="text"
                                value={author}
                                onChange={(e) => { setAuthor(e.target.value) }}
                                required
                            />

                            <Textarea
                                name="summary"
                                label="[OPCIONAL] Editorial - Sua opinião da Notícia"
                                value={editorial}
                                onChange={(e) => { setEditorial(e.target.value) }}
                            />
                        </fieldset>

                        <footer>
                            <p>
                                <img src="/warning.svg" alt="Aviso Importante" />
                        Importante! <br />

                        Preencha todos os dados não opcionais
                    </p>
                            <button type="submit">Salvar Postagem</button>
                        </footer>
                    </form>
                </main>
            }
        </div>
    )
}

export default NewPost;
