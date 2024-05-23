import { GET_OFFERS } from '@/graphql/queries/queries'
import client from '@/graphql/apolloClient'

export const getData = async () => {
  try {
    const response = await client.query({
      query: GET_OFFERS
    })
    console.log('Response of getData GET_OFFERS : ', response.data.offers.data)
    return response.data.offers.data
  } catch (error) {
    console.error(error)
  }
}
