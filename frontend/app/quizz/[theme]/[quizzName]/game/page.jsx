import client from '@/graphql/apolloClient'
import { QuizzQuestion } from '@/components/quizz/QuizzQuestion'
import { GET_QUIZZ_QUESTIONS } from '@/graphql/queries/quizz'

export const getQuizz = async (quizz) => {
  try {
    const response = await client.query({
      query: GET_QUIZZ_QUESTIONS,
      variables: {
        quizzName: quizz
      }
    })
    return response.data.quizzes.data[0].attributes
  } catch (error) {
    console.error(error)
  }
}

export default async function Page ({ params: url }) {
  const quizzes = await getQuizz(url.quizzName)
  return (
    <QuizzQuestion params={quizzes} />
  )
}
