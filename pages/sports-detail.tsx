import React, { useEffect, useState } from 'react';
import DotLoader from 'react-spinners/DotLoader'
import { useRouter } from 'next/router'

import { FaBars, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa'

import { Sport } from '../components/SportItem';
import PageFooter from '../components/PageFooter';
import PageHeader from '../components/PageHeader';
import Partners from '../components/Partners';
import Link from 'next/link';


import styles from '../styles/sportsdetail.module.css'

import api from '../services/api';

import MyMenu from '../components/MyMenu';
import { NextSeo } from 'next-seo';
import PartnersVideo from '../components/PartnersVideo';
import HotmartCourses from '../components/HotmartCourses';

SportDetail.getInitialProps = async ({ query }) => {
    const response = await api.get('/sportsDetail', {
        params: {
            id: query.id
        }
    });
    const sports = await response.data.sports;
    return { sports }
};


function SportDetail({ sports }) {
    const router = useRouter()
    const [visible, setVisible] = React.useState(false)
    const [relatedNews, setRelatedNews] = useState([]);
    const { id } = router.query;
    const [fullurl, setFullUrl] = useState('');

    useEffect(() => {
        const subjects = sports.subjects.join(', ')
        const loadRelated = async () => {
            const response = await api.get('/searchSport', {
                params: {
                    subjects,
                }
            })
            const responseReverse = response.data.sports.reverse()
            setRelatedNews(responseReverse);
        }
        loadRelated();
        setFullUrl(`https://www.jornaljotamaria.com.br/sports-detail?id=${id}`)
    }, [])

    function handleSidebar() {
        if (visible === false)
            setVisible(true);
        else
            setVisible(false)
    }

    return sports ? (
        <>
            <NextSeo
                title={sports.title}
                description={sports.summary}
                openGraph={{
                    url: fullurl,
                    title: sports.title,
                    description: sports.summary,
                    images: [
                        {
                            url: sports.imageURL + '?fit=1280%2C720&ssl=1',
                            width: 900,
                            height: 800,
                            alt: 'Imagem da Materia'
                        }
                    ],
                    site_name: 'Jornal Jota Maria'
                }}
            />
            <div id={styles.pageSportDetails} className="container">

                <PageHeader title={sports.title} backLink="sports" >

                    <FaBars color="white" size={50} onClick={handleSidebar} className={styles.openSidebar} />

                </PageHeader>

                <MyMenu flag={visible}>
                    <main className={styles.sportdetailmain}>
                        <article className={styles.sportDetail}>
                            <header>
                                <img src={sports.imageURL} alt="Materia Detalhada" />
                                <div>
                                    <span className={styles.summary} dangerouslySetInnerHTML={{
                                        __html: sports.summary
                                    }} />
                                </div>
                            </header>

                            {sports.description ? sports.description.split('##').map(item => {
                                return <span
                                    className={styles.description}

                                    dangerouslySetInnerHTML={{
                                        __html: item
                                    }}
                                    key={item} />
                            }) : ''}
                            <br />
                            {
                                sports.webImageOne ?
                                    <div className={styles.altImages}>
                                        <img src={sports.webImageOne} alt="altImage1" />
                                        {
                                            sports.webImageTwo ?
                                                <img src={sports.webImageTwo} alt="altImage2" /> : ''
                                        }
                                    </div> : ''
                            }
                            {
                                sports.video_url ?
                                    <>
                                        <div className={styles.diviser}></div>
                                        <div className={styles.video_youtube}>
                                            <legend>Video/Reportagem</legend>

                                            <iframe
                                                title="video"
                                                frameBorder="0"
                                                allowFullScreen
                                                className="video_url"

                                                src={sports.video_url.replace(/watch\?v=/i, 'embed/').split('&')[0]}></iframe>
                                        </div> </> : ''
                            }
                            {
                                sports.facebook_url ?
                                    <>
                                        <div className={styles.diviser}></div>
                                        <div className={styles.video_facebook}>
                                            <legend>Video/Reportagem</legend>

                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: sports.facebook_url
                                                }}
                                            />
                                        </div> </> : ''
                            }

                            <div className={styles.diviser}></div>

                            {sports.editorial ?
                                <>
                                    <legend className={styles.legendEditorial}>Editorial | Opinião</legend>
                                    {sports.editorial.split('##').map(item => {
                                        return <p
                                            dangerouslySetInnerHTML={{
                                                __html: item
                                            }}
                                            key={item} className={styles.editorial} />
                                    })} </> : ''}

                            <HotmartCourses randomNumber={Math.floor(Math.random() * 11)} />
                            <div className={styles.diviser}></div>
                            <PartnersVideo randomNumber={Math.floor(Math.random() * 7)} />

                            <footer className={styles.footerSport}>
                                <p>
                                    <span className={styles.info}>Autor(a):</span> {sports.author} <br /><br />
                                    {sports.source ? 'Fonte: ' + sports.source : 'JJM'}<br /><br />

                                Data da Publicação
                                <strong>{`${sports.date.substring(8, 10)}/${sports.date.substring(5, 7)}/${sports.date.substring(0, 4)}`}</strong>
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
                                    <FaFacebookSquare color="white" size={24} className={styles.icon} />
                                    Compartilhe
                                </a>
                            </div>

                            <div className={styles.whatsappShare}>
                                <a
                                    href={`https://api.whatsapp.com/send?text=${sports.title} - ${fullurl}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaWhatsapp size={25} className={styles.iconWpp} color="white" />
                                    Compartilhe
                            </a>
                            </div>
                            <div
                                className="fb-comments"
                                data-href={fullurl}
                                data-numposts="5"
                                data-width="400"
                                data-mobile={true}
                            ></div>
                            <br /><br />
                            <legend className={styles.legendSportrelated}>Matérias Relacionadas</legend>
                            <div className={styles.relatedSport}>
                                {Object.keys(relatedNews).length !== 0 ? relatedNews.map((item: Sport, index: number) => {
                                    return item._id !== id && index < 5 ?
                                        (<div key={item._id} className={styles.relatedItem}>
                                            <Link
                                                href={{ pathname: '/sports-detail', query: { id: item._id } }}
                                            >
                                                <a>
                                                    <img src={item.imageURL} alt="Materia A" className={styles.imgRelated} />
                                                    <div>
                                                        <strong>{item.title}</strong>
                                                        <p>{`${item.date.substring(8, 10)}/${item.date.substring(5, 7)}/${item.date.substring(0, 4)}`}</p>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>)
                                        : ''
                                }) : ''}
                            </div>


                        </article>


                    </main>

                </MyMenu>

                <Partners />

                <PageFooter />

            </div >
        </>
    ) : (<DotLoader color={"#8257E5"} size={150} css={"margin: 0 auto;"} />)
}

export default SportDetail;
