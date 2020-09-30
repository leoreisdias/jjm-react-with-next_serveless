/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React, { useEffect } from 'react'
import styles from '../styles/landing.module.css'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

const Landing: React.FC = () => {
    return (<>
        <div id={styles.pageLanding}>
            <div id="page-landing-content" className="container">
                <div className={styles.logoContainer}>
                    <img src="/logo.png" alt="JJM" />
                    <h2>Jornal Jota Maria</h2>
                </div>

                <div className={styles.buttonsContainer}>
                    <Link href="/dashboard" >
                        <a className={styles.study}>
                            <img src="/study.svg" alt="Acessar" />
                        Acessar
                        </a>
                    </Link>
                </div>

                <span className={styles.totalConnections}>
                    O seu site de informações de Muzambinho e Região{' '}
                    <img src="/purple-heart.svg" alt="Coração Roxo" />
                </span>
            </div>
        </div>
    </>
    )
}

export default Landing
