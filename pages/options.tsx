import React, { useEffect } from 'react';
import { useRouter } from "next/router";


import styles from '../styles/options.module.css'

import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import Partners from '../components/Partners';

import MyMenu from '../components/MyMenu';
import { FaBars } from 'react-icons/fa';
import { FcNews } from 'react-icons/fc';
import { GiGamepad, GiDeadWood, GiSoccerBall } from 'react-icons/gi';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

function Options() {
    const router = useRouter();
    const [visible, setVisible] = React.useState(false)
    const [userName, setUserName] = React.useState('');

    useEffect(() => {
        const name = localStorage.getItem('name');
        setUserName(name);

    }, [])

    function handleSidebar() {
        if (visible === false)
            setVisible(true);
        else
            setVisible(false)
    }

    function goNewPost() {
        router.push('/news-post')
    }
    function goNewPopPost() {
        router.push('popnews-post')
    }
    function goReportPost() {
        router.push('/report-post')
    }
    function goSportPost() {
        router.push('/sports-post')
    }

    return (
        <>
            <NextSeo
                title="JJM - Notícias"
            />
            <div id={styles.pageOptions} className="container">
                <PageHeader
                    title={`Olá ${userName}`}
                    backLink="options"
                >
                    <FaBars className={styles.openSidebar} color="white" size={50} onClick={handleSidebar} />

                </PageHeader>



                <MyMenu flag={visible}>
                    <main className={styles.optionsMain}>
                        <div className={styles.optionsGrid}>
                            <span onClick={goNewPost}>
                                <div className={styles.optionNews}>
                                    <FcNews size={30} />
                                    <h1>Notícias</h1>
                                </div>
                            </span>

                            <span onClick={goNewPopPost}>
                                <div className={styles.optionPopNews}>
                                    <GiGamepad size={35} color="black" />
                                    <h1>Mundo POP</h1>
                                </div>
                            </span>

                            <span onClick={goSportPost}>
                                <div className={styles.optionSport}>
                                    <GiSoccerBall size={30} color="#E2F0F9" />
                                    <h1>Esportes</h1>
                                </div>
                            </span>

                            <span onClick={goReportPost}>
                                <div className={styles.optionReport}>
                                    <GiDeadWood size={30} color="black" />
                                    <h1>Notas de Falecimento</h1>
                                </div>
                            </span>

                        </div>

                    </main>



                </MyMenu>



                <Partners />

                <PageFooter />
            </div>
        </>
    )
}

export default Options;
