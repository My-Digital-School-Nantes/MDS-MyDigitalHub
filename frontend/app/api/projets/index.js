import client from '@/graphql/apolloClient'
import { gql } from '@apollo/client'

export async function getProjects () {
  try {
    const result = await client.query({
      query: gql`
        query {
          projets {
            id
            title
            description
            publishedDate
            image
            slug
            category
            vote
          }
        }
      `
    })
    if (result && result.data && result.data.login) {
      return result.data
    } else {
      return null
    }
  } catch (error) {
    console.error(error)
    return null
  }
}
