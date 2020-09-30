/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react'

import styles from './partners.module.css'
import ModalExampleContentImage from '../Modal'

const Partners: React.FC = () => {
    return (
        <fieldset className={styles.partnersContainer}>
            <legend>Parceiros</legend>
            <ul className={styles.ulPartners}>
                <ModalExampleContentImage flag="milbr">
                    <span className={styles.Link1} >
                        <li className={styles.ImagePartner_1}>

                        </li>
                    </span>
                </ModalExampleContentImage>

                <ModalExampleContentImage flag="thyda">
                    <span className={styles.Link1} >
                        <li className={styles.ImagePartner_2}>

                        </li>
                    </span>
                </ModalExampleContentImage>

                <ModalExampleContentImage flag="frutibom">
                    <span className={styles.Link1}>

                        <li className={styles.ImagePartner_3}>

                        </li>
                    </span>
                </ModalExampleContentImage>

                <ModalExampleContentImage flag="funeraria">
                    <span className={styles.Link1} >
                        <li className={styles.ImagePartner_4}>

                        </li>
                    </span>
                </ModalExampleContentImage>

                <ModalExampleContentImage flag="petshop">
                    <span className={styles.Link1} >
                        <li className={styles.ImagePartner_5}>

                        </li>
                    </span>
                </ModalExampleContentImage>

                <ModalExampleContentImage flag="pamonharia">
                    <span className={styles.Link1}>

                        <li className={styles.ImagePartner_6}>

                        </li>
                    </span>
                </ModalExampleContentImage>

                <ModalExampleContentImage flag="raissa">
                    <span className={styles.Link1}>

                        <li className={styles.ImagePartner_7}>

                        </li>
                    </span>
                </ModalExampleContentImage>

                <ModalExampleContentImage flag="loterica">
                    <span className={styles.Link1}>

                        <li className={styles.ImagePartner_8}>

                        </li>
                    </span>
                </ModalExampleContentImage>

            </ul>
        </fieldset>
    )
}

export default Partners
