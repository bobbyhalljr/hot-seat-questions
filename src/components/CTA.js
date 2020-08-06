import { Link as ChakraLink, useColorMode, Text } from '@chakra-ui/core'

import { Container } from './Container'
import CustomModal from './CustomModal'

export const CTA = () => {
  const { colorMode } = useColorMode()
  const bgColor = {light: 'gray.100', dark: 'gray.700'}
  const color = {light: 'gray.800', dark: 'white'}
  
  return (
    <Container
      flexDirection="row"
      position="fixed"
      bottom="0"
      width="100%"
      maxWidth="52rem"
      py={2}
    >
      {/* <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mx={2}>
        <Button width="100%" variant="outline" variantColor="red">
          chakra-ui
        </Button>
      </ChakraLink> */}

      {/* <ChakraLink
        href="#"
        flexGrow={1}
        mx={2}
        bg={colorMode[bgColor]}
        color={colorMode[color]}
        m={2}
        p={4}
      > */}
        <CustomModal width="100%" rounded='full' variant="solid" color='white' bg='red.500'>
          <Text>
            Post a question
          </Text>
        </CustomModal>
      {/* </ChakraLink> */}
    </Container>
  )
}
