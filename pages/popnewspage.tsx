import React, { useState, useEffect } from 'react';

import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'
import { GiOmega, GiScrollUnfurled, GiPocketWatch } from 'react-icons/gi'
import { FaBars, FaSearch } from 'react-icons/fa'

import styles from '../styles/popnews.module.css'

import PageHeader from '../components/PageHeader';
import PopNewsItem, { PopNews } from '../components/PopNewsItem';
import Input from '../components/Input';
import PageFooter from '../components/PageFooter';
import Partners from '../components/Partners';

import api from '../services/api';

import MyMenu from '../components/MyMenu';
import { NextSeo } from 'next-seo';
import HotmartCourses from '../components/HotmartCourses';

function PopNewsPage() {
    const [subjects, setSubject] = useState('');
    const [title, setTitle] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [flag, setFlag] = useState(false)
    const [popnews, setPopNews] = useState([]);
    const [searchFlag, setSearchFlag] = useState(false);
    const [visible, setVisible] = React.useState(false)

    useEffect(() => {
        async function countPages() {
            const maxPages = await api.get('/popnews');
            setTotalPages(maxPages.data.pages)
        }
        countPages();
    }, []);

    useEffect(() => {

        const loadNews = async (currentPage: number) => {
            const response = await api.get(`/popnews?page=${currentPage}`);
            // response.data.docs.reverse();
            setPopNews(response.data.docs);
            setSearchFlag(false);
            setFlag(false);
        }

        loadNews(page);

    }, [page, searchFlag])

    const prevPage = () => {
        if (page === 1) return;

        const pageNumber = page - 1;
        setPage(pageNumber)
        window.scrollTo(0, 0);

    }

    const nextPage = () => {
        if (page === totalPages) return;

        const pageNumber = page + 1;
        setPage(pageNumber)
        window.scrollTo(0, 0);

    }

    function handleSidebar() {
        if (visible === false)
            setVisible(true);
        else
            setVisible(false)
    }

    async function searchNews() {
        if (title !== '' || subjects !== '') {
            setFlag(true);
            const response = await api.get('/searchpopnews', {
                params: {
                    subjects,
                    title,
                }
            })
            setPopNews(response.data.popnews.reverse());
        } else {
            setSearchFlag(true);
        }
    }

    const debounceEvent = (fn: Function, wait = 1000, time: any) => (...args: any) => {
        clearTimeout(time)
        time = setTimeout(() => {
            fn(...args)
        }, wait)
    }

    function handleKeyUp() {
        searchNews()
    }

    function handleSearchParams(event: string) {
        setSubject(event);
        setTitle(event);
    }

    return (
        <>
            <NextSeo
                title="JJM - Mundo POP"
            />
            <div id={styles.pagePopNewsPage} className="container">
                <PageHeader
                    title="Mundo POP"
                    backLink="popnews"
                >
                    <form id={styles.searchPopnews} >

                        <FaBars color="white" size={50} onClick={handleSidebar} className={styles.openSidebar} />

                        <Input
                            name="subject"
                            label="Assunto/Titulo"
                            value={subjects}
                            onChange={e => { handleSearchParams(e.target.value) }}
                            onKeyUp={debounceEvent(handleKeyUp, 1000, 500)}
                        />
                        <FaSearch color="white" size={30} className={styles.iconSearch} />

                    </form>
                </PageHeader>



                <MyMenu flag={visible}>

                    <main className={styles.PopNewsPageMain}>
                        {Object.keys(popnews).length !== 0 ? popnews.map((popnews: PopNews) => {
                            return <PopNewsItem key={popnews._id} popnews={popnews} />
                        }) : <><h1>Nada encontrado... <br /><br />Clique novamente no Buscar para voltar</h1>
                                <h1>Nada encontrado... <br /><br />Clique novamente no Buscar para voltar</h1></>}



                    </main>

                    <div className={styles.pageButtonGroup}>
                        <button disabled={page === 1 || flag === true} onClick={prevPage} className={styles.buttonPrev}>
                            <FiArrowLeft size={30} /> Anterior
                            </button>
                        {page === totalPages ? <GiOmega size={30} /> : page === 1 ? <GiPocketWatch size={30} /> : <GiScrollUnfurled size={30} />}
                        <button disabled={page === totalPages || flag === true} onClick={nextPage} className={styles.buttonNext}>
                            Próximo <FiArrowRight size={30} />
                        </button>
                    </div>

                </MyMenu>

                <Partners />

                <HotmartCourses randomNumber={Math.floor(Math.random() * 11)} />

                <PageFooter />
            </div>
        </>
    )
}

export default PopNewsPage;
