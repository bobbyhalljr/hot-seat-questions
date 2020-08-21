import { Stack } from '@chakra-ui/core'
import Navbar from './navbar'
import Footer from './Footer'

export const Main = (props) => (
  <>
  <Navbar />
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="52rem"
    pt="2rem"
    my={24}
    mx={['4', '6']}
    {...props}
  />
  <Footer />
  </>
)
