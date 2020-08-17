import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/client'

import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import theme from '../theme'

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
    </ThemeProvider>
    </ApolloProvider>
  )
}

// function MyApp({ Component, pageProps }) {
//   return (
//     <ThemeProvider theme={theme}>
//       <ColorModeProvider>
//         <CSSReset />
//         <Component {...pageProps} />
//       </ColorModeProvider>
//     </ThemeProvider>
//   )
// }

// export default MyApp
