import client from '@/graphql/apolloClient'
import { LOGIN_MUTATION } from '@/graphql/mutations/auth'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Connexion par Email',
      credentials: {
        email: { label: 'Adresse Email', type: 'email' },
        password: { label: 'Mot de passe', type: 'password' }
      },
      async authorize (credentials, req) {
        if (credentials === null) return null
        console.log(credentials)
        try {
          const result = await client.mutate({
            mutation: LOGIN_MUTATION,
            variables: {
              identifier: credentials.email,
              password: credentials.password
            }
          })
          console.log(result)

          if (result && result.data && result.data.login) {
            return result.data.login.user
          } else {
            return null
          }
        } catch (error) {
          console.error(error)
          return null
        }

        // TODO implémenter la fonction de login
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    job: '/joboffers'
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
})

export { handler as GET, handler as POST }
