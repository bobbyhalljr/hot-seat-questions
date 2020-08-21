import {
    Link as ChakraLink,
    Text,
    Code,
    Icon,
    List,
    ListIcon,
    ListItem,
    Spinner,
    Box, 
    Heading
  } from '@chakra-ui/core'
  // import { questions } from '../../data'
  import { initializeApollo } from '../../apollo/client'
  import { useQuery } from '@apollo/client'
  import gql from 'graphql-tag'
  import { useRouter } from 'next/router'
  
  import { Hero } from '../../components/Hero'
  import { Container } from '../../components/Container'
  import Question from '../../components/Question'
  import { Main } from '../../components/Main'
  import { DarkModeSwitch } from '../../components/DarkModeSwitch'
  import { CTA } from '../../components/CTA'
  import { Footer } from '../../components/Footer'
  import SingleQuestion from './[...id]'
  
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
    
    if(loading){
      return (
        <Box>
        <Text fontSize='3xl'>
            Getting the questions ready ... 🔥
        </Text>
        <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            textAlign='center'
            label='Getting the questions ready ... 🔥'
        />
        </Box>
      )
    }
  
    if(error){
      console.log({ error })
    }
  
    return (
    <Container>
      <Main>
        {/* <Hero /> */}
        {/* <DarkModeSwitch /> */}
          {/* <StackEx /> */}
          <Heading mx={4}>Questions</Heading>
        {posts.map(post => (
          <Question 
            posts={posts}
            key={post.id}
            id={post.id}
            src={post.src}
            title={post.question}
            description={post.description}
            language={post.language}
            name={post.author.name}
            jobTitle={post.author.jobTitle}
          />
        ))}
      </Main>
      <CTA />
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

// export async function getStaticPaths() {

//   router = useRouter()
//   const { id } = router.params

//   return {
//     paths: [{
//       params: id
//     }],
//     fallback: true
//   };
// }


export default Index


  