/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */

import React from 'react'

import styles from './popnews.module.css'
import Link from 'next/link'

export interface PopNews {
    _id: string;
    imageURL: string;
    title: string;
    description: string;
    date: string;
    subjects: [string];
    video_url: string;
    facebook_url: string;
    altImageOne: string;
    altImageTwo: string;
    editorial: string;
    author: string;
    source: string;
    summary: string;
}

interface PopNewsItemProps {
    popnews: PopNews,
}

const PopNewsItem: React.FC<PopNewsItemProps> = ({ popnews }) => {
    const year = popnews.date.substring(0, 4)
    const month = popnews.date.substring(5, 7)
    const day = popnews.date.substring(8, 10)

    return (
        <article className={styles.popnewsItem}>
            <header>
                <Link href={{ pathname: '/popnews-detail', query: { id: popnews._id } }}>
                    <a target="_blank">
                        <img src={popnews.imageURL} alt="Materia A" />
                        <div>
                            <strong>{popnews.title}</strong>
                            <br />
                        </div>
                    </a>
                </Link>
            </header>

            {popnews.summary.split('##').map(item => {
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

                <Link href={{ pathname: '/popnews-detail', query: { id: popnews._id } }}>
                    <button type="button">
                        <img src="/warning.svg" alt="Mais informações" />
                        Fique por dentro
                        </button>
                </Link>
            </footer>
        </article>
    )
}

export default PopNewsItem
