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

        const result = await client.mutate({
          mutation: LOGIN_MUTATION,
          variables: {
            identifier: credentials.email,
            password: credentials.password
          }
        })

        console.log(result)

        // TODO implémenter la fonction de login
      }
    })
  ]
})

export { handler as GET, handler as POST }
