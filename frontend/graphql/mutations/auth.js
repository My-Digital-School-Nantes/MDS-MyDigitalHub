import { gql } from '@apollo/client'

const LOGIN_MUTATION = gql`
mutation credentialsLogin($identifier: String!, $password: String!) {
  login(input: { identifier: $identifier, password: $password }) {
    jwt
    user {
      id
      username
      email
    }
  }
}
`
export {
  LOGIN_MUTATION
}
