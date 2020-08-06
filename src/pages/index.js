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
    <Main>
      <Hero />
      <DarkModeSwitch />
        <StackEx />
    </Main>
    <CTA />
    <Footer d='flex' justify='center' px={4} fontSize={['lg', 'xl']} w='full' pb={48}>
      <Text fontWeight='medium'>Made with ❤️ and hard work by: <ChakraLink color='red.500' href='https://bobbybytez.io'>Bobby Hall Jr</ChakraLink></Text>
    </Footer>
  </Container>
)

export default Index
