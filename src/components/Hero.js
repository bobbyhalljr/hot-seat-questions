import { Flex, Heading } from '@chakra-ui/core'

export const Hero = ({ title }) => (
  <Flex justifyContent="left" alignItems="left" textAlign='left' mt={16} mb={8}>
    <Heading fontSize="2.5rem" px={4}>{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'Hot Seat Questions 🔥',
}
