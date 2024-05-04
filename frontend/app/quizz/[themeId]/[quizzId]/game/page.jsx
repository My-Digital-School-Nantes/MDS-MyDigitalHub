import client from '@/graphql/apolloClient'
import { QuizzQuestion } from '@/components/quizz/QuizzQuestion'
import { GET_QUIZZ_QUESTION } from '@/graphql/queries/quizz'

export const getQuizz = async () => {
  try {
    const response = await client.query({
      query: GET_QUIZZ_QUESTION,
      variables: {
        id: 2
      }
    })
    return response.data.quizz.data.attributes
  } catch (error) {
    console.error(error)
  }
}

export default async function Page () {
  const quizzes = await getQuizz()

  return (
    <QuizzQuestion params={quizzes} />
  )
}
