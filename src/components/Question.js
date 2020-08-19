import { Box, Heading, Text, Stack, useColorMode, Badge, Avatar, Link as ChakraLink, Icon } from '@chakra-ui/core'

function Question({ title, description, href, language, name, jobTitle,  ...rest }) {
  const { colorMode } = useColorMode()
  const bgColor = {light: 'gray.100', dark: 'gray.700'}
  const color = {light: 'gray.800', dark: 'white'}

    return (
      <Box p={5} mx={4} shadow="lg" rounded='lg' bg={bgColor[colorMode]} color={color[colorMode]} borderWidth="4px #f1f1f1" {...rest}>
        <Badge rounded="full"  px={2} py={1} my={4} variantColor="teal">
          {language || 'No Language specified'}
        </Badge>
        <Heading fontSize="2xl">{title}</Heading>
        <Text fontSize='lg' my={3}>{description}</Text>
        <Stack isInline align='center'>
          <Avatar
            my={4}
            mb={6}
            size="md"
            name={name}
            src={null}
          />
          <Stack spacing={0.5} letterSpacing='1.6'>
            <Text fontWeight='semibold'>{name}</Text>
            <Text color='gray.400' fontWeight='semibold'>{jobTitle}</Text>
          </Stack>
        </Stack>
        <ChakraLink href='#' flexGrow={1} mx={2} my={4} color='red.500' fontWeight='semibold' fontSize='lg'>
          View Full Question <Icon name='arrow-forward' size='24px' color='red.500'/>
        </ChakraLink>
      </Box>
    );
}

function StackEx() {
  return (
    <Stack spacing={8} mx={4} mb={24}>
      <Text fontSize='3xl' fontWeight='semibold'>Questions:</Text>
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

export default Question