import { Flex, Heading } from '@chakra-ui/core'

export const Hero = ({ title }) => (
  <Flex justifyContent="flex-start" alignItems="start" textAlign='left' mt={16} mb={8}>
    <Heading fontSize="2.5rem">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'Hot Seat Questions 🔥',
}
