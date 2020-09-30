/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import DotLoader from 'react-spinners/DotLoader'
import { NextSeo } from 'next-seo';

import { FaBars, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa'

import PageFooter from '../components/PageFooter'
import PageHeader from '../components/PageHeader'
import Partners from '../components/Partners'

import styles from '../styles/reportsdetail.module.css'

import api from '../services/api'

import MyMenu from '../components/MyMenu'
import HotmartCourses from '../components/HotmartCourses';

ReportDetails.getInitialProps = async ({ query }) => {
    const response = await api.get('/reportDetail', {
        params: {
            id: query.id
        }
    });
    const reports = await response.data.reports;
    return { reports }
};


function ReportDetails({ reports }) {
    const router = useRouter()
    const [visible, setVisible] = React.useState(false)
    const { id } = router.query
    const [fullurl, setFullUrl] = useState('');

    useEffect(() => {
        setFullUrl(`https://www.jornaljotamaria.com.br/reports-detail?id=${id}`)
    }, [id])

    function handleSidebar() {
        if (visible === false) { setVisible(true) } else { setVisible(false) }
    }

    return reports ? (
        <>
            <NextSeo
                title={reports.title}
                description={reports.name}
                openGraph={{
                    url: fullurl,
                    title: reports.title,
                    description: reports.name,
                    images: [
                        {
                            url: 'https://jjm-upload.s3.amazonaws.com/Parceiros/BannerMetaTagsNotasFalecimento.png?fit=1280%2C720&ssl=1',
                            width: 900,
                            height: 800,
                            alt: 'Imagem da Materia'
                        }
                    ],
                    site_name: 'Jornal Jota Maria'
                }}
            />
            <div id={styles.pageReportDetails} className="container">

                <PageHeader title={reports.title} backLink="reports" >

                    <FaBars color="white" size={50} onClick={handleSidebar} className={styles.openSidebar} />

                </PageHeader>

                <MyMenu flag={visible}>
                    <main className={styles.reportdetailmain}>
                        <article className={styles.reportsDetail}>
                            <header>
                                <img src="/BannerFuneraria.png" alt="Report Detalhado" />
                                <span className={styles.summary}>{reports.name}</span>
                            </header>

                            {reports.description ? reports.description.split('##').map(item => {
                                return <p
                                    className={styles.description}

                                    dangerouslySetInnerHTML={{
                                        __html: item
                                    }}
                                    key={item} />
                            }) : ''}
                            <br />

                            {
                                reports.imageURL
                                    ? <div className={styles.lutoImages}>
                                        <img src={reports.imageURL} alt="Imagem Falecido" />
                                    </div>
                                    : ''
                            }
                            <div className={styles.diviser}></div>

                            <footer className={styles.footerReport}>
                                <p>
                                    Fonte: <span className={styles.info}>Funerária São Dimas </span> <br /><br /><br /><br />
                                                Data da Publicação
                                <strong>{`${reports.date.substring(8, 10)}/${reports.date.substring(5, 7)}/${reports.date.substring(0, 4)}`}</strong>
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
                                    href={`https://api.whatsapp.com/send?text=${reports.title} - ${fullurl}`}
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
                            <HotmartCourses randomNumber={Math.floor(Math.random() * 4)} />

                        </article>
                    </main>

                </MyMenu>

                <Partners />

                <PageFooter />

            </div >
        </>
    ) : (<DotLoader color={'#8257E5'} size={150} css={'margin: 0 auto;'} />)
}

export default ReportDetails
