/* eslint-disable @next/next/no-img-element */
import React, { MouseEvent } from 'react'
import Link from 'next/link'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { capitalizeFirstLetter } from '../../utils/common'
import { route } from '../../utils/route'

import styles from './PokiCard.module.scss'

export const PokiCard = (props: { id: number, title: string, url: string, imageUrl: string, path: string }) => {

    const handleOnClick = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const redirectUrl = `/${props.path}/poki/${props.id}`;
        route(redirectUrl);
    }

    return (
        <div className={styles.card}>
            <h2>{capitalizeFirstLetter(props.title)}</h2>
            <img width={75} height={75} src={props.imageUrl} alt={props.title} />
            <div className={styles.linkWrapper}>
                <Link href={props.url}>{props.url}</Link>
            </div>
            <Button className={styles.btn} onClick={handleOnClick} w={120} size="sm" colorScheme='purple' my={8} rightIcon={<ArrowForwardIcon />} >View Details</Button>
        </div >
    )
}
