'use client'
import React, { useState } from 'react'
import { Card, CardBody, Image, CardHeader, Input } from '@nextui-org/react'

const CardAnnonce = ({ cardsData }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCards = cardsData.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div className='mb-4'>
        <Input
          type='text' placeholder='Recherche par annonce...' value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='flex flex-wrap justify-center -m-2'>
        {filteredCards.map((card, index) => (
          <div className='p-2 w-1/4' key={index}>
            <Card className='border border-gray-700 rounded-xl'>
              <CardHeader className='pb-0 pt-2 px-4 flex-col items-center'>
                <h6 className='font-bold text-large text-center'>{card.title}</h6>
                <small className='pt-3 text-default-500 text-center'>{card.description}</small>
                <small className='text-default-500 text-center'>{card.sport}</small>
                <small className='pb-3 text-default-500 text-center'>{card.niveau}</small>
                <small className='pb-3 text-default-500 text-center'>{card.date}</small>
                <small className=' text-default-500 text-center'>{card.contact}</small>
              </CardHeader>
              <CardBody className='overflow-visible py-2 flex justify-center'>
                <Image
                  alt='Card background'
                  className='object-cover rounded-xl'
                  src={card.image}
                  width='100%'
                  height='auto'
                />
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardAnnonce
