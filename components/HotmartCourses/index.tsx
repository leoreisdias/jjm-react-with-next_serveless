import React, { useState } from 'react';

import styles from './hotmartcourses.module.css';

interface hotmartCoursesProps {
    randomNumber: number
}

const HotmartCourses: React.FC<hotmartCoursesProps> = ({ randomNumber }) => {
    const [arrayOfCourses, setArrayOfCourses] = useState([
        {
            title: "Matriculas Abertas para Curso Online de Excel Expert!",
            description: "Aprenda a desenvolver Planilhas, Gráficos, Modelos de Orçamento e muito mais. <br />São 7 Módulos / 20 Aulas desde funções básicas à orçamentos avançados! <br /><br /> Com emissão de Certificado de 10 Horas!<br /><br /><strong>Preço:</strong> PROMOCIONAL DE R$149,99 POR <h2>R$39,99*!</h2><br /><br />*Taxa única, sem mensalidades!",
            image: "https://imagizer.imageshack.com/img923/269/fsLyKX.png",
            link: "https://go.hotmart.com/X41592362B",
            linkDesc: "Adquira o Curso Aqui"
        },
        {
            title: "Aprenda Como Criar e Construir Um Perfil Profissional de Respeito!",
            description: "Crie Um Perfil Relevante Para Seu Público <br />Descubra O Melhor Conteúdo Para Seus Seguidores <br /> Aprenda Na Prática Como Vender Muito Pelo Instagram <br /> Ganhe Seguidores No Piloto Automático<br />Suporte Individual e Personalizado<br /><br />Hoje por apenas <h2>11x de R$10,40</h2>",
            image: "https://cursos.dankicode.com/app/Views/public/mkt/instagram-negocios/images/logoinstagram.png",
            link: "https://go.hotmart.com/E41592195S",
            linkDesc: "Quero um perfil profissional!"
        },
        {
            title: "Aprenda como Viver de Negócios Online!",
            video: "https://www.youtube.com/embed/O9iNyPGwWdY",
            image: "https://i.imgur.com/wzMLg4d.png",
            link: "https://go.hotmart.com/H41592141U",
            linkDesc: "Quero aprender a lucrar online!"
        },
        {
            title: "Desenvolva jogos com Game Maker | Curso Completo",
            video: "https://www.youtube.com/embed/ONJXsPj0gUs",
            image: "https://cursos.dankicode.com/app/Views/public/mkt/gamemaker/img/logo-curso.png",
            link: "https://go.hotmart.com/R41592125E",
            linkDesc: "Já quero aprender!"
        },
        {
            title: "Aprenda Unity do Zero ao Profissional",
            video: "https://www.youtube.com/embed/912vjXfBNhc",
            image: "https://cursos.dankicode.com/app/Views/public/images/uploads/cursos/5ec406acaf250.png",
            link: "https://go.hotmart.com/U41619120C",
            linkDesc: "Quero essa jornada!"
        },
        {
            title: "Aprenda a Criar e Programar Jogos Completos em 2D e 3D!",
            video: "https://www.youtube.com/embed/hJ7tyhuGw-g",
            image: "https://cursos.dankicode.com/afiliados-content/games-banners/6.jpg",
            link: "https://go.hotmart.com/U41576838S",
            linkDesc: "Quero criar meus próprios jogos!"
        },
        {
            title: "Crie seus próprios jogos 2D e 3D nesse curso COMPLETO do Zero!",
            video: "https://www.youtube.com/embed/JR27tqd1R-4",
            image: "https://cursos.dankicode.com/afiliados-content/games-banners/4.jpg",
            link: "https://go.hotmart.com/U41576838S",
            linkDesc: "Quero criar meus próprios jogos!"
        },
        {
            title: "Torne-se um Desenvolvedor de Jogos! Não precisa de experiência com programação!",
            video: "https://www.youtube.com/embed/s3qdC0RPKHw",
            image: "https://cursos.dankicode.com/afiliados-content/games-banners/2.jpg",
            link: "https://go.hotmart.com/U41576838S",
            linkDesc: "Quero criar meus próprios jogos!"
        },
        {
            title: "Descubra como você vai se tornar um(a) Desenvolvedor(a) Full-Stack, e aprender como Faturar Alto em um dos Mercados mais Lucrativos da Atualidade!",
            video: "https://www.youtube.com/embed/gpe6AN_Hgts",
            image: "https://cursos.dankicode.com/afiliados-content/fs-banners/08.jpg",
            link: "https://go.hotmart.com/U41576837U",
            linkDesc: "Quero entrar nesse mercado!"
        },
        {
            title: "Domine as Tecnologias mais Atuais e Poderosas! E crie seus próprios projetos ou lucre com o que aprender!",
            video: "https://www.youtube.com/embed/SmPEBUwk9Lw",
            image: "https://cursos.dankicode.com/afiliados-content/fs-banners/10.png",
            link: "https://go.hotmart.com/U41576837U",
            linkDesc: "Saber Mais da Oportunidade!"
        },
        {
            title: "Aprenda a criar seu próprio site como JJM ou melhor! Saber Desenvolver Full-Stack é o caminho!",
            video: "https://www.youtube.com/embed/SmPEBUwk9Lw",
            image: "https://cursos.dankicode.com/afiliados-content/fs-banners/06.jpg",
            link: "https://go.hotmart.com/U41576837U",
            linkDesc: "Aproveitar Promoção!"
        },
    ])

    return (<>
        <legend className={styles.sectionTitle}>Oportunidades pra você em PROMOÇÃO!</legend>
        <fieldset className={styles.partnersVideo}>

            <legend className={styles.legendPartner}>
                <a href={arrayOfCourses[randomNumber].link} rel="noopener noreferrer nofollow" target="_blank">
                    {arrayOfCourses[randomNumber].title}
                </a>
            </legend>

            <div className={styles.imgText}>
                <a href={arrayOfCourses[randomNumber].link} rel="noopener noreferrer nofollow" target="_blank">
                    <img className={styles.imagePartner} src={arrayOfCourses[randomNumber].image} />
                </a>
                <span>
                    {arrayOfCourses[randomNumber].description ?
                        <p
                            dangerouslySetInnerHTML={{
                                __html: arrayOfCourses[randomNumber].description
                            }}
                            className={styles.desc}
                        /> : <iframe
                            title="video"
                            frameBorder="0"
                            allowFullScreen
                            className={styles.commercial}

                            src={arrayOfCourses[randomNumber].video}></iframe>}
                    <a href={arrayOfCourses[randomNumber].link} target="_blank"
                        rel="noopener noreferrer nofollow" className={styles.link}>
                        {arrayOfCourses[randomNumber].linkDesc}
                    </a>
                </span>


            </div>

            <br />

        </fieldset></>)
        ;
}

export default HotmartCourses;