import QuizzesList from '@/components/quizz/QuizzesList'
import client from '@/graphql/apolloClient'
import { QUIIZZ_BY_THEME } from '@/graphql/queries/quizz/quizzByTheme'

export const getData = async () => {
  try {
    const response = await client.query({
      query: QUIIZZ_BY_THEME
    })
    return response.data.quizzes.data
  } catch (error) {
    console.error(error)
  }
}

export default async function QuizzByThemePage () {
  const data = await getData()

  return (
    <>
      <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24 '>
        <div className='text-center'>
          <h1 className='text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200'>
            Nos
            <span className='bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text '> quizz </span> de nos étudiants
          </h1>

          <p className='mt-3 text-gray-600 dark:text-gray-400'>
            Au sein de notre établissement, pour familiariser les étudiants avec les métiers du numérique, nous avons mis en place des quizz.
          </p>
        </div>
      </div>
      <QuizzesList data={data} />
    </>
  )
}
