import React from 'react'
import Link from 'next/link'
import { Box, Button } from "@chakra-ui/react"
import LayoutWrapper from '../../src/components/LayoutWrapper/LayoutWrapper'
import { ArrowBackIcon } from '@chakra-ui/icons';

import styles from '../../styles/Home.module.css'

export default function SSGInfoPage() {

    return (
        <LayoutWrapper>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    SSG <span className={styles.infoSpan}>101</span> w/ Next.js
                </h1>

                <Box d='flex' mt='4'>
                    <Link href='/ssg' passHref>
                        <Button leftIcon={<ArrowBackIcon />} mr='2' size="sm" colorScheme='pink' variant='outline'>Back</Button>
                    </Link>
                </Box>

                <p style={{ fontWeight: 600 }} className={styles.description}>
                    How <span style={{ textDecoration: 'underline', fontWeight: 800 }}>SSG</span> works along with <span style={{ fontStyle: 'italic', fontWeight: 800 }}>pros</span> and <span style={{ fontStyle: 'italic', fontWeight: 800 }}>cons.</span>
                </p>

                <div className={styles.infoWrapper}>

                    {/* Basic static site generation */}
                    <div className={styles.infoHeadingWrapper}>
                        <h1 className={styles.infoHeadingText}>1. Basic Static Site Generation</h1>
                        <p className={styles.infoDescriptionText} >All pages are generated on build time. Client gets pre-rendered HTML (fallback: false).</p>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.infoDivContainer}>
                            <div className={styles.infoStepNo} > Step #1</div>
                            Server generates the page on build time (with/without dynamic data).
                        </div>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.infoDivContainer}>
                            <div className={styles.infoStepNo} > Step #2</div>
                            Client displays the statically generated page.
                        </div>
                    </div>

                    <br />

                    {/* ISR */}
                    <div className={styles.infoHeadingWrapper}>
                        <h1 className={styles.infoHeadingText}>2. Incremental Static Regeneration (ISR)</h1>
                        <p className={styles.infoDescriptionText} >
                            ISR allows to statically generate on a per-page basis, without needing to rebuild the entire site.
                            <br />
                            With ISR, you can retain the benefits of static while scaling to millions of pages.
                        </p>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.infoDivContainer}>
                            <div className={styles.infoStepNo} > Step #1</div>
                            Server generates pages with defined paths on build time (using getStaticPaths).
                        </div>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.infoDivContainer}>
                            <div className={styles.infoStepNo} > Step #2</div>
                            Client immediately shows the statically generated page.
                        </div>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.infoDivContainer}>
                            <div className={styles.infoStepNo} > Step #3</div>
                            If a user requests a non-generated page (or an undefined path):
                        </div>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.infoSubDivContainer}>
                            <div className={styles.infoStepNo} > Step #3.1</div>
                            Next.js will serve a fallback version (loading state).
                        </div>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.infoSubDivContainer}>
                            <div className={styles.infoStepNo} > Step #3.2</div>
                            Meanwhile, Next.js will make an API request to the server.
                        </div>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.infoSubDivContainer}>
                            <div className={styles.infoStepNo} > Step #3.3</div>
                            Server statically generates this page on the server.
                        </div>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.infoSubDivContainer}>
                            <div className={styles.infoStepNo} > Step #3.4</div>
                            Next.js will then serve the new page to the browser.
                        </div>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.infoSubDivContainer}>
                            <div className={styles.infoStepNo} > Step #3.5</div>
                            Next.js adds this path to the list of pre-generated pages.
                        </div>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.infoDivContainer}>
                            <div className={styles.infoStepNo} > Step #4</div>
                            On subsequent request to the same path requested above:
                        </div>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.infoSubDivContainer}>
                            <div className={styles.infoStepNo} > Step #4.1</div>
                            Next.js will serve the generated page and won&apos;t regenerate it.
                        </div>
                    </div>

                    <hr className={styles.hr} />

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.proDivContainer}>
                            <div className={styles.infoStepNo} > PRO</div>
                            Pages are served very fast since they are pre-built. Served by the CDN.
                        </div>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.proDivContainer}>
                            <div className={styles.infoStepNo} > PRO</div>
                            We can leverage ISR to statically built sites incrementally while scaling to millions of pages.
                        </div>
                    </div>

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.proDivContainer}>
                            <div className={styles.infoStepNo} > PRO</div>
                            SEO optimized. The statically generated pages can be easily crawled or indexed.
                        </div>
                    </div>

                    <hr className={styles.hr} />

                    <div className={styles.infoWDivrapper}>
                        <div className={styles.conDivContainer}>
                            <div className={styles.infoStepNo} > CON</div>
                            Slow builds due to large amount of pages pre-generated.
                        </div>
                    </div>
                    <div className={styles.infoWDivrapper}>
                        <div className={styles.conDivContainer}>
                            <div className={styles.infoStepNo} > CON</div>
                            Can regenerate all the pages everytime if fallback is false.
                        </div>
                    </div>
                    <div className={styles.infoWDivrapper}>
                        <div className={styles.conDivContainer}>
                            <div className={styles.infoStepNo} > CON</div>
                            Not recommended for websites that requires data to be frequently updated.
                        </div>
                    </div>
                </div>

            </main>
        </LayoutWrapper>
    )
}