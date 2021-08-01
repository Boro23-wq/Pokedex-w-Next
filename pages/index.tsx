import { Box, Button, Tooltip } from '@chakra-ui/react'
import { HomeCard } from '../src/components/HomeCard/HomeCard'
import LayoutWrapper from '../src/components/LayoutWrapper/LayoutWrapper'
import { homepageData } from '../src/static/data'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <LayoutWrapper>
      <main className={styles.main}>
        <h1 className={styles.title}>
          CSR, SSR, SSG with <a href="https://www.pokemon.com/us/pokedex/">Pokedex!</a>
        </h1>

        <Box d="flex" mt="4">
          {/* CSR */}
          <Box mr="2">
            <Tooltip hasArrow label="Server sends a blank page while the client-side fetches from an API and rehydrates." bg="gray.800" border="1px solid rgba(255,255,255,0.095)">
              <Button size='xs' colorScheme='whiteAlpha' variant='outline' >#CSR</Button>
            </Tooltip>
          </Box>

          {/* SSR */}
          <Box mr="2">
            <Tooltip hasArrow label="The HTML page is generated on each request on the server. TTFB can be slow." bg="gray.800" border="1px solid rgba(255,255,255,0.095)">
              <Button size='xs' colorScheme='whiteAlpha' variant='outline'>#SSR</Button>
            </Tooltip>
          </Box>

          {/* SSG */}
          <Box mr="2">
            <Tooltip hasArrow label="The HTML is generated at build time and will be reused on each request." bg="gray.800" border="1px solid rgba(255,255,255,0.095)">
              <Button size='xs' colorScheme='whiteAlpha' variant='outline'>#SSG</Button>
            </Tooltip>
          </Box>

        </Box>

        <p className={styles.description}>
          <span className={styles.span}>Pokedex</span> built using Next.js to demonstrate client-side rendering, server-side rendering and static site generation.
        </p>

        <div className={styles.grid}>
          {
            homepageData.map((data) => (
              <HomeCard key={data.key} title={data.abbr} desc={data.long} />
            ))
          }
        </div>
      </main>
    </LayoutWrapper >
  )
}
