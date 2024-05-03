import client from '@/graphql/apolloClient'
import { QUIZZ_INFOS } from '@/graphql/queries/quizz'
import CardPage from '@/components/quizz/CardPage'

export const getData = async () => {
  try {
    const response = await client.query({
      query: QUIZZ_INFOS,
      variables: {
        id: 2
      }
    })
    console.log(response.data.quizz.data)
    return response.data.quizz.data
  } catch (error) {
    console.error(error)
  }
}

export default async function QuizzIdPage () {
  const quizzData = await getData()

  return (
    <CardPage quizzData={quizzData} />
  )
}
