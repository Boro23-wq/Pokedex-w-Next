/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr';
import fetcher, { getImgUrl } from '../../../src/utils/fetcher';
import LayoutWrapper from '../../../src/components/LayoutWrapper/LayoutWrapper';
import { PokiProfileDTO } from '../../../src/dto/PokiDTO';
import { PokiProfileCard } from '../../../src/components/PokiProfileCard/PokiProfileCard';
import { Box, Button, Spinner } from '@chakra-ui/react';
import { capitalizeFirstLetter, formattedPokiProfile } from '../../../src/utils/common';

import styles from '../../../styles/Home.module.css'
import { ArrowBackIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export default function PokiPageUsingCSR() {
    const router = useRouter();

    const { id } = router.query;

    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/pokemon/${id}`;
    const urlForImage = getImgUrl(Number(id));

    const { data } = useSWR(url, fetcher);

    let pokiProfile: PokiProfileDTO = {};

    if (data) {
        pokiProfile = formattedPokiProfile(data, urlForImage);
    }

    return (
        <LayoutWrapper>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    {
                        data ? <a href={pokiProfile.species?.url}>{capitalizeFirstLetter(pokiProfile?.name)}</a> : <Spinner />
                    }
                </h1>

                <Box d='flex' mt='4'>
                    <Link href='/csr' passHref>
                        <Button leftIcon={<ArrowBackIcon />} mr='2' size="sm" colorScheme='pink' variant='outline'>Back</Button>
                    </Link>
                </Box>

                <div className={styles.grid}>
                    {
                        data ? <PokiProfileCard profile={pokiProfile && pokiProfile} /> : <Spinner />
                    }
                </div>
            </main>
        </LayoutWrapper>
    )
}
