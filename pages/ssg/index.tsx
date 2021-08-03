import React from 'react'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { PokiResultDTO } from '../../src/dto/PokiDTO'
import LayoutWrapper from '../../src/components/LayoutWrapper/LayoutWrapper'
import { PokiCard } from '../../src/components/PokiCard/PokiCard'
import { Spinner } from '@chakra-ui/spinner'
import { getImgUrl } from '../../src/utils/fetcher'
import { Box, Button } from '@chakra-ui/react'
import Link from 'next/link'
import { ArrowBackIcon, InfoIcon } from '@chakra-ui/icons'

import styles from '../../styles/Home.module.css'

const SSGPage = (props: { pokis: PokiResultDTO[] }) => {
    return (
        <LayoutWrapper>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    SSG - <a href="https://www.pokemon.com/us/pokedex/">Pokedex!</a>
                </h1>


                <Box d='flex' mt='4'>
                    <Link href='/' passHref>
                        <Button leftIcon={<ArrowBackIcon />} mr='2' size="sm" colorScheme='pink' variant='outline'>Home</Button>
                    </Link>
                    <Link href='/ssg/info' passHref>
                        <Button leftIcon={<InfoIcon />} mr='2' size="sm" colorScheme='pink' variant='outline'>How SSG works?</Button>
                    </Link>
                </Box>

                <p className={styles.description}>
                    The following list of pokemons are fetched through static-side generation using `getStaticProps` and `getStaticPaths`.
                </p>

                <div className={styles.grid}>
                    {
                        props.pokis ? props.pokis.map((pokis: { name: string, url: string }, id: number) => (
                            <PokiCard id={id + 1} key={id + 1} title={pokis.name} url={pokis.url} imageUrl={getImgUrl(id + 1)} path='ssg' />
                        )) : <Spinner />
                    }
                </div>
            </main>
        </LayoutWrapper>
    )
}

export default SSGPage

export const getStaticProps: GetStaticProps = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/pokemon/?limit=102`)
    const { results: pokis } = await res.data;

    return {
        props: { pokis },
    }
}
