import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
  Button,
  Box,
  Heading,
  useColorMode,
} from '@chakra-ui/core'
// import { questions } from '../../data'
import { initializeApollo } from '../apollo/client'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import Link from 'next/link'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import Question from '../components/Question'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

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

const Index = () => {
  const { data: { posts }, loading, error } = useQuery(getAllPosts)
  const { colorMode } = useColorMode()
  const bgColor = {light: 'gray.100', dark: 'gray.700'}
  const color = {light: 'gray.800', dark: 'white'}

  if(loading){
    return <h1>Loading ...</h1>
  }

  if(error){
    console.log({ error })
  }

  return (
  <Container>
    <Main>
      <Hero />
      {/* <DarkModeSwitch /> */}
        {/* <StackEx /> */}
      {/* {posts.map(post => (
        <Question 
          key={post.id}
          src={post.src}
          title={post.question}
          description={post.description}
          language={post.language}
          name={post.author.name}
          jobTitle={post.author.jobTitle}
        />
      ))} */}
      {/* <Box borderRadius='1rem' bg={bgColor[colorMode]} color={color[colorMode]} p={6} mx={4}>
        <Heading mb={4}>Why Hot Seat Questions?</Heading>
        <Text fontSize='xl' fontWeight='medium'>Hot Seat Questions was created out of motivation to help myself and others to be prepared for interviews in the tech industry. In my first white board interview ever I got ask some data structures and algorithms questions. Let's just say I bombed that interview 😅. After that I was determind to be prepared for future interviews, and that's when Hot Seat Questions was born.</Text>
      </Box> */}
      <Heading mt={12} mx={4}>
        How it works 🚀
      </Heading>
      <List spacing={3} fontSize={['xl', '2xl']} mx={4}>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          Login with your email or github account
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          Post a question
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          View other questions 
        </ListItem>
        {/* You can also use custom icons from react-icons */}
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          Be prepared and crush that interview!
        </ListItem>
      </List>
      <Heading mt={12} textAlign='center'>So ... what are you waiting for?</Heading>
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Link href="/questions" as="/questions">
          <a>
            <Button mt={4} py={6} px={6} rounded='lg' shadow='sm' color='red.500' fontSize='2xl'>View Questions <Icon name='arrow-forward' ml={2} size='26px' color='red.500'/></Button>
          </a>
        </Link>
      </Box>
    </Main>
    {/* <CTA /> */}
    {/* <Footer d='flex' justify='center' px={4} fontSize={['lg', 'xl']} w='full' pb={48}>
      <Text fontWeight='medium'>Made with ❤️ and hard work by: <ChakraLink color='red.500' href='https://bobbybytez.io'>Bobby Hall Jr</ChakraLink></Text>
    </Footer> */}
  </Container>
  )
}

export async function getStaticProps(){
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

export default Index
