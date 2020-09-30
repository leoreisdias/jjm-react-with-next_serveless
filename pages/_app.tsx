/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import '../styles/global.css'
import { useRouter } from "next/router";
import Dashboard from './dashboard';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const key = localStorage.getItem('token');
        setToken(key ? key : '')
    }, [token])

    let allowed = true;
    const router = useRouter();
    if (router.pathname.startsWith("/news-post") && token.length <= 2) {
        allowed = false;
    }
    if (router.pathname.startsWith("/popnews-post") && token.length <= 2) {
        allowed = false;
    }
    if (router.pathname.startsWith("/sports-post") && token.length <= 2) {
        allowed = false;
    }
    if (router.pathname.startsWith("/report-post") && token.length <= 2) {
        allowed = false;
    }
    if (router.pathname.startsWith("/options") && token.length <= 2) {
        allowed = false;
    }

    const ComponentToRender = allowed ? Component : Dashboard;

    return (
        <>
            <ComponentToRender {...pageProps} />
        </>
    )
}

export default MyApp
