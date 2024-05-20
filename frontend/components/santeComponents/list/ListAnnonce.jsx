'use client'
import React, { useState } from 'react'
import { Button, Input, Card, CardBody, CardHeader, CardFooter, Divider, Chip } from '@nextui-org/react'
import { MdDirectionsRun } from 'react-icons/md'
import { LuSearch } from 'react-icons/lu'
import ModalAnnonce from '@/components/santeComponents/modal/Modal'
import { addAnnonce } from '@/app/api/santeApi'

const formatDate = (isoString) => {
  const date = new Date(isoString)
  return date.toLocaleString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
}

export const ListAnnonce = ({ InitAnnonces }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalOpen, setModalOpen] = useState(false)
  const [annonces, setAnnonces] = useState(InitAnnonces)

  const handleAddAnnonce = async (newAnnonce) => {
    try {
      const addedAnnonce = await addAnnonce(newAnnonce)
      console.log(addedAnnonce)
      if (addedAnnonce) {
        setAnnonces(prevAnnonces => [addedAnnonce, ...prevAnnonces])
      }
    } catch (error) {
      console.error('Error adding annonce: ', error)
    }
  }

  const handleSearchChange = e => {
    setSearchTerm(e.target.value)
  }

  const filteredCards = annonces.filter(annonce =>
    annonce.attributes.title && annonce.attributes.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleClear = () => {
    setSearchTerm('')
  }
  const handleOpenModal = () => {
    setModalOpen(true)
  }
  return (
    <section className='container mx-auto p-6 w-full mt-10'>
      <div className='flex items-center justify-between'>
        <div className='w-28' />
        <div className='text-center my-12 capitalize'>
          <h3 className='text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200'>
            Annonce
            <span className='bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text '> partenaires de sport </span>
          </h3>
        </div>
        <div className='pr-8'>
          <Button auto color='primary' onPress={handleOpenModal}>Ajouter</Button>
        </div>
      </div>
      <ModalAnnonce isOpen={isModalOpen} onOpenChange={setModalOpen} onAdd={handleAddAnnonce} />
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
          <Card key={annonce.id} className='max-w-[400px] border border-gray-700 rounded-xl hover:-translate-y-3 cursor-pointer'>
            <CardHeader className='flex gap-3'>
              <MdDirectionsRun className='text-4xl pointer-events-none flex-shrink-0' />
              <div className='flex flex-col'>
                <p className='text-lg text-bold text-primary'>{annonce.attributes.title}</p>
                <div className='flex gap-2 pt-3'>
                  <Chip color='primary'>{annonce.attributes.sport}</Chip>
                  <Chip color='primary'>{annonce.attributes.niveau}</Chip>
                </div>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>{annonce.attributes.description}</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <div className='flex flex-col'>
                <p className='text-bold text-primary'>{formatDate(annonce.attributes.date)}</p>
                <p className='text-bold text-primary'>{annonce.attributes.contact}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
