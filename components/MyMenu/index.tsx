/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Grid, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { useRouter } from 'next/router'

import styles from './mymenu.module.css'

import { FcFaq, FcNews } from 'react-icons/fc'
import { FiLogIn } from 'react-icons/fi'
import {
    GiCoffeeBeans,
    GiStarFormation,
    GiGamepad,
    GiDeadWood,
    GiSwordsPower,
    GiSoccerBall
} from 'react-icons/gi'
import ModalExampleContentImage from '../Modal'
import { WiDayCloudy } from 'react-icons/wi'

interface MyMenuProps {
    flag: boolean
}

const MyMenu: React.FC<MyMenuProps> = ({ flag, children }) => {
    const router = useRouter();
    const [visible, setVisible] = React.useState(false)
    const [session, setSession] = useState(false)

    useEffect(() => {
        setVisible(flag)
        if (localStorage.getItem('token')) setSession(true)
    }, [flag, session])

    function handleHoroscopo() {
        window.scrollTo(0, document.body.scrollHeight)
    }

    function handleLogout() {
        setSession(false)
        localStorage.clear()
        router.push('/dashboard')
    }

    return (
        <Grid columns={1} >
            <Grid.Column>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation="overlay"
                        icon="labeled"
                        inverted
                        onHide={() => setVisible(false)}
                        vertical
                        visible={visible}
                        width="wide"
                        color="black"
                        compact
                    >
                        <Link href="/dashboard">
                            <Menu.Item header as="div" color="pink">
                                <div className={styles.menuHeader}>
                                    <h1>Jornal Jota Maria</h1>
                                    <img src="/logo.png" alt="" />
                                </div>
                            </Menu.Item>
                        </Link>

                        <Link href="/newspage">
                            <Menu.Item as="div">
                                <div className={styles.menuItem}>
                                    <FcNews size={30} />
                                    <h1>Notícias</h1>
                                </div>
                            </Menu.Item>
                        </Link>

                        <Link href="/popnewspage">
                            <Menu.Item as="div">
                                <div className={styles.menuItem}>
                                    <GiGamepad size={35} color="#00cdac" />
                                    <h1>Mundo POP</h1>
                                </div>
                            </Menu.Item>
                        </Link>

                        <Link href="/sportspage">
                            <Menu.Item as="div">
                                <div className={styles.menuItem}>
                                    <GiSoccerBall size={30} color="#E2F0F9" />
                                    <h1>Esporte</h1>
                                </div>
                            </Menu.Item>
                        </Link>

                        <Link href="/deathreports">
                            <Menu.Item as="div">
                                <div className={styles.menuItem}>
                                    <GiDeadWood size={30} color="white" />
                                    <h1>Notas de Falecimento</h1>
                                </div>
                            </Menu.Item>
                        </Link>

                        <Menu.Item as="div">
                            <ModalExampleContentImage flag="coffee">
                                <div className={styles.menuItem}>
                                    <GiCoffeeBeans
                                        size={30}
                                        color="#D2691E"
                                    />
                                    <h1>Cotação do Café Arábica</h1>
                                </div>
                            </ModalExampleContentImage>
                        </Menu.Item>

                        <Menu.Item as="div">
                            <ModalExampleContentImage flag="weather">
                                <div className={styles.menuItem}>
                                    <WiDayCloudy size={40} color="#2BE600" />
                                    <h1>Previsão do Tempo</h1>
                                </div>
                            </ModalExampleContentImage>
                        </Menu.Item>

                        <Menu.Item as="div">
                            <div className={styles.menuItem} onClick={handleHoroscopo}>
                                <GiStarFormation size={30} color="#b3b300" />
                                <h1>Horóscopo Diário</h1>
                            </div>
                        </Menu.Item>

                        <Menu.Item as="div">
                            <div className={styles.menuDiviser}></div>
                        </Menu.Item>

                        {session
                            ? <Link href="/options">
                                <Menu.Item as="div">
                                    <div className={styles.menuItem}>
                                        <GiSwordsPower
                                            size={30}
                                            color="#06beb6 "
                                        />
                                        <h1>Cadastro de Postagens</h1>
                                    </div>
                                </Menu.Item>
                            </Link>
                            : (
                                ''
                            )}
                        <Menu.Item as="div">
                            <div
                                className={styles.menuLogin}
                                onClick={handleHoroscopo}
                            >
                                <FcFaq size={20} />
                                <h1>Contato</h1>
                            </div>
                        </Menu.Item>
                        {!session ? (
                            <Link href="/login">
                                <Menu.Item as="div">
                                    <div className={styles.menuLogin}>
                                        <FiLogIn size={20} />
                                        <h1>Login</h1>
                                    </div>
                                </Menu.Item>
                            </Link>
                        ) : (
                                <Menu.Item as="div">
                                    <div
                                        className={styles.menuLogin}
                                        onClick={handleLogout}
                                    >
                                        <FiLogIn size={20} color="red" />
                                        <h1>Sair</h1>
                                    </div>
                                </Menu.Item>
                            )}
                    </Sidebar>
                    <Sidebar.Pusher dimmed={visible}>
                        <Segment basic >
                            {children}
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Grid.Column>
        </Grid>
    )
}

export default MyMenu
