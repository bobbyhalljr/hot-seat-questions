import { Stack, Text } from '@chakra-ui/core'

export const Hero = ({ title, subTitle }) => (
  <Stack spacing={[8, 12]} maxWidth="52rem" mx={4} mt={['6rem', '10rem']} mb={['3rem', '4rem', '7rem']}>
    <Text fontWeight='extrabold' letterSpacing={0.1} fontSize={["2.5rem", "3.5rem"]}>{title}</Text>
    <Text letterSpacing={1.2} fontWeight='medium' fontSize={["1.5rem", "2rem"]}>{subTitle}</Text>
  </Stack>
)

Hero.defaultProps = {
  title: 'Hot Seat Questions 🔥',
  subTitle: 'Where software Developers and Engineers post real technical and behavioral interview questions'
}
