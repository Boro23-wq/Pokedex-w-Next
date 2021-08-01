import React from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import fetcher, { getImgUrl } from '../../src/utils/fetcher';
import { Box, Button, Spinner } from "@chakra-ui/react"
import LayoutWrapper from '../../src/components/LayoutWrapper/LayoutWrapper'
import { PokiCard } from '../../src/components/PokiCard/PokiCard';
import { PokiResultDTO } from '../../src/dto/PokiDTO';
import { ArrowBackIcon, InfoIcon } from '@chakra-ui/icons';

import styles from '../../styles/Home.module.css'

export default function CSRPage() {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/pokemon/?limit=99`;

    const { data } = useSWR(url, fetcher);
    const pokis: PokiResultDTO[] = data?.results;

    return (
        <LayoutWrapper>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    CSR - <a href="https://www.pokemon.com/us/pokedex/">Pokedex!</a>
                </h1>

                <Box className={styles.buttonBox} >
                    <Link href='/' passHref>
                        <Button className={styles.buttonBoxBtn} leftIcon={<ArrowBackIcon />} mr='2' size="sm" colorScheme='pink' variant='outline'>Home</Button>
                    </Link>
                    <Link href='/csr/info' passHref>
                        <Button className={styles.buttonBoxBtn} leftIcon={<InfoIcon />} mr='2' size="sm" colorScheme='pink' variant='outline'>How CSR works?</Button>
                    </Link>
                </Box>

                <p className={styles.description}>
                    The following list of pokemons are fetched through client-side rendering using useSWR hook.
                </p>

                <div className={styles.grid}>
                    {
                        pokis ? pokis?.map((pokis: { name: string, url: string }, id: number) => (
                            <PokiCard key={id + 1} id={id + 1} title={pokis.name} url={pokis.url} imageUrl={getImgUrl(id + 1)} path='csr' />
                        )) : <Spinner />
                    }
                </div>
            </main>
        </LayoutWrapper>
    )
}