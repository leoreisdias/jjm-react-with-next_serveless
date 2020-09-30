/* eslint-disable prettier/prettier */
/* eslint-disable indent */

import React from 'react'

import styles from './reportitem.module.css'
import Link from 'next/link'

export interface Report {
    _id: string;
    imageURL: string;
    title: string;
    name: string;
    description: string;
    date: string;
}

interface ReportItemProps {
    report: Report,
}

const ReportItem: React.FC<ReportItemProps> = ({ report }) => {
    const year = report.date.substring(0, 4)
    const month = report.date.substring(5, 7)
    const day = report.date.substring(8, 10)

    return (

        <article className={styles.reportItem}>
            <header>
                <Link href={{ pathname: '/reports-detail', query: { id: report._id } }}>
                    <a target="_blank">
                        <img src={report.imageURL} alt="Materia" />
                        <div>
                            <strong className={styles.title}>{report.title}</strong>
                            <span>{report.name}</span>
                        </div>
                    </a>
                </Link>

            </header>
            <footer>
                <p>
                    Data da Nota
                    <strong>{`${day}/${month}/${year}`}</strong>
                </p>

                <Link href={{ pathname: '/reports-detail', query: { id: report._id } }}>
                    <button type="button">
                        <img src="/warning.svg" alt="Mais informações" />
                       Saiba Mais
                    </button>
                </Link>
            </footer>
        </article>
    )
}

export default ReportItem
