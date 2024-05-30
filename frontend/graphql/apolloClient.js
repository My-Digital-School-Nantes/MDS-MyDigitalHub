import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  from
} from '@apollo/client'
// import { setContext } from '@apollo/client/link/context'

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`
})

const client = new ApolloClient({
  link: from([httpLink]),
  ssrMode: true,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache'
    },
    watchQuery: {
      fetchPolicy: 'no-cache'
    }
  }
})

export default client

// export const ApolloProviderWrapper = ({ children }) => {
//   const client = useMemo(() => {
//     // const authMiddleware = setContext(async (operation, { headers }) => {
//     //   const { token } = await fetch('/api/auth/token').then(res => res.json())

//     //   return {
//     //     headers: {
//     //       ...headers,
//     //       authorization: `Bearer ${token}`
//     //     }
//     //   }
//     // })

//     return new ApolloClient({
//       link: from([httpLink]),
//       cache: new InMemoryCache()
//     })
//   }, [])

//   return <ApolloProvider client={client}>{children}</ApolloProvider>
// }
