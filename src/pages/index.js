import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/core'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import StackEx from '../components/Question'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

const Index = () => (
  <Container>
    <Hero />
      <Text fontSize='2xl' fontWeight='medium' mb={16} mx={4} textAlign='left'>
        Post real questions from your technical and behavioral interviews
      </Text>
    <DarkModeSwitch />
    {/* <Footer>
      <Text fontWeight='medium'>Made with ❤️ and hard work by: <ChakraLink color='red.500' href='https://bobbybytez.io'>Bobby Hall Jr</ChakraLink></Text>
    </Footer> */}
    <Main>
      <StackEx />
    </Main>
    <CTA />
  </Container>
)

export default Index
