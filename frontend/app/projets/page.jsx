// import { Input } from '@nextui-org/react'
import { GET_PROJECTS } from '@/graphql/queries/projects'
// import { LuSearch } from 'react-icons/lu'
import client from '@/graphql/apolloClient'
import { ListProjects } from '@/components/projetsComponents/ListProject'

export async function getData () {
  try {
    const response = await client.query({
      query: GET_PROJECTS
    })
    return response.data.projects.data
  } catch (error) {
    console.error(error)
  }
}
export const dynamic = 'force-dynamic'

export default async function Projets () {
  const data = await getData()
  console.log(data)
  return (
    <div>
      <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24 '>
        <div className='text-center'>
          <h1 className='text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200'>
            Découvrez les
            <span className='bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text '> projets </span> de nos étudiants
          </h1>

          <p className='mt-3 text-gray-600 dark:text-gray-400'>
            Au sein de notre établissement, les élèves ont su de part leur ingéniosité et leur créativité faire naître des projets
          </p>
        </div>
      </div>

      <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12'>
        {/** Ajouter les cartes de projets ici **/}
        <ListProjects data={data} />
      </div>
    </div>
  )
}
