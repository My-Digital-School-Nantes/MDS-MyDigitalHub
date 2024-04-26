'use client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

// Créer une instance d'Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql', // Spécifier l'URL de votre endpoint GraphQL
  cache: new InMemoryCache()
})

export default function JobOfferDisplay ({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
