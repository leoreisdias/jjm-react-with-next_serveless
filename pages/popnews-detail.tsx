import React, { useEffect, useState } from 'react';
import DotLoader from 'react-spinners/DotLoader'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo';

import { FaBars, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa'

import { PopNews } from '../components/PopNewsItem';
import PageFooter from '../components/PageFooter';
import PageHeader from '../components/PageHeader';
import Partners from '../components/Partners';

import styles from '../styles/popnewsdetail.module.css'

import api from '../services/api';

import MyMenu from '../components/MyMenu';
import Link from 'next/link';
import PartnersVideo from '../components/PartnersVideo';
import HotmartCourses from '../components/HotmartCourses';



PopNewsDetails.getInitialProps = async ({ query }) => {
    const response = await api.get('/popnewsdetail', {
        params: {
            id: query.id
        }
    });
    const popnews = await response.data.popnews;
    return { popnews }
};


function PopNewsDetails({ popnews }) {

    const router = useRouter()
    const [visible, setVisible] = React.useState(false)
    const [relatedPopNews, setRelatedPopNews] = useState([]);
    const { id } = router.query
    const [fullurl, setFullUrl] = useState('');

    useEffect(() => {
        const subjects = popnews.subjects.join(', ')
        const loadRelated = async () => {
            const response = await api.get('/searchpopnews', {
                params: {
                    subjects,
                }
            })
            const responseReverse = response.data.popnews.reverse()
            setRelatedPopNews(responseReverse);
        }
        loadRelated();

        setFullUrl(`https://www.jornaljotamaria.com.br/popnews-detail?id=${id}`)
    }, [])

    function handleSidebar() {
        if (visible === false)
            setVisible(true);
        else
            setVisible(false)
    }

    return popnews ? (
        <>
            <NextSeo
                title={popnews.title}
                description={popnews.summary}
                openGraph={{
                    url: fullurl,
                    title: popnews.title,
                    description: popnews.summary,
                    images: [
                        {
                            url: popnews.imageURL + '?fit=1280%2C720&ssl=1',
                            width: 900,
                            height: 800,
                            alt: 'Imagem da Materia'
                        }
                    ],
                    site_name: 'Jornal Jota Maria'
                }}
            />
            <div id={styles.pagePopnewsDetails} className="container" >

                <PageHeader title={popnews.title} backLink="popnews" >


                    <FaBars className={styles.openSidebar} color="white" size={50} onClick={handleSidebar} />

                </PageHeader>

                <MyMenu flag={visible}>
                    <main className={styles.popdetailmain}>
                        <article className={styles.popnewsDetail}>
                            <header>

                                <img src={popnews.imageURL} alt="Materia Detalhada" /> :


                            <span className={styles.summary} dangerouslySetInnerHTML={{
                                    __html: popnews.summary
                                }} />

                            </header>

                            {popnews.description ? popnews.description.split('##').map(item => {
                                return <span
                                    className={styles.description}
                                    dangerouslySetInnerHTML={{
                                        __html: item
                                    }}
                                    key={item} />
                            }) : ''}
                            <br />


                            {popnews.altImageOne ?
                                <div className={styles.altImages}>
                                    <img src={popnews.altImageOne} alt="altImage1" />

                                    {popnews.altImageTwo ?
                                        <img src={popnews.altImageTwo} alt="altImage1" /> : ''}
                                </div> : ''
                            }
                            {
                                popnews.video_url ?
                                    <>
                                        <div className={styles.diviser}></div>
                                        <div className={styles.video_youtube}>
                                            <legend>Video/Reportagem</legend>

                                            <iframe
                                                title="video"
                                                frameBorder="0"
                                                allowFullScreen
                                                className="video_url"

                                                src={popnews.video_url.replace(/watch\?v=/i, 'embed/').split('&')[0]}></iframe>
                                        </div> </> : ''
                            }
                            {
                                popnews.facebook_url ?
                                    <>
                                        <div className="diviser"></div>
                                        <div className={styles.video_facebook}>
                                            <legend>Video/Reportagem</legend>

                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: popnews.facebook_url
                                                }}
                                            />
                                        </div> </> : ''
                            }

                            <div className={styles.diviser}></div>


                            {popnews.editorial ?
                                <>
                                    <legend className={styles.legendEditorial}>Editorial | Opinião</legend>
                                    {popnews.editorial.split('##').map(item => {
                                        return <p
                                            dangerouslySetInnerHTML={{
                                                __html: item
                                            }}
                                            key={item} className={styles.editorial} />
                                    })} </> : ''}

                            <HotmartCourses randomNumber={Math.floor(Math.random() * 11)} />
                            <div className={styles.diviser}></div>
                            <PartnersVideo randomNumber={Math.floor(Math.random() * 7)} />

                            <footer className={styles.footerPopnews}>
                                <p>
                                    <span className={styles.info}>Autor(a):</span> {popnews.author} <br /><br /><br />
                                    {popnews.source ? 'Fonte: ' + popnews.source : 'JJM'}<br /><br />
                                Data da Publicação <br />
                                    <strong>{`${popnews.date.substring(8, 10)}/${popnews.date.substring(5, 7)}/${popnews.date.substring(0, 4)}`}</strong>
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
                                    Compartilhar
                                </a>
                            </div>
                            <div className={styles.whatsappShare}>
                                <a
                                    href={`https://api.whatsapp.com/send?text=${popnews.title} - ${fullurl}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaWhatsapp size={25} className={styles.iconWpp} color="white" />
                                    Compartilhar
                            </a>
                            </div>

                            <div
                                className="fb-comments"
                                data-href={fullurl}
                                data-numposts="5"
                                data-width="500"
                                data-mobile={true}
                            ></div>
                            <br /><br />
                            <legend className={styles.legendPoprelated}>Matérias Relacionadas</legend>

                            <div className={styles.relatedPopNews}>
                                {Object.keys(relatedPopNews).length !== 0 ? relatedPopNews.map((item: PopNews, index: number) => {
                                    return item._id !== id && index < 5 ?
                                        (<div key={item._id} className={styles.relatedItem}>
                                            <Link
                                                href={{ pathname: '/popnews-detail', query: { id: item._id } }}

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

export default PopNewsDetails;
