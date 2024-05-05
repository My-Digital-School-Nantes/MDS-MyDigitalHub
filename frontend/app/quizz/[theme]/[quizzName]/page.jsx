import client from '@/graphql/apolloClient'
import { GET_QUIZZ, GET_AVATARS } from '@/graphql/queries/quizz'
import CardPage from '@/components/quizz/CardPage'

export const getData = async (slug) => {
  try {
    const response = await client.query({
      query: GET_QUIZZ,
      variables: {
        slug
      }
    })
    return response.data.quizzes.data[0]
  } catch (error) {
    console.error(error)
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
      {quizzData
        ? (
          <CardPage quizzData={quizzData} avatars={avatars} />
          )
        : (
          <div className='p-80 text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200 text-center'>
            <h1>La page que vous avez demandé n'existe pas</h1>
          </div>
          )}
    </>
    // <CardPage quizzData={quizzData} avatars={avatars} />
  )
}
