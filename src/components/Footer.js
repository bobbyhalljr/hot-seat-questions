import { Box, Text, Link as ChakraLink } from '@chakra-ui/core'

const Footer = (props) => {
    return (
        <Box {...props} d='flex' textAlign='center' fontSize={['lg', 'xl']} py={48}>
            <Text fontWeight='medium'>Made with ❤️ and Hard Work & Love by: <ChakraLink color='red.500' href='https://bobbybytez.io'>Bobby Hall Jr</ChakraLink></Text>
        </Box>
    )
}

export default Footer
