'use client'
import { useEffect, useState } from 'react'
import { CardProject } from './CardProject'
import Search from './Search'
import client from '@/graphql/apolloClient'
import { GET_PROJECTS } from '@/graphql/queries/projects'
export const ListProjects = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [projects, setProjects] = useState(data)

  useEffect(() => {
    async function fetchData () {
      try {
        const response = await client.query({
          query: GET_PROJECTS,
          variables: { searchTerm }
        })
        const result = response?.data?.projects?.data
        setProjects(result)
        console.log(result)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [searchTerm])

  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 '>
        {projects && projects.map((projet) => (
          <CardProject key={projet.id} projet={projet.attributes} />
        ))}
      </div>
    </>
  )
}
