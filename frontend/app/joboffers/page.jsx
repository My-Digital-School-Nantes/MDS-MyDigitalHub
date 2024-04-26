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
} from '@nextui-org/react'

export default function JobOffers () {
  const [jobOffer, setJobOffer] = useState(null)

  useEffect(() => {
    fetch('http://localhost:1337/api/offers/1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('Data fetched:', data)
        setJobOffer(data.data.attributes)
      })
      .catch(error => console.error('Error fetching job offer:', error))
  }, [])

  const colors = [
    'default',
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'foreground'
  ]

  return (

    <>
      <h1 className='text-4xl text-center my-8'>MDS Job Offers</h1>
      <Card className='max-w-[400px]'>
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
        <CardBody>
          {jobOffer && (
            <>
              <h2 className='text-xl text-center my-8'>{jobOffer.title}</h2>
              <div className='description flex flex-col gap-3'>
                <p><strong>Description:</strong></p>
                {jobOffer.description && jobOffer.description.map((paragraph, index) => (
                  <p key={index}>{paragraph.children.map(child => child.text)}</p>
                ))}
                <p><strong>Skills:</strong></p>
                <div className='flex flex-wrap gap-4'>
                  {jobOffer.skills.map((skill, index) => (
                    <Tooltip key={index} content={skill}>
                      <Button variant='flat' color={colors[index % colors.length]} className='capitalize'>
                        {skill}
                      </Button>
                    </Tooltip>
                  ))}
                </div>

                <p><strong>Education:</strong> {jobOffer.education.join(', ')}</p>
                <p><strong>Start Date:</strong> {jobOffer.start_date}</p>
              </div>
            </>
          )}
        </CardBody>
        <Divider />
        <CardFooter>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant='bordered'
              >
                Actions
              </Button>
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
    </>
  )
}
