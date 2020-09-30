/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'

import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'
import { GiOmega, GiScrollUnfurled, GiPocketWatch } from 'react-icons/gi'

import styles from '../styles/deathreports.module.css'

import PageHeader from '../components/PageHeader'
import PageFooter from '../components/PageFooter'
import Partners from '../components/Partners'

import api from '../services/api'

import MyMenu from '../components/MyMenu'
import ReportItem, { Report } from '../components/ReportItem'
import { FaBars } from 'react-icons/fa'
import { NextSeo } from 'next-seo'

const DeathReports: React.FC = () => {
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState()
    const [flag, setFlag] = useState(false)
    const [reports, setReports] = useState([])
    const [searchFlag, setSearchFlag] = useState(false)
    const [visible, setVisible] = React.useState(false)

    useEffect(() => {
        async function countPages() {
            const maxPages = await api.get('/deathreports')
            setTotalPages(maxPages.data.pages)
        }
        countPages()
    }, [])

    useEffect(() => {
        const loadNews = async (currentPage: number) => {
            const response = await api.get(`/deathreports?page=${currentPage}`)
            // response.data.docs.reverse();
            setReports(response.data.docs)
            setSearchFlag(false)
            setFlag(false)
        }

        loadNews(page)
    }, [page, searchFlag])

    const prevPage = () => {
        if (page === 1) return

        const pageNumber = page - 1
        setPage(pageNumber)
        window.scrollTo(0, 0)
    }

    const nextPage = () => {
        if (page === totalPages) return

        const pageNumber = page + 1
        setPage(pageNumber)
        window.scrollTo(0, 0)
    }

    function handleSidebar() {
        if (visible === false) setVisible(true)
        else { setVisible(false) }
    }

    // async function searchNews() {
    //     if (title !== '') {
    //         setFlag(true);
    //         const response = await api.get('/search', {
    //             params: {
    //                 title,
    //             }
    //         })
    //         setNews(response.data.news);
    //     } else {
    //         setSearchFlag(true);
    //     }
    // }

    // const debounceEvent = (fn: Function, wait = 1000, time: any) => (...args: any) => {
    //     clearTimeout(time)
    //     time = setTimeout(() => {
    //         fn(...args)
    //     }, wait)
    // }

    // function handleKeyUp() {
    //     searchNews()
    // }

    // function handleSearchParams(event: string) {
    //     setSubject(event);
    //     setTitle(event);
    // }

    return (
        <>
            <NextSeo
                title="JJM - Notas de Falecimento"
            />
            <div id={styles.pageReports} className="container">
                <PageHeader title="Notas de Falecimento" backLink="reports">
                    <FaBars
                        color="white"
                        size={50}
                        onClick={handleSidebar}
                        className={styles.openSidebar}
                    />
                </PageHeader>

                <MyMenu flag={visible}>
                    <main className={styles.reportMain}>
                        {Object.keys(reports).length !== 0 ? reports.map((report: Report) => {
                            return <ReportItem key={report._id} report={report} />
                        }) : <><h1>Nada encontrado... <br /><br />Clique novamente no Buscar para voltar</h1>
                                <h1>Nada encontrado... <br /><br />Clique novamente no Buscar para voltar</h1></>}

                    </main>
                    <div className={styles.pageButtonGroup}>
                        <button
                            disabled={page === 1 || flag === true}
                            onClick={prevPage}
                            className={styles.buttonPrev}
                        >
                            <FiArrowLeft size={30} />
                        Anterior
          </button>
                        {page === totalPages ? (
                            <GiOmega size={30} />
                        ) : page === 1 ? (
                            <GiPocketWatch size={30} />
                        ) : (
                                    <GiScrollUnfurled size={30} />
                                )}
                        <button
                            disabled={page === totalPages || flag === true}
                            onClick={nextPage}
                            className={styles.buttonNext}
                        >
                            Próximo
                        <FiArrowRight size={30} />
                        </button>
                    </div>
                </MyMenu>

                <Partners />

                <PageFooter />
            </div>
        </>
    )
}

export default DeathReports
