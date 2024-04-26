import { Input } from '@nextui-org/react'
import { GET_PROJECTS } from '@/graphql/queries/projects'
import { LuSearch } from 'react-icons/lu'
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
        <div className='flex justify-center place-content-center items-center pt-4 w-full'>
          <Input
            label='Recherche'
            isClearable
            radius='lg'
            classNames={{
              label: 'text-black/50 dark:text-white/90',
              input: [
                'bg-transparent',
                'text-black/90 dark:text-white/90',
                'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                ''
              ],
              innerWrapper: 'bg-transparent',
              inputWrapper: [
                'shadow-xl',
                'bg-default-200/50',
                'dark:bg-default/60',
                'backdrop-blur-xl',
                'backdrop-saturate-200',
                'hover:bg-default-200/70',
                'dark:hover:bg-default/70',
                'group-data-[focused=true]:bg-default-200/50',
                'dark:group-data-[focused=true]:bg-default/60',
                '!cursor-text'
              ]
            }}
            placeholder='Recherchez un projet...'
            startContent={
              <LuSearch className='text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0' />
}
          />
        </div>
      </div>

      <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12'>
        {/** Ajouter les cartes de projets ici **/}
        <ListProjects projects={data} />
      </div>
    </div>
  )
}
