import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'

import { Text, Box, Heading, Stack, Badge, Avatar, useColorMode, Icon } from '@chakra-ui/core'
import Question from '../../components/Question'
import { Main } from '../../components/Main'
import { Container } from '../../components/Container'

export const getAllPosts = gql`
    query posts {
      posts {
        id
        question
        description
        language
        author {
          id
          name
          jobTitle
        }
      }
    }
  `

const SingleQuestion = (props) => {
    const router = useRouter()
    const { id } = router.query
   
    const { colorMode } = useColorMode()
    const bgColor = {light: 'gray.100', dark: 'gray.700'}
    const color = {light: 'gray.800', dark: 'white'}

    // const { data: { posts }, loading, error } = useQuery(getAllPosts)
    // console.log({id})

    return (
        <Container>
            <Main>
                <Text fontSize='2xl'>{id}</Text>
                <Text fontSize='xl'>Currently a work in progress, More coming soon ...</Text>
            </Main>
        </Container>
    )
}

export default SingleQuestion


export async function getServerProps(){
    const apolloClient = initializeApollo()
  
    await apolloClient.query({
      query: getAllPosts
    })
  
    return {
      props: {
        initialApolloState: apolloClient.cache.extract(),
      }
    }
}

// export async function getStaticPaths() {

//     // router = useRouter()
//     // const { id } = router.params
  
//     return {
//       paths: [{
//           params: {id}
//       }],
//       fallback: false
//     };
//   }