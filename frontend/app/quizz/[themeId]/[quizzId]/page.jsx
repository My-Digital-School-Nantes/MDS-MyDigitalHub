import client from '@/graphql/apolloClient'
import { QUIZZ_INFOS, GET_AVATARS } from '@/graphql/queries/quizz'
import CardPage from '@/components/quizz/CardPage'

export const getData = async () => {
  try {
    const response = await client.query({
      query: QUIZZ_INFOS,
      variables: {
        id: 2
      }
    })
    return response.data.quizz.data
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

export default async function QuizzIdPage () {
  const quizzData = await getData()

  const avatars = await getAvatars()

  return (
    <CardPage quizzData={quizzData} avatars={avatars} />
  )
}
