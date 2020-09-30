/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */

import React from 'react'

import styles from './sportitem.module.css'
import Link from 'next/link'

export interface Sport {
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

interface SportsItemProps {
    sports: Sport,
}

const NewsItem: React.FC<SportsItemProps> = ({ sports }) => {
    const year = sports.date.substring(0, 4)
    const month = sports.date.substring(5, 7)
    const day = sports.date.substring(8, 10)

    return (
        <article className={styles.sportsItem}>
            <header>
                <Link href={{ pathname: '/sports-detail', query: { id: sports._id } }}>
                    <a target="_blank">
                        <img src={sports.imageURL} alt="Materia A" />
                        <div>
                            <strong>{sports.title}</strong>
                            <br />
                        </div>
                    </a>
                </Link>

            </header>

            {sports.summary.split('##').map(item => {
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

                <Link href={{ pathname: '/sports-detail', query: { id: sports._id } }}>
                    <button type="button">
                        <img src="/warning.svg" alt="Mais informações" />
                        Mais informações
                </button>
                </Link>
            </footer>
        </article>
    )
}

export default NewsItem
