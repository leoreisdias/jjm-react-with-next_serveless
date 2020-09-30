/* eslint-disable prettier/prettier */
/* eslint-disable indent */

import React from 'react'

import styles from './pageheader.module.css'

interface PageHeaderProps {
    title: string;
    description?: string;
    backLink: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, backLink, children }) => {
    return (
        <header className={styles.pageHeader} id={
            backLink === "dashboard" ? styles.dashboard :
                backLink === "sports" ? styles.sportBoard :
                    backLink === "reports" ? styles.reportsBoard :
                        backLink === "news" ? styles.newsBoard :
                            backLink === "popnews" ? styles.popBoard :
                                backLink === "options" ? styles.optionBoard : ''
        }>
            <div className={styles.JJM}>
                <img src='/logo.png' alt="" />
            </div>
            <div className={styles.headerContent}>

                <strong>{title}</strong>
                {children}
            </div>

        </header >

    )
}

export default PageHeader
