import React, { useState, useEffect } from 'react';

import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'
import { GiOmega, GiScrollUnfurled, GiPocketWatch } from 'react-icons/gi'
import { FaBars } from 'react-icons/fa'

import styles from '../styles/newspage.module.css'

import PageHeader from '../components/PageHeader';
import NewsItem, { News } from '../components/NewsItem';
import Input from '../components/Input';
import PageFooter from '../components/PageFooter';
import Partners from '../components/Partners';
import { FaSearch } from 'react-icons/fa'

import api from '../services/api';

import MyMenu from '../components/MyMenu';
import { NextSeo } from 'next-seo';
import HotmartCourses from '../components/HotmartCourses';

function NewsPage() {
    const [subjects, setSubject] = useState('');
    const [title, setTitle] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [flag, setFlag] = useState(false)
    const [news, setNews] = useState([]);
    const [searchFlag, setSearchFlag] = useState(false);
    const [visible, setVisible] = React.useState(false)

    useEffect(() => {
        async function countPages() {
            const maxPages = await api.get('/news');
            setTotalPages(maxPages.data.pages)
        }
        countPages();

    }, []);

    useEffect(() => {

        const loadNews = async (currentPage: number) => {
            const response = await api.get(`/news?page=${currentPage}`);
            // response.data.docs.reverse();
            setNews(response.data.docs);
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
            const response = await api.get('/search', {
                params: {
                    subjects,
                    title,
                }
            })
            setNews(response.data.news.reverse());
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


    return (<>
        <NextSeo
            title="JJM - Notícias"
        />
        <div id={styles.pageDashboard} className="container" >
            <PageHeader
                title="Últimas Notícias"
                backLink="news"
            >
                <form id={styles.searchNews} >
                    <FaBars className={styles.openSidebar} color="white" size={50} onClick={handleSidebar} />

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

                <main className={styles.newspageMain}>
                    {Object.keys(news).length !== 0 ? news.map((news: News) => {
                        return <NewsItem key={news._id} news={news} />
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

            <HotmartCourses randomNumber={Math.floor(Math.random() * 5)} />


            <PageFooter />
        </div>
    </>
    )
}

export default NewsPage;
