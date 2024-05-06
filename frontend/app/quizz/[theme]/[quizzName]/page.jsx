import CardPage from '@/components/quizz/CardPage'
import client from '@/graphql/apolloClient'
import { GET_AVATARS, GET_QUIZZ } from '@/graphql/queries/quizz'

export const getData = async (slug) => {
  try {
    const response = await client.query({
      query: GET_QUIZZ,
      variables: {
        slug
      }
    })

    if (response.data.quizzes.data.length === 0) {
      throw new Error('Quizz not found', { statusCode: 404 })
    }

    return response.data.quizzes.data[0]
  } catch (error) {
    console.error(error)
    throw new Error('Quizz not found', { statusCode: 404 })
  }
}

export const getAvatars = async () => {
  try {
    const response = await client.query({
      query: GET_AVATARS
    })
    return response.data.uploadFiles.data
  } catch (error) {
    console.error(error)
  }
}

export default async function QuizzIdPage ({ params: { quizzName } }) {
  const quizzData = await getData(quizzName)
  const avatars = await getAvatars()

  return (
    <>
      <CardPage quizzData={quizzData} avatars={avatars} />
    </>
  )
}
