/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { PulseLoader, PropagateLoader } from 'react-spinners'
import { NextSeo } from 'next-seo';

import { FaBars } from 'react-icons/fa'

import PageHeader from '../components/PageHeader'
import NewsItem, { News } from '../components/NewsItem'
import PopNewsItem, { PopNews } from '../components/PopNewsItem'
import SportItem, { Sport } from '../components/SportItem'
import PageFooter from '../components/PageFooter'
import Partners from '../components/Partners'

import api from '../services/api'

import styles from '../styles/dashboard.module.css'

import MyMenu from '../components/MyMenu'
import WeatherForecast from '../components/WeatherForecast'
import CoffeePrices from '../components/CoffeePrices'
import HotmartCourses from '../components/HotmartCourses';

const Dashboard: React.FC = () => {
    const [news, setNews] = useState([])
    const [popnews, setPopNews] = useState([])
    const [sports, setSport] = useState([])
    const [visible, setVisible] = React.useState(false)

    useEffect(() => {
        const loadDatas = async () => {
            const responseNews = await api.get('/news?page=1')
            const responsePop = await api.get('/popnews?page=1')
            const responseSport = await api.get('/sports?page=1')
            setNews(responseNews.data.docs)
            setPopNews(responsePop.data.docs)
            setSport(responseSport.data.docs)
        }

        loadDatas()

    }, [])

    function handleSidebar() {
        if (visible === false) { setVisible(true) } else { setVisible(false) }
    }

    return news ? (<> <NextSeo
        title="Jornal Jota Maria"
        description="Confira todas as notícias aqui"
        openGraph={{
            url: "www.jornaljotamaria.com.br",
            title: "JJM - Jornal Jota Maria",
            description: "Na pura verdade",
            images: [
                {
                    url: 'https://i.imgur.com/Wi5Czwx.png?fit=1280%2C720&ssl=1',
                    width: 900,
                    height: 800,
                    alt: 'Imagem da Materia'
                }
            ],
            site_name: 'Jornal Jota Maria'
        }}
    />
        <div id={styles.pageDashboardLand} className="container" >

            <PageHeader
                title="JJM | Na pura verdade é isso"
                backLink="dashboard"
            >

                <FaBars color="white" size={50} onClick={handleSidebar} className={styles.openSidebar} />

            </PageHeader>

            <MyMenu flag={visible}>

                <main className={styles.dashboardMain}>
                    <div className={styles.newsArea}>
                        {Object.keys(news).length !== 0 ? news.map((news: News) => {
                            return <NewsItem key={news._id} news={news} />
                        }) : <PulseLoader color={'#8257E5'} size={60} css={'margin: 20rem auto;'} />}
                    </div>

                    <div className={styles.popnewsArea}>
                        {Object.keys(popnews).length !== 0 ? popnews.map((popnews: PopNews) => {
                            return <PopNewsItem key={popnews._id} popnews={popnews} />
                        }) : <PulseLoader color={'#8257E5'} size={60} css={'margin: 20rem auto;'} />}
                    </div>

                    <div className={styles.sportArea}>
                        {Object.keys(sports).length !== 0 ? sports.map((sports: Sport) => {
                            return <SportItem key={sports._id} sports={sports} />
                        }) : <PulseLoader color={'#8257E5'} size={60} css={'margin: 20rem auto;'} />}
                    </div>

                </main>

            </MyMenu>
            <br />
            <WeatherForecast />
            <br />
            <HotmartCourses randomNumber={Math.floor(Math.random() * 11)} />

            <br />
            <CoffeePrices />

            <Partners />
            <PageFooter />
        </div>
    </>
    ) : (<PropagateLoader color={'#8257E5'} size={150} css={'margin: 0 auto;'} />)
}

export default Dashboard
