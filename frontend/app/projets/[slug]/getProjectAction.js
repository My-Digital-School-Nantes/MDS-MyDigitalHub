import client from '@/graphql/apolloClient'
import { GET_PROJECT } from '@/graphql/queries/projects'
import { PROJECT_MUTATION } from '@/graphql/mutations/project'

export async function getProject (slug) {
  try {
    const response = await client.query({
      query: GET_PROJECT,
      variables: { slug }
    })
    return response.data.projects.data
  } catch (error) {
    console.error(error)
  }
}
export const dynamic = 'force-dynamic'

export async function IncrementVote (id, newVote) {
  try {
    const response = await client.query({
      query: PROJECT_MUTATION,
      variables: { id, newVote }
    })
    return response.data.projects.data
  } catch (error) {
    console.error(error)
  }
}
