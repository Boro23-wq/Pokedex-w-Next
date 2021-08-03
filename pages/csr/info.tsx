import React from 'react'
import Link from 'next/link'
import { Box, Button, } from "@chakra-ui/react"
import LayoutWrapper from '../../src/components/LayoutWrapper/LayoutWrapper'
import { ArrowBackIcon } from '@chakra-ui/icons';

import styles from '../../styles/Home.module.css'

export default function CSRInfoPage() {

    return (
        <LayoutWrapper>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    CSR <span className={styles.infoSpan}>101</span> w/ Next.js
                </h1>

                <Box d='flex' mt='4'>
                    <Link href='/csr' passHref>
                        <Button leftIcon={<ArrowBackIcon />} mr='2' size="sm" colorScheme='pink' variant='outline'>Back</Button>
                    </Link>
                </Box>

                <p style={{ fontWeight: 600 }} className={styles.description}>
                    How <span style={{ textDecoration: 'underline', fontWeight: 800 }}>CSR</span> works along with <span style={{ fontStyle: 'italic', fontWeight: 800 }}>pros</span> and <span style={{ fontStyle: 'italic', fontWeight: 800 }}>cons.</span>
                </p>

                {/* CSR INFO */}
                <div className={styles.infoWrapper}>

                    <div className={styles.infoMainHeadingWrapper}>
                        <h1 className={styles.infoMainHeadingText}>CSR Briefing:</h1>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.infoDivContainer}>
                            <div className={styles.infoStepNo} > Step #1</div>
                            Server sents a blank page (without any dynamic data) to the browser.
                        </div>
                    </div>
                    <div className={styles.infoWDivrapper}>
                        <div className={styles.infoDivContainer}>
                            <div className={styles.infoStepNo} > Step #2</div>
                            Client immediately serves the page with the loading state.
                        </div>
                    </div>
                    <div className={styles.infoWDivrapper}>
                        <div className={styles.infoDivContainer}>
                            <div className={styles.infoStepNo} > Step #3</div>
                            Page displays a loading state, while dynamic data is being fetched through API calls.
                        </div>
                    </div>
                    <div className={styles.infoWDivrapper}>
                        <div className={styles.infoDivContainer}>
                            <div className={styles.infoStepNo} > Step #5</div>
                            Client-side/browser re-hydrates with dynamic data when available.
                        </div>
                    </div>

                    <hr className={styles.hr} />

                    <div className={styles.infoMainHeadingWrapper}>
                        <h1 className={styles.infoMainHeadingText}>CSR Pros:</h1>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.proDivContainer}>
                            <div className={styles.infoStepNo} > PRO</div>
                            Time To First Byte (TTFB) is faster than SSR. Loading state immediately displayed.
                        </div>
                    </div>
                    <div className={styles.infoWDivrapper}>
                        <div className={styles.proDivContainer}>
                            <div className={styles.infoStepNo} > PRO</div>
                            Faster page loads on subsequent request. No server hits.
                        </div>
                    </div>
                    <div className={styles.infoWDivrapper}>
                        <div className={styles.proDivContainer}>
                            <div className={styles.infoStepNo} > PRO</div>
                            Enhances usability and on-page performance through reusable UI components.
                        </div>
                    </div>

                    <hr className={styles.hr} />

                    <div className={styles.infoMainHeadingWrapper}>
                        <h1 className={styles.infoMainHeadingText}>CSR Cons:</h1>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.conDivContainer}>
                            <div className={styles.infoStepNo} > CON</div>
                            Not optimized for SEO. Google crawlers won&apos;t index your page.
                        </div>
                    </div>
                    <div className={styles.infoWDivrapper}>
                        <div className={styles.conDivContainer}>
                            <div className={styles.infoStepNo} > CON</div>
                            Displays a blank page on intial render. Fairly poor UX.
                        </div>
                    </div>
                    <div className={styles.infoWDivrapper}>
                        <div className={styles.conDivContainer}>
                            <div className={styles.infoStepNo} > CON</div>
                            Poor performance on slower devices.
                        </div>
                    </div>

                    <hr className={styles.hr} />

                    <div className={styles.infoMainHeadingWrapper}>
                        <h1 className={styles.infoMainHeadingText}>CSR Usecases:</h1>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.useCaseDivContainer}>
                            <div className={styles.infoStepNo} > USECASE</div>
                            Pages behind a paywall / private dashboard pages.
                        </div>
                    </div>
                    <div className={styles.infoWDivrapper}>
                        <div className={styles.useCaseDivContainer}>
                            <div className={styles.infoStepNo} > USECASE</div>
                            Pages with frequent data updates.
                        </div>
                    </div>
                    <div className={styles.infoWDivrapper}>
                        <div className={styles.useCaseDivContainer}>
                            <div className={styles.infoStepNo} > USECASE</div>
                            Banking websites where data is requested on-demand.
                        </div>
                    </div>
                    <div className={styles.infoWDivrapper}>
                        <div className={styles.useCaseDivContainer}>
                            <div className={styles.infoStepNo} > USECASE</div>
                            Pages that don&apos;t require SEO optimizations.
                        </div>
                    </div>

                </div>
            </main>
        </LayoutWrapper >
    )
}