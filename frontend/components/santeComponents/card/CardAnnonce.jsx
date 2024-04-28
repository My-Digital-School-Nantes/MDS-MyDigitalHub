'use client'
import React, { useState } from 'react'
import { Card, CardBody, Image, CardHeader, Input } from '@nextui-org/react'

export const CardAnnonce = ({ annonce }) => {
  const [searchTerm, setSearchTerm] = useState('')

  // const filteredCards = annonces.filter(annonce =>
  //   annonce.attributes.Title.toLowerCase().includes(searchTerm.toLowerCase())
  // )
  console.log(annonce)
  return (
    <div>
      <div className='mb-4'>
        <Input
          type='text' placeholder='Recherche par annonce...' value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='flex flex-wrap justify-center -m-2'>

        <div className='p-2 w-1/4'>
          <Card className='border border-gray-700 rounded-xl'>
            <CardHeader className='pb-0 pt-2 px-4 flex-col items-center'>
              <h6 className='font-bold text-large text-center'>{annonce.Title}</h6>
              {/* <small className='pt-3 text-default-500 text-center'>{annonce.Description}</small>
              <small className='text-default-500 text-center'>{annonce.Sport}</small>
              <small className='pb-3 text-default-500 text-center'>{annonce.Niveau}</small>
              <small className='pb-3 text-default-500 text-center'>{annonce.Date}</small>
              <small className=' text-default-500 text-center'>{annonce.Contact}</small> */}
            </CardHeader>
            <CardBody className='overflow-visible py-2 flex justify-center'>
              {/* <Image
                  alt='Card background'
                  className='object-cover rounded-xl'
                  src={annonce.image}
                  width='100%'
                  height='auto'
                /> */}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}
