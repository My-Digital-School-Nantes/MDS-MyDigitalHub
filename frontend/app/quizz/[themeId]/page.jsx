import QuizzesList from '@/components/quizz/QuizzesList'
import client from '@/graphql/apolloClient'
import { QUIZZ_THEME } from '@/graphql/queries/quizz/quizzTheme'

export const getData = async () => {
  try {
    const response = await client.query({
      query: QUIZZ_THEME
    })
    return response.data.quizzes.data
  } catch (error) {
    console.error(error)
  }
}

export default async function ThemePage () {
  const data = await getData()

  return (
    <div>
      <h1 className='text-4xl text-center my-8'>Nos Quizz</h1>
      <QuizzesList data={data} />
    </div>
  )
}
