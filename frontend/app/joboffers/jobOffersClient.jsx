'use client'

import { useState, useEffect } from 'react'
import { getData } from './dataFetcher'
import SearchInput from './searchInput'
import JobCard from './jobCard'
import AddJobOfferModal from '@/components/jobOfferAdd/addJobOfferModal'

const JobOffersClient = ({ initialData }) => {
  const [data, setData] = useState(initialData || [])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const result = await getData()
      setData(result || [])
      setIsLoading(false)
    }

    if (!initialData || initialData.length === 0) {
      fetchData()
    }
  }, [initialData])

  const handleSearchChange = e => {
    setSearchTerm(e.target.value)
  }

  const handleClear = () => {
    setSearchTerm('')
  }

  const filteredEvents = data.filter(item =>
    item.attributes.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <h1 className='text-4xl text-center my-8'>MDS Job Offers</h1>
      <div className='flex items-center justify-center space-x-2 my-4'>
        <SearchInput searchTerm={searchTerm} handleSearchChange={handleSearchChange} handleClear={handleClear} />
        <AddJobOfferModal />
      </div>
      <br />
      {isLoading
        ? (
          <p>Loading...</p>
          )
        : (
          <div className='cards flex flex-wrap gap-8'>
            {filteredEvents.map((item, index) => (
              <JobCard key={index} item={item} />
            ))}
          </div>
          )}
    </>
  )
}

export default JobOffersClient
