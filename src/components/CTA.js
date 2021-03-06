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
      // py={2}
    >
      <CustomModal width="100%" rounded='full' variant="solid" color='white' bg='red.500'>
        {/* <p> */}
          {/* Post a question */}
        {/* </p> */}
      </CustomModal>
      
    </Container>
  )
}
