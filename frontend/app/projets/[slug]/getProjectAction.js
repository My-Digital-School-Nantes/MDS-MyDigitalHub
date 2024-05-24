import client from '@/graphql/apolloClient'
import { GET_PROJECT } from '@/graphql/queries/projects'

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
