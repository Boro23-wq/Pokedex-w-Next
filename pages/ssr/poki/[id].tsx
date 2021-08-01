/* eslint-disable @next/next/no-img-element */
import React from 'react'
import axios from 'axios';
import { getImgUrl } from '../../../src/utils/fetcher';
import LayoutWrapper from '../../../src/components/LayoutWrapper/LayoutWrapper';
import { PokiProfileDTO } from '../../../src/dto/PokiDTO';
import { PokiProfileCard } from '../../../src/components/PokiProfileCard/PokiProfileCard';
import { Box, Button } from '@chakra-ui/react';
import { capitalizeFirstLetter, formattedPokiProfile } from '../../../src/utils/common';
import { GetServerSideProps } from 'next';

import styles from '../../../styles/Home.module.css'
import Link from 'next/link';
import { ArrowBackIcon } from '@chakra-ui/icons';

export default function PokiPageUsingSSR(props: { pokiProfile: PokiProfileDTO }) {
    return (
        <LayoutWrapper>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    <a href={props.pokiProfile.species?.url}>{capitalizeFirstLetter(props.pokiProfile?.name)}</a>
                </h1>

                <Box d='flex' mt='4'>
                    <Link href='/ssr' passHref>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

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
