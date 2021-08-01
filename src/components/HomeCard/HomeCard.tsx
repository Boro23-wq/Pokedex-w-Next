import React from 'react'
import { Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { route } from '../../utils/route'

import styles from './HomeCard.module.scss'

export const HomeCard = (props: { title: string, desc: string }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.homeH2}>{props.title}</h2>
            <p>{props.desc}</p>
            <Button className={styles.button} size="sm" colorScheme='purple' onClick={() => route(`/${props.title.toLowerCase()}`)} rightIcon={<ArrowForwardIcon />}>Fetch using {props.title}</Button>
        </div>
    )
}
