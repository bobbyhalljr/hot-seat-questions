import { Box, Text, Link as ChakraLink } from '@chakra-ui/core'

const Footer = (props) => {
    return (
        <Box {...props} d='flex' mx={6} textAlign='center' fontSize={['lg', 'xl']} py={48}>
            <Text fontWeight='medium'>Made with <span>❤️ </span> and hard work by: <ChakraLink color='red.500' href='https://bobbybytez.io'>Bobby Hall Jr</ChakraLink></Text>
        </Box>
    )
}

export default Footer
