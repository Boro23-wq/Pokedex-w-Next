/* eslint-disable @next/next/no-img-element */
import React from 'react'
import axios from 'axios';
import { getImgUrl } from '../../../src/utils/fetcher';
import LayoutWrapper from '../../../src/components/LayoutWrapper/LayoutWrapper';
import { PokiProfileDTO, PokiResultDTO } from '../../../src/dto/PokiDTO';
import { PokiProfileCard } from '../../../src/components/PokiProfileCard/PokiProfileCard';
import { Box, Button, Link } from '@chakra-ui/react';
import { capitalizeFirstLetter, formattedPokiProfile } from '../../../src/utils/common';
import { GetStaticProps } from 'next';

import styles from '../../../styles/Home.module.css'
import { ArrowBackIcon } from '@chakra-ui/icons';

export default function PokiPageUsingSSR(props: { pokiProfile: PokiProfileDTO }) {
    return (
        <LayoutWrapper>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    <a href={props.pokiProfile.species?.url}>{capitalizeFirstLetter(props.pokiProfile?.name)}</a>
                </h1>

                <Box d='flex' mt='4'>
                    <Link href='/ssg' passHref>
                        <Button leftIcon={<ArrowBackIcon />} mr='2' size="sm" colorScheme='pink' variant='outline'>Back</Button>
                    </Link>
                </Box>

                <div className={styles.grid}>
                    <PokiProfileCard profile={props.pokiProfile && props.pokiProfile} />
                </div>
            </main>
        </LayoutWrapper>
    )
}

// This function gets called at build time
export async function getStaticPaths() {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/pokemon/?limit=102`;

    const res = await axios.get(url);
    const { results } = await res.data;

    const paths = results?.map((_result: PokiResultDTO, id: string) => ({
        params: { id: (Number(id) + 1).toString() },
    }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id;

    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/pokemon/${id}`;
    const urlForImage = getImgUrl(Number(id));

    const res = await axios.get(url);
    const data = await res.data;

    let pokiProfile: PokiProfileDTO = {};

    if (data) {
        pokiProfile = formattedPokiProfile(data, urlForImage);
    }
    return {
        props: { pokiProfile },
    }
}