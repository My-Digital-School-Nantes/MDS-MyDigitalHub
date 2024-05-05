import QuizzesList from '@/components/quizz/QuizzesList'
import client from '@/graphql/apolloClient'
import { GET_QUIZZ_BY_THEME } from '@/graphql/queries/quizz'

export const getData = async (theme) => {
  try {
    const response = await client.query({
      query: GET_QUIZZ_BY_THEME,
      variables: { themeName: theme }
    })

    return response.data.quizzes.data
  } catch (error) {
    console.error(error)

    throw new Error('Quiz not found', { statusCode: 404 })
  }
}

export default async function QuizzByThemePage ({ params: { theme } }) {
  const data = await getData(theme)

  return (
    <>
      {data
        ? (
          <>
            <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24 '>
              <div className='text-center'>
                <h1 className='text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200'>
                  Nos
                  <span className='bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text '> quizz </span> de nos étudiants
                </h1>

                <p className='mt-3 text-gray-600 dark:text-gray-400'>
                  Au sein de notre  établissement, pour familiariser les étudiants avec les métiers du numérique, nous avons mis en place ces quizzs.
                </p>
              </div>
            </div>
            <QuizzesList data={data} />
          </>
          )
        : (
          <div className='p-80 text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200 text-center'>
            <h1>Une erreur est survenue</h1>
          </div>
          )}
    </>
  )
}
