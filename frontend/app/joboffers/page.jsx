'use client'
import React, { useState, useEffect } from 'react'
import {
  Card, CardHeader, CardBody, CardFooter, Divider, Image,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Tooltip
  , Input
  , ScrollShadow
} from '@nextui-org/react'

import { LuSearch, LuFilter } from 'react-icons/lu'

export default function JobOffers () {
  const [jobOffers, setJobOffers] = useState([])

  useEffect(() => {
    fetch('http://localhost:1337/api/offers')
      .then(response => response.json())
      .then(data => {
        console.log('Data fetched:', data)
        setJobOffers(data.data)
      })
      .catch(error => console.error('Error fetching job offers:', error))
  }, [])

  const colors = [
    'default', 'primary', 'secondary', 'success', 'warning', 'danger', 'foreground'
  ]

  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = e => {
    setSearchTerm(e.target.value)
  }

  const filteredEvents = jobOffers.filter(jobOffer =>
    jobOffer.attributes.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleClear = () => {
    setSearchTerm('')
  }

  return (
    <>
      <h1 className='text-4xl text-center my-8'>MDS Job Offers</h1>
      <div>
        <Input
          value={searchTerm}
          onChange={handleSearchChange}
          onClear={handleClear}
          label='Search'
          isClearable
          radius='lg'
          classNames={{
            label: 'text-black/50 dark:text-white/90',
            input: [
              'bg-transparent', 'text-black/90 dark:text-white/90',
              'placeholder:text-default-700/50 dark:placeholder:text-white/60'
            ],
            innerWrapper: 'bg-transparent',
            inputWrapper: [
              'shadow-xl', 'bg-default-200/50', 'dark:bg-default/60',
              'backdrop-blur-xl', 'backdrop-saturate-200',
              'hover:bg-default-200/70', 'dark:hover:bg-default/70',
              'group-data-[focused=true]:bg-default-200/50',
              'dark:group-data-[focused=true]:bg-default/60', '!cursor-text'
            ]
          }}
          placeholder='Type to search...'
          startContent={
            <LuSearch className='text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0' />
          }
        />
      </div>
      <br />
      <div className='cards flex gap-4'>
        {jobOffers && filteredEvents.map((jobOffer, index) => (
          <Card key={index}>
            <CardHeader className='flex gap-3'>
              <Image
                alt='mds logo'
                height={40}
                radius='sm'
                src='http://localhost:1337/uploads/logomds_c5516472bc.webp'
                width={40}
              />
              <div className='flex flex-col'>
                <p className='text-md'>My Digital School</p>
                <p className='text-small text-default-500'>mydigitalschool.com</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className=''>
              <h2 className='text-xl text-center my-8'>{jobOffer.attributes.title}</h2>
              <div className='description flex flex-col gap-3 justify-normal'>
                <p><strong>Description:</strong></p>
                <ScrollShadow className='w-[300px] h-[200px] overflow-auto'>
                  <div>
                    {jobOffer.attributes.description && jobOffer.attributes.description.map((paragraph, index) => (
                      <p key={index}>{(paragraph.children.map(child => child.text))}</p>
                    ))}
                  </div>
                </ScrollShadow>
                <p><strong>Skills:</strong></p>
                <div className='flex flex-wrap gap-4'>
                  {jobOffer.attributes.skills.map((skill, index) => (
                    <Tooltip key={index} content={skill}>
                      <Button variant='flat' color={colors[index % colors.length]} className='capitalize'>
                        {skill}
                      </Button>
                    </Tooltip>
                  ))}
                </div>
                <p><strong>Education:</strong> {jobOffer.attributes.education.join(', ')}</p>
                <p><strong>Start Date:</strong> {jobOffer.attributes.start_date}</p>
              </div>
            </CardBody>
            <Divider />
            <CardFooter>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant='bordered'>Actions</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label='Static Actions'>
                  <DropdownItem key='new'>Apply</DropdownItem>
                  <DropdownItem key='copy'>Add to favorite</DropdownItem>
                  <DropdownItem key='edit'>Share offer</DropdownItem>
                  <DropdownItem key='delete' className='text-danger' color='danger'>
                    Hide offer
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}
