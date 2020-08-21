import React from 'react'

import { Avatar, Link as ChakraLink, Heading, Text } from '@chakra-ui/core'

import { Container } from '../components/Container'
import { Main } from '../components/Main'

const About = (props) => {
    return (
        <Container>
            <Main>
                <Heading>About Hot Seat Questions</Heading>
                <Text fontSize='xl' fontWeight='semibold'>
                    Hi, I'm <ChakraLink href='https://bobbybytez.io'>Bobby Hall Jr</ChakraLink> creator of hot seat questions. 
                    A little about me... 
                    I live in Vermont and i'm a Full Stack Engineer. I'm passionate about UX/UI and front-end development but I love solving hard problems on the backend.
                    For the past year I have been working with diverse remote teams and building products at Lambda School. About 5 months ago I got promoted to team lead where I lead 10+ Web developers, 4 IOS developers, and 4 UX designers, Through 2 product cycles releasing new features each cycle.
                </Text>
                <Text fontSize='xl' fontWeight='semibold'>
                    Hot Seat Questions was created out of motivation to help myself and others to be prepared for interviews in the tech industry. In my first white board interview ever I got ask some data structures and algorithms questions. Let's just say I bombed that interview 😅. 
                    After that I was determind to be prepared for future interviews, and that's when Hot Seat Questions was born.

                    This website is currently a work in progress.
                </Text>
            </Main>
        </Container>
    )
}

export default About 