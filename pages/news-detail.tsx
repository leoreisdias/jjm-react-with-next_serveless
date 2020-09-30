/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import DotLoader from 'react-spinners/DotLoader'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import { FaBars, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa'

import { News } from '../components/NewsItem'
import PageFooter from '../components/PageFooter'
import PageHeader from '../components/PageHeader'
import Partners from '../components/Partners'

import styles from '../styles/newsdetails.module.css'

import api from '../services/api'

import MyMenu from '../components/MyMenu'
import Link from 'next/link'
import PartnersVideo from '../components/PartnersVideo'
import HotmartCourses from '../components/HotmartCourses'


NewsDetails.getInitialProps = async ({ query }) => {
    const response = await api.get('/detail', {
        params: {
            id: query.id
        }
    });
    const news = await response.data.news;
    return { news }
};

function NewsDetails({ news }) {
    const router = useRouter()
    const [visible, setVisible] = React.useState(false)
    const [relatedNews, setRelatedNews] = useState([])
    const { id } = router.query
    const [fullurl, setFullUrl] = useState('');


    useEffect(() => {
        const subjects = news.subjects.join(', ')
        const loadRelated = async () => {
            const response = await api.get('/search', {
                params: {
                    subjects,
                }
            })
            const responseReverse = response.data.news.reverse()
            setRelatedNews(responseReverse);
        }
        loadRelated();
        setFullUrl(`https://www.jornaljotamaria.com.br/news-detail?id=${id}`)
    }, [])

    function handleSidebar() {
        if (visible === false)
            setVisible(true)
        else {
            setVisible(false)
        }
    }

    return news ? (
        <>
            <NextSeo
                title={news.title}
                description={news.summary}
                openGraph={{
                    url: fullurl,
                    title: news.title,
                    description: news.summary,
                    images: [
                        {
                            url: news.imageURL + '?fit=1280%2C720&ssl=1',
                            width: 900,
                            height: 800,
                            alt: 'Imagem da Materia'
                        }
                    ],
                    site_name: 'Jornal Jota Maria'
                }}
            />
            <div
                id={styles.pageNewsDetails}
                className="container"
            >

                <PageHeader title={news.title} backLink="news">
                    <FaBars
                        className={styles.openSidebar}
                        color="white"
                        size={50}
                        onClick={handleSidebar}
                    />
                </PageHeader>

                <MyMenu flag={visible}>
                    <main className={styles.newsdetailmain}>
                        <article className={styles.newsDetail}>
                            <header>
                                <img src={news.imageURL} alt="Materia Detalhada" />
                                <span
                                    className={styles.summary}
                                    dangerouslySetInnerHTML={{
                                        __html: news.summary
                                    }}
                                />
                            </header>

                            {news.description
                                ? news.description.split('##').map(item => {
                                    return (
                                        <span
                                            className={styles.description}
                                            dangerouslySetInnerHTML={{
                                                __html: item
                                            }}
                                            key={item}
                                        />
                                    )
                                })
                                : ''}
                            <br />
                            {news.webImageOne ? (
                                <div className={styles.altImages}>
                                    <img src={news.webImageOne} alt="altImage1" />
                                    {news.webImageTwo ? (
                                        <img
                                            src={news.webImageTwo}
                                            alt="altImage2"
                                        />
                                    ) : (
                                            ''
                                        )}
                                </div>
                            ) : (
                                    ''
                                )}
                            {news.video_url ? (
                                <>
                                    <div className={styles.diviser}></div>
                                    <div className={styles.videoYoutube}>
                                        <legend>Video/Reportagem</legend>

                                        <iframe
                                            title="video"
                                            frameBorder="0"
                                            allowFullScreen
                                            className="video_url"
                                            src={
                                                news.video_url
                                                    .replace(/watch\?v=/i, 'embed/')
                                                    .split('&')[0]
                                            }
                                        ></iframe>
                                    </div>{' '}
                                </>
                            ) : (
                                    ''
                                )}
                            {news.facebook_url ? (
                                <>
                                    <div className={styles.diviser}></div>
                                    <div className={styles.videoFacebook}>
                                        <legend>Video/Reportagem</legend>

                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: news.facebook_url
                                            }}
                                        />
                                    </div>{' '}
                                </>
                            ) : (
                                    ''
                                )}

                            <div className={styles.diviser}></div>
                            {news.editorial ? (
                                <>
                                    <legend className={styles.legendEditorial}>
                                        Editorial | Opinião
                                </legend>
                                    {news.editorial.split('##').map(item => {
                                        return (
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: item
                                                }}
                                                key={item}
                                                className={styles.editorial}
                                            />
                                        )
                                    })}{' '}
                                </>
                            ) : (
                                    ''
                                )}

                            <HotmartCourses randomNumber={Math.floor(Math.random() * 5)} />
                            <div className={styles.diviser}></div>
                            <PartnersVideo randomNumber={Math.floor(Math.random() * 7)} />


                            <footer className={styles.footerNews}>
                                <p>
                                    <span className={styles.info}>Autor(a):</span>{' '}
                                    {news.author} <br />
                                    <br />
                                    {news.source ? 'Fonte: ' + news.source : 'JJM'}
                                    <br />
                                    <br />
                              Data da Publicação
                                    <strong>{`${news.date.substring(
                                        8,
                                        10
                                    )}/${news.date.substring(
                                        5,
                                        7
                                    )}/${news.date.substring(0, 4)}`}
                                    </strong>
                                    <br />
                                </p>
                            </footer>
                            <div
                                className={styles.shareFacebook}
                                data-href={fullurl}
                            >
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${fullurl}&amp;src=sdkpreparse`}
                                    className="fb-xfbml-parse-ignore"
                                >
                                    <FaFacebookSquare
                                        color="white"
                                        size={24}
                                        className={styles.icon}
                                    />
                                  Compartilhar
              </a>
                            </div>

                            <div className={styles.whatsappShare}>
                                <a
                                    href={`https://api.whatsapp.com/send?text=${news.title} - ${fullurl}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaWhatsapp
                                        size={25}
                                        className={styles.iconWpp}
                                        color="white"
                                    />
                                  Compartilhar
              </a>
                            </div>
                            <div
                                className="fb-comments"
                                data-href={fullurl}
                                data-numposts="5"
                                data-width="400"
                                data-mobile={true}
                            ></div>
                            <br />
                            <br />
                            <legend className={styles.legendNewsrelated}>
                                Matérias Relacionadas
                            </legend>
                            <div className={styles.relatedNews}>
                                {Object.keys(relatedNews).length !== 0
                                    ? relatedNews.map(
                                        (item: News, index: number) => {
                                            return item._id !== id &&
                                                index < 5 ? (
                                                    <div
                                                        key={item._id}
                                                        className={styles.relatedItem}
                                                    >
                                                        <Link
                                                            href={{ pathname: '/news-detail', query: { id: item._id } }}
                                                        >
                                                            <a>
                                                                <img
                                                                    src={item.imageURL}
                                                                    alt="Materia A"
                                                                    className={
                                                                        styles.imgRelated
                                                                    }
                                                                />
                                                                <div>
                                                                    <strong>
                                                                        {item.title}
                                                                    </strong>
                                                                    <p>{`${item.date.substring(
                                                                        8,
                                                                        10
                                                                    )}/${item.date.substring(
                                                                        5,
                                                                        7
                                                                    )}/${item.date.substring(
                                                                        0,
                                                                        4
                                                                    )}`}</p>
                                                                </div>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                ) : (
                                                    ''
                                                )
                                        }
                                    )
                                    : ''}
                            </div>
                        </article>
                    </main>
                </MyMenu>

                <Partners />

                <PageFooter />
            </div>
        </>
    ) : (
            <DotLoader color={'#8257E5'} size={150} css={'margin: 0 auto;'} />
        )
}

export default NewsDetails
