'use client'
import { Input, Card, CardBody, Image, CardHeader } from '@nextui-org/react'
import React, { useState } from 'react'
import { LuSearch } from 'react-icons/lu'

export const ListAnnonce = ({ annonces = [] }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = e => {
    setSearchTerm(e.target.value)
  }

  const filteredCards = annonces.filter(annonce =>
    annonce.attributes.Title && annonce.attributes.Title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleClear = () => {
    setSearchTerm('')
  }

  return (
    <section className='container mx-auto p-6 w-full mt-10'>
      <h1 className='text-4xl font-bold mb-8 capitalize'>Liste des évènements</h1>

      <Input
        value={searchTerm}
        onChange={handleSearchChange}
        onClear={handleClear}
        clearable
        radius='lg'
        placeholder='Rechercher une annonce...'
        startContent={<LuSearch />}
      />

      <div className='flex gap-6 flex-wrap justify-center mt-8'>
        {filteredCards.map((annonce) => (
          <Card key={annonce.id} className='py-4 my-2 max-w-xs hover:-translate-y-3 cursor-pointer'>
            <CardHeader className='pb-0 pt-2 px-4 flex-col items-start gap-2'>
              <div className='flex justify-between w-full items-center'>
                <p className='text-bold text-primary'>{annonce.attributes.Title}</p>
              </div>
            </CardHeader>
            <CardBody className='overflow-visible py-2 flex justify-center'>
              <Image
                alt='Card background'
                className='object-cover rounded-xl'
                src={annonce.image}
                width='100%'
                height='auto'
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </section>

  )
}
