import Head from 'next/head'
import React, { ReactNode } from 'react'

import styles from '../../../styles/Home.module.css'

const LayoutWrapper = (props: { children: ReactNode }) => {
    return (
        <div>
            <div className={styles.topBorder} ></div>
            <div className={styles.container}>
                <Head>
                    <title>Next Pokedex</title>
                    <meta name="description" content="Pokedex built using Next.js to demonstrate client-side rendering, server-side rendering and static site generation." />
                    <link rel="icon" href="/pokeball.ico" />
                </Head>

                {props.children}

                <footer className={styles.footer}>
                    <div className={styles.footerTitleDiv}>Developed by{' '} <span className={styles.logo}> <a href='https://sboro.vercel.app' target='_blank' rel="noreferrer">Sintu Boro</a></span></div>
                    <div className={styles.footerSubtitleDiv}>
                        <div style={{ marginRight: '4px' }}>Found a problem? Raise an issue</div>
                        <div style={{ color: 'rgba(255, 255, 255, 0.65)' }}><a href='https://github.com/Boro23-wq/Pokedex-w-Next/issues'>@Boro23-wq.</a></div>
                    </div>
                </footer>
            </div >
        </div >
    )
}

export default LayoutWrapper
