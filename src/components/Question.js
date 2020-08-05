import { Box, Heading, Text, Stack, useColorMode, Badge, Avatar, Link as ChakraLink, Icon } from '@chakra-ui/core'

function Question({ title, desc, ...rest }) {
  const { colorMode } = useColorMode()
  const bgColor = {light: 'gray.100', dark: 'gray.700'}
  const color = {light: 'gray.800', dark: 'white'}

    return (
      <Box p={5} shadow="lg" rounded='lg' bg={bgColor[colorMode]} color={color[colorMode]} borderWidth="4px #f1f1f1" {...rest}>
        <Badge rounded="full" px={2} py={1} my={3} variantColor="teal">
            JavaScript
          </Badge>
        <Heading fontSize="2xl">{title}</Heading>
        <Text fontSize='md' mt={4}>{desc}</Text>
        <Stack isInline align='center'>
          <Avatar
            my={6}
            size="md"
            name="Prosper Otemuyiwa"
            src="https://bit.ly/prosper-baba"
          />
          <Stack>
            <Text fontWeight='semibold'>Mario Wayne</Text>
            <Text color='gray.500' fontWeight='semibold'>Software Engineer</Text>
          </Stack>
        </Stack>
        <ChakraLink href='#' flexGrow={1} mx={2} color='red.500' fontWeight='semibold' fontSize='lg'>
          View Full Question <Icon name='arrow-forward' size='24px' color='red.500'/>
        </ChakraLink>
      </Box>
    );
}

function StackEx() {
  return (
    <Stack spacing={8} mx={4} mb={24}>
      <Text fontSize='2xl' fontWeight='semibold'>Questions:</Text>
      <Question
        title="Plan Money"
        desc="The future can be even brighter but a goal without a plan is just a wish"
      />
      <Question
        title="Save Money"
        desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
      />
      <Question
        title="Plan Money"
        desc="The future can be even brighter but a goal without a plan is just a wish"
      />
      <Question
        title="Save Money"
        desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
      />
    </Stack>
  );
}

export default StackEx