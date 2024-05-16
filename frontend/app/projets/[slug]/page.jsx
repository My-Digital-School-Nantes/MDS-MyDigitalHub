'use client'
import client from '@/graphql/apolloClient'
import { GET_PROJECT } from '@/graphql/queries/projects'
import { useParams } from 'next/navigation'
export async function getData (slug) {
  try {
    const response = await client.query({
      query: GET_PROJECT,
      variables: { slug }
    })
    return response.data.projects.data
  } catch (error) {
    console.error(error)
  }
}

export const dynamic = 'force-dynamic'

export default async function Projets () {
  const router = useParams()
  const { slug } = router
  const projet = await getData(slug)
  console.log(projet)
  console.log(slug)
  console.log(router)
  return (
    <div className='bg-white dark:bg-black/70 rounded-lg shadow-lg'>
      Mega surpise
      <div className='relative'>
        <img
          src='http://localhost:1337/uploads/IMG_20210915_131759'
          alt={projet.title}
          className='w-full h-64 object-cover rounded-t-lg'
        />
        <div className='absolute top-0 left-0 bg-gradient-to-r from-primary to-blue-400 text-white p-2 rounded-bl-lg'>
          {projet.category}
        </div>
      </div>
      <div className='p-4'>
        <h2 className='text-xl font-bold text-gray-800 dark:text-gray-200'>{projet.title}</h2>
        <p className='text-gray-600 dark:text-gray-400'>{projet.description}</p>
      </div>
    </div>
  )
}
