/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react'

import styles from './newsitem.module.css'
import Link from 'next/link'

export interface News {
    _id: string;
    imageURL: string;
    title: string;
    description: string;
    date: string;
    subjects: [string];
    video_url: string;
    facebook_url: string;
    webImageOne: string;
    webImageTwo: string;
    editorial: string;
    author: string;
    source: string;
    summary: string;
}

interface NewsItemProps {
    news: News,
}

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
    const year = news.date.substring(0, 4)
    const month = news.date.substring(5, 7)
    const day = news.date.substring(8, 10)

    return (
        <article className={styles.newsitem}>
            <header>
                <Link href={{ pathname: '/news-detail', query: { id: news._id } }}>
                    <a target="_blank">
                        <img src={news.imageURL} alt="Materia A" />

                        <div>
                            <strong>{news.title}</strong>
                            <br />
                        </div>
                    </a>
                </Link>
            </header>

            {news.summary.split('##').map(item => {
                return <p
                    dangerouslySetInnerHTML={{
                        __html: item
                    }}
                    key={item} />
            })}
            <footer>
                <p>
                    Data da Publicação
                <strong>{`${day}/${month}/${year}`}</strong>
                </p>

                <Link href={{ pathname: '/news-detail', query: { id: news._id } }}>
                    <a target="_blank">
                        <button type="button">
                            <img src="/warning.svg" alt="Mais informações" />
                        Mais informações
                </button>
                    </a>
                </Link>
            </footer>
        </article>
    )
}

export default NewsItem
