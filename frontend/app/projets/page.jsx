import { CardProject } from '@/components/projetsComponents/CardProject'
import React from 'react'
import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { LuSearch, LuTerminal, LuPencilLine, LuPalette, LuAreaChart } from 'react-icons/lu'
import { GET_PROJECTS } from '@/graphql/queries/projects'
import CardSkeleton from '@/components/projetsComponents/CardSkeleton'
import client from '@/graphql/apolloClient'
const tri = [{
  title: 'date',
  id: '1'
},
{
  title: 'popularité',
  id: '2'
}
]
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
  // const [searchTerm, setSearchTerm] = useState('')
  // const [selectedCategory, setSelectedCategory] = useState('')

  // const handleCategoryFilter = (category) => {
  //   setSelectedCategory(category)
  // }

  // const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value.toLowerCase())
  // }

  // const filteredProjects = Object.values(projets).filter((projet) => {
  //   const titleMatches = projet.title.toLowerCase().includes(searchTerm)
  //   const categoryMatches = selectedCategory === '' || projet.category === selectedCategory
  //   return titleMatches && categoryMatches
  // })
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
          {/* <Select
            label='Trier par'
            className='max-w-xs'
          >
            {tri.map((type) => (
              <SelectItem key={type.id}>
                {type.title}
              </SelectItem>
            ))}
          </Select> */}
        </div>
        {/* <div className='flex gap-3 justify-center items-center mt-5 sm:mt-10 w-full'>

          <Button className='m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border  border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800' onClick={() => handleCategoryFilter('')}>
            <svg className='flex-shrink-0 size-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' /></svg>
            Tous les projets
          </Button>
          <Button className='m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border' startContent={<LuTerminal />} onClick={() => handleCategoryFilter('Dev')}>
            DEV
          </Button>
          <Button className='m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border' startContent={<LuPencilLine />} onClick={() => handleCategoryFilter('Ux/ui')}>
            UX/UI
          </Button>
          <Button className='m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border' startContent={<LuPalette />} onClick={() => handleCategoryFilter('DA')}>
            DA
          </Button>
          <Button className='m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border' startContent={<LuAreaChart />} onClick={() => handleCategoryFilter('Marketing')}>
            Marketing
          </Button>

        </div> */}
      </div>

      <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12'>
        {/** Ajouter les cartes de projets ici **/}
        <div className='grid grid-cols-2 gap-4'>
          {data && data.map((projet) => <CardProject key={projet.id} projet={projet.attributes} />)}

        </div>

      </div>
    </div>
  )
}
