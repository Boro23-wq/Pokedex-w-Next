import React from 'react'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import LayoutWrapper from '../../src/components/LayoutWrapper/LayoutWrapper'
import { PokiResultDTO } from '../../src/dto/PokiDTO'
import { PokiCard } from '../../src/components/PokiCard/PokiCard'
import { Box, Button, Spinner } from '@chakra-ui/react'
import { getImgUrl } from '../../src/utils/fetcher'

import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { ArrowBackIcon, InfoIcon } from '@chakra-ui/icons'

export default function SSRPage(props: { pokis: PokiResultDTO[] }) {
    return (
        <LayoutWrapper>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    SSR - <a href="https://www.pokemon.com/us/pokedex/">Pokedex!</a>
                </h1>

                <Box d='flex' mt='4'>
                    <Link href='/' passHref>
                        <Button leftIcon={<ArrowBackIcon />} mr='2' size="sm" colorScheme='pink' variant='outline'>Home</Button>
                    </Link>
                    <Link href='/ssr/info' passHref>
                        <Button leftIcon={<InfoIcon />} mr='2' size="sm" colorScheme='pink' variant='outline'>How SSR works?</Button>
                    </Link>
                </Box>

                <p className={styles.description}>
                    The following list of pokemons are fetched through server-side rendering using `getServerSideProps`.
                </p>

                <div className={styles.grid}>
                    {
                        props.pokis ? props.pokis.map((pokis: { name: string, url: string }, id: number) => (
                            <PokiCard id={id + 1} key={id + 1} title={pokis.name} url={pokis.url} imageUrl={getImgUrl(id + 1)} path='ssr' />
                        )) : <Spinner />
                    }
                </div>
            </main>
        </LayoutWrapper>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/pokemon/?limit=102`)
    const { results: pokis } = await res.data;

    return {
        props: { pokis },
    }
}
