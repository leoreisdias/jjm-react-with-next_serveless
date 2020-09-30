/* eslint-disable prettier/prettier */
/* eslint-disable indent */

import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaArrowCircleUp, FaFacebookSquare } from 'react-icons/fa'

import styles from './pagefooter.module.css'

function goUp() {
    window.scrollTo(0, 0)
}

const PageFooter: React.FC = () => {
    return (
        <span>
            <iframe
                src="//widget.horoscopovirtual.com.br/horoscopo?background=E6E6F0&amp;color=585ca9&amp;border=E6E6F0&amp;text=585ca9&amp;font=roboto"
                className={styles.horoscopoIframe}
                title="horoscopo"
            >

            </iframe>
            <div className={styles.goUp}>
                <FaArrowCircleUp size={50} color="#6842C2" onClick={goUp} className={styles.iconUp} /><br />
                <p onClick={goUp}>Voltar ao Topo</p>

            </div>

            <footer className={styles.pageFooter} >
                <div className={styles.footerContent}>
                    <div className={styles.contact}>
                        <p>Feito por Leonardo R. Dias<br />
                            <span><strong>Contatos:</strong> leonardord99@gmail.com</span>
                        </p>
                        <a href="https://github.com/leoreisdias" target="_blank" rel="noopener noreferrer">
                            <AiFillGithub size={30} color="black" />
                        </a>
                        <a href="https://www.linkedin.com/in/leonardord99/" target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin size={30} color="#342566" />
                        </a>

                    </div>
                    <p><strong> Contatos JJM</strong><br />
                        <span><strong>Email:</strong>  jornaljotamaria@gmail.com</span><br />
                        <a href="https://www.facebook.com/jornaljotamaria" target="_blank" rel="noopener noreferrer">
                            <FaFacebookSquare color="#0000ff" size={20} className={styles.icon} />
                            Nossa Página
                        </a>

                    </p>
                    <div
                        className={styles.fbPage}
                        data-href="https://www.facebook.com/jornaljotamaria/"
                        data-tabs="timeline"
                        data-width="300"
                        data-height="200"
                        data-small-header="false"
                        data-adapt-container-width="false"
                        data-hide-cover="false"
                        data-show-facepile="true"
                    >
                        <blockquote
                            cite="https://www.facebook.com/jornaljotamaria/"
                            className="fb-xfbml-parse-ignore"
                        >
                            <a
                                href="https://www.facebook.com/jornaljotamaria/">
                                JJM - Jornal Jota Maria
                                        </a>
                        </blockquote>
                    </div>
                </div>
                <p className={styles.copyright}>© 2020 Leonardo R. Dias All Rights Reserved</p>

                <div>
                    <img src='/sonic.gif' alt="Gif Animado" />
                </div>
            </footer >
        </span >
    )
}

export default PageFooter
