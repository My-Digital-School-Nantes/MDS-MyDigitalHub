'use client'
import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from '@nextui-org/react'

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

  return (
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
            <h1 className='text-4xl text-center my-8'>{jobOffer.title}</h1>
            <p>Description:</p>
            {jobOffer.description && jobOffer.description.map((paragraph, index) => (
              <p key={index}>{paragraph.children.map(child => child.text)}</p>
            ))}
            <p>Skills: {jobOffer.skills.join(', ')}</p>
            <p>Education: {jobOffer.education.join(', ')}</p>
            <p>Start Date: {jobOffer.start_date}</p>
          </>
        )}
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href='https://github.com/nextui-org/nextui'
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  )
}
