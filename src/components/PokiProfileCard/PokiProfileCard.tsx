/* eslint-disable @next/next/no-img-element */
import { Badge, Box, Heading, Image, Spinner } from '@chakra-ui/react'
import React from 'react'
import { PokiProfileDTO } from '../../dto/PokiDTO'
import { capitalizeFirstLetter, dmToCm, getRandomColor, hgToKg } from '../../utils/common'

import styles from './PokiProfileCard.module.scss'

export const PokiProfileCard = (props: { profile: PokiProfileDTO }) => {
    return (
        <>
            {props.profile ?
                <Box className={styles.container} maxW="sm" borderWidth="4px" borderStyle="solid" borderColor='gray.800' px="4" py="4" borderRadius="lg" overflow="hidden">

                    <Image w={200} h={200} src={props.profile.image} alt={props.profile.name} m='auto' />

                    <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            <Badge borderRadius="md" px="2" colorScheme="teal">
                                EXP: {props.profile.base_exp}
                            </Badge>
                            <Box
                                color="gray.500"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="xs"
                                textTransform="uppercase"
                                ml="2"
                            >
                                {dmToCm(props.profile.height)} cm &bull; {hgToKg(props.profile.weight)} kg
                            </Box>
                        </Box>

                        <Box
                            mt="4"
                            mb="6"
                            fontWeight="semibold"
                            lineHeight="tight"
                            fontSize='15px'
                        >
                            {`${capitalizeFirstLetter(props.profile.name)} has a base experience of ${props.profile.base_exp}.`} <br />
                            {`It measures at ${dmToCm(props.profile.height)} cms tall and weighs ${hgToKg(props.profile.weight)} kgs.`}
                        </Box>

                        <hr className={styles.hr} />

                        <Box mt="6" mb="6">
                            <Heading size="md">Types</Heading>
                            {
                                props.profile.types?.map((type, index) => (
                                    <>
                                        <Badge key={index} borderRadius="md" px="2" mt="3" mr="2" size="md" colorScheme={getRandomColor()}>
                                            {type}
                                        </Badge>
                                    </>
                                ))
                            }
                        </Box>

                        <Box>
                            <Heading size="md">Abilities</Heading>
                            {
                                props.profile.abilities?.map((ability, index) => (
                                    <>
                                        <Badge key={index} borderRadius="full" px="2" mt="3" mr="2" size="md" colorScheme={getRandomColor()}>
                                            {ability}
                                        </Badge>
                                    </>
                                ))
                            }
                        </Box>

                    </Box>
                </Box> : <Spinner />
            }
        </>
    )
}

