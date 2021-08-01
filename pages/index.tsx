import { Box, Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Tooltip } from '@chakra-ui/react'
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

        <Box className={styles.tooltip}>
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

        <Box className={styles.popover}>
          {/* CSR */}
          <Box mr="2">
            <Popover>
              <PopoverTrigger>
                <Button size='xs' colorScheme='whiteAlpha' variant='outline'>#CSR</Button>
              </PopoverTrigger>
              <PopoverContent color="white" bg="gray.800" borderColor="gray.700">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader borderColor="gray.700">What is client-side rendering?</PopoverHeader>
                <PopoverBody>Client-side rendering serves a blank page (loading state) without any content until the Javascript content is fetched, then later rehydrates the application with dynamic content.</PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>

          {/* SSR */}
          <Box mr="2">
            <Popover>
              <PopoverTrigger>
                <Button size='xs' colorScheme='whiteAlpha' variant='outline'>#SSR</Button>
              </PopoverTrigger>
              <PopoverContent color="white" bg="gray.800" borderColor="gray.700">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader borderColor="gray.700">What is server-side rendering?</PopoverHeader>
                <PopoverBody>Server-side rendering pre-renders a page on the server, includes the data, and delivers a fully populated HTML page with dynamic data to the client.</PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>

          {/* SSG */}
          <Box mr="2">
            <Popover>
              <PopoverTrigger>
                <Button size='xs' colorScheme='whiteAlpha' variant='outline'>#CSR</Button>
              </PopoverTrigger>
              <PopoverContent color="white" bg="gray.800" borderColor="gray.700">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader borderColor="gray.700">What is static-site generation?</PopoverHeader>
                <PopoverBody>Static-site generation usually generates the pages during build time. With Incremental-static regeneration, we can statically generate on a per-page basis, without needing to rebuild the entire site.</PopoverBody>
              </PopoverContent>
            </Popover>
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
