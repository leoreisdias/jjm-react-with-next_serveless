import React, { useState } from 'react';

import styles from './partnersvideo.module.css';

interface partnersVideoProps {
    randomNumber: number;
}

const PartnersVideo: React.FC<partnersVideoProps> = ({ randomNumber }) => {
    const [arrayOfPartners, setArrayOfPartners] = useState([
        {
            title: "Fruti Bom",
            video: "https://www.youtube.com/embed/9YtIa3n8FCg",
            image: "https://jjm-upload.s3.amazonaws.com/Parceiros/Fruti.png",
            linkFacebook: "https://www.facebook.com/Sorveteria-Frutibom-171844579663784",
        },
        {
            title: "Loterica Sua Casa",
            video: "https://www.youtube.com/embed/qmFTklI9GHk",
            image: "https://jjm-upload.s3.amazonaws.com/Parceiros/Loterica.png",
            linkFacebook: "https://www.facebook.com/lotericasuacasa",
        },
        {
            title: "PetShop Bela Vista",
            video: "https://www.youtube.com/embed/uqI_5YNCNio",
            image: "https://jjm-upload.s3.amazonaws.com/Parceiros/PetShop.png",
            linkFacebook: "https://www.facebook.com/petbelavista",
        },
        {
            title: "Raissa Lazer e Estética",
            video: "https://www.youtube.com/embed/9fFUB8by3qI",
            image: "https://jjm-upload.s3.amazonaws.com/Parceiros/Raissa.png",
            linkFacebook: "https://www.facebook.com/raissalaserestetica",
        },
        {
            title: "Tyda Motos",
            video: "https://www.youtube.com/embed/eNmQVgtRiMc",
            image: "https://jjm-upload.s3.amazonaws.com/Parceiros/TydaMotos.png",
            linkFacebook: "https://www.facebook.com/thydamotos",
        },
        {
            title: "MilBr - Provedora de Internet",
            video: "https://www.youtube.com/embed/n_4ujZkrmb8",
            image: "https://jjm-upload.s3.amazonaws.com/Parceiros/Milbr.png",
            linkFacebook: "https://www.facebook.com/milbrnet",
        },
        {
            title: "Café e Pamonharia - Sabores da Roça",
            video: "https://www.youtube.com/embed/tGubq_6Zx-c",
            image: "https://jjm-upload.s3.amazonaws.com/Parceiros/Sabores+da+Ro%C3%A7a.png",
            linkFacebook: "https://www.facebook.com/Anasabores.com.br",
        },

    ])

    return (<>
        <legend className={styles.sectionTitle}>Patrocinado por:</legend>
        <fieldset className={styles.partnersVideo}>
            <legend className={styles.legendPartner}>{arrayOfPartners[randomNumber].title}</legend>
            <img className={styles.imagePartner} src={arrayOfPartners[randomNumber].image} />
            <br />
            <iframe
                title="video"
                frameBorder="0"
                allowFullScreen
                className={styles.commercial}

                src={arrayOfPartners[randomNumber].video}></iframe>
        </fieldset></>)
        ;
}

export default PartnersVideo;