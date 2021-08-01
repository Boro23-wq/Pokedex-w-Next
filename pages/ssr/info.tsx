import React from 'react'
import Link from 'next/link'
import { Box, Button } from "@chakra-ui/react"
import LayoutWrapper from '../../src/components/LayoutWrapper/LayoutWrapper'
import { ArrowBackIcon } from '@chakra-ui/icons';

import styles from '../../styles/Home.module.css'

export default function SSRInfoPage() {

    return (
        <LayoutWrapper>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    SSR <span className={styles.infoSpan}>101</span> w/ Next.js
                </h1>

                <Box d='flex' mt='4'>
                    <Link href='/ssr' passHref>
                        <Button leftIcon={<ArrowBackIcon />} mr='2' size="sm" colorScheme='pink' variant='outline'>Back</Button>
                    </Link>
                </Box>

                <p style={{ fontWeight: 600 }} className={styles.description}>
                    How <span style={{ textDecoration: 'underline', fontWeight: 800 }}>SSR</span> works along with <span style={{ fontStyle: 'italic', fontWeight: 800 }}>pros</span> and <span style={{ fontStyle: 'italic', fontWeight: 800 }}>cons.</span>
                </p>

                <div className={styles.infoWrapper}>

                    {/* Direct page request */}
                    <div className={styles.infoHeadingWrapper}>
                        <h1 className={styles.infoHeadingText}>1. Direct Page Request</h1>
                        <p className={styles.infoDescriptionText} >The page is requested directly (by entering the URL in the browser).</p>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.infoDivContainer}>
                            <div className={styles.infoStepNo} > Step #1</div>
                            Server pre-renders the page with dynamic data.
                        </div>
                    </div>

                    <div className={styles.infoWDivrapper}>

                        <div className={styles.infoDivContainer}>
                            <div className={styles.infoStepNo} > Step #1</div>
                            Client displays the pre-rendered page from the server.
                        </div>
                    </div>

                    <br />

                    {/* Client side page request */}
                    <div className={styles.infoHeadingWrapper}>
                        <h1 className={styles.infoHeadingText}>2. Client-side Page Request</h1>
                        <p className={styles.infoDescriptionText} >
                            The page is requested using client-side page transitions
                            <br />
                            through next/link or next/router (internal links on the page).
                        </p>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.infoDivContainer}>
                            <div className={styles.infoStepNo} > Step #1</div>
                            The application sends an API request to the server.
                        </div>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.infoDivContainer}>
                            <div className={styles.infoStepNo} > Step #2</div>
                            Server runs the logic inside getServerSideProps.
                        </div>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.infoDivContainer}>
                            <div className={styles.infoStepNo} > Step #3</div>
                            Server returns the JSON response requested by the client.
                        </div>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.infoDivContainer}>
                            <div className={styles.infoStepNo} > Step #4</div>
                            Next.js app rehydrates with the data received from the server.
                        </div>
                    </div>

                    <hr className={styles.hr} />

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.proDivContainer}>
                            <div className={styles.infoStepNo} > PRO</div>
                            Better UX – user sees the content faster.
                        </div>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.proDivContainer}>
                            <div className={styles.infoStepNo} > PRO</div>
                            Optimized for SEO. Since page is pre-rendered on the server, the page is indexabale.
                        </div>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.proDivContainer}>
                            <div className={styles.infoStepNo} > PRO</div>
                            Dynamic content is readily available.
                        </div>
                    </div>

                    <hr className={styles.hr} />

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.conDivContainer}>
                            <div className={styles.infoStepNo} > CON</div>
                            Time To First Byte (TTFB) is slower than CSR. No loading state.
                        </div>
                    </div>
                    <div className={styles.infoWDivrapper}>
                        <div className={styles.conDivContainer}>
                            <div className={styles.infoStepNo} > CON</div>
                            Expensive, since every page request would hit the server.
                        </div>
                    </div>
                    <div className={styles.infoWDivrapper}>
                        <div className={styles.conDivContainer}>
                            <div className={styles.infoStepNo} > CON</div>
                            Not compatible with libraries that needs to access `document`.
                        </div>
                    </div>
                </div>

            </main>
        </LayoutWrapper >
    )
}