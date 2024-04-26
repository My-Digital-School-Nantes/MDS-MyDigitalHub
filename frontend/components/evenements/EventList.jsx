'use client'
import { useState } from 'react'
import { Card, CardHeader, CardBody, Image, Chip, Input } from '@nextui-org/react'
import { LuSearch } from 'react-icons/lu'

export function EventList ({ events = [] }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = e => {
    setSearchTerm(e.target.value)
  }

  // Fonction pour filtrer les événements par nom, contenu ou tags
  const filteredEvents = events.filter(event =>
    event.attributes.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.attributes.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.attributes.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
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
        isClearables
        radius='lg'
        placeholder='Type to search...'
        startContent={<LuSearch />}
      />

      <div className='flex gap-6 flex-wrap justify-center mt-8'>
        {filteredEvents.map(event => event && (
          <Card key={event.id} className='py-4 my-2 max-w-xs hover:-translate-y-3 cursor-pointer'>
            <CardHeader className='pb-0 pt-2 px-4 flex-col items-start gap-2'>
              <p className='text-bold text-primary'>{event.attributes.date}</p>
              <p className='text-large capitalize font-bold'>{event.attributes.name}</p>
              <h4 className='font-light text-secondary-300 truncate w-64'>{event.attributes.content}</h4>
              <div className='flex gap-2 flex-wrap'>
                {event?.attributes.tags && event?.attributes.tags.length > 0 && event.attributes.tags.map(tag => (
                  <Chip key={tag} variant='flat' color='primary' className='text-xs capitalize'>{tag}</Chip>
                ))}
              </div>
            </CardHeader>
            <CardBody className='flex justify-center items-center overflow-visible py-2'>
              <Image
                alt={`Image de l'événement ${event.attributes.name}`}
                className='object-cover rounded-xl h-48 w-full'
                src={`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'}${event.attributes.image.data.attributes.url}`}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  )
}
