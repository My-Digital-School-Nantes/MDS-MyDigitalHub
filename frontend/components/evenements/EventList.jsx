'use client'
import { useState } from 'react'
import { Card, CardHeader, CardBody, Image, Chip, Input } from '@nextui-org/react'
import { LuSearch } from 'react-icons/lu'

const evenements = [
  {
    eventId: 1,
    name: 'Super evenement de la mort qui tue sa grand mere ez eza e ',
    tags: ['devoir', 'test', "vie d'école"],
    content: 'ezlahe jah e z lhazj enz,ae njza lza jkaje lazj kjeza je jklzj a ',
    image: '/assets/events/chat1.png',
    date: '12/03/2023'
  },
  {
    eventId: 2,
    name: 'event 2',
    tags: ['devoir', 'amour', "vie d'école"],
    content: 'eklj aze lazje laj ',
    image: '/assets/events/chat2.png',
    date: '12/03/2023'
  },
  {
    eventId: 3,
    name: 'event 3',
    tags: ['devoir', 'sport', "vie d'école"],
    content: ' jlezaje azj kae jl',
    image: '/assets/events/chat3.jpg',
    date: '12/03/2023'
  },
  {
    eventId: 4,
    name: 'event 4',
    tags: ['devoir', 'sport', "vie d'école"],
    content: 'ejlk zajej azj ekla',
    image: '/assets/events/chat3.jpg',
    date: '09/03/2023'
  },
  {
    eventId: 5,
    name: 'event 5',
    tags: ['love', 'sport', "vie d'école"],
    content: ' eklzajle kzakl jeza',
    image: '/assets/events/chat3.jpg',
    date: '12/04/2023'
  }
]

export function EventList () {
  const [searchTerm, setSearchTerm] = useState('')

  // Gestion du changement de l'input de recherche
  const handleSearchChange = e => {
    setSearchTerm(e.target.value)
  }

  // Fonction pour filtrer les événements par nom, contenu ou tags
  const filteredEvents = evenements.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const handleClear = () => {
    setSearchTerm('')
  }
  return (
    <section className='container mx-auto w-fit p-6'>
      <h1 className='text-4xl font-bold mb-8 capitalize'>Liste des évènements</h1>
      <Input
        value={searchTerm}
        onChange={handleSearchChange}
        onClear={handleClear}
        isClearable
        radius='lg'
        classNames={{
          label: 'text-black/50 dark:text-white/90',
          input: [
            'bg-transparent',
            'text-black/90 dark:text-white/90',
            'placeholder:text-default-700/50 dark:placeholder:text-white/60'
          ],
          innerWrapper: 'bg-transparent',
          inputWrapper: [
            'shadow-xl',
            'bg-default-200/50',
            'dark:bg-default/60',
            'backdrop-blur-xl',
            'backdrop-saturate-200',
            'hover:bg-default-200/70',
            'dark:hover:bg-default/70',
            'group-data-[focused=true]:bg-default-200/50',
            'dark:group-data-[focused=true]:bg-default/60',
            '!cursor-text'
          ]
        }}
        placeholder='Type to search...'
        startContent={<LuSearch />}
      />

      <div className='flex gap-6 flex-wrap justify-center mt-8'>
        {filteredEvents.map(event => (
          <Card key={event.eventId} className='py-4 my-2 max-w-xs hover:-translate-y-3 cursor-pointer'>
            <CardHeader className='pb-0 pt-2 px-4 flex-col items-start gap-2'>
              <p className='text-bold text-primary'>{event.date}</p>
              <p className='text-large capitalize font-bold'>{event.name}</p>
              <h4 className='font-light text-secondary-300 truncate w-64'>{event.content}</h4>
              <div className='flex gap-2 flex-wrap'>
                {event.tags.map(tag => (
                  <Chip key={tag} variant='flat' color='primary' className='text-xs capitalize'>{tag}</Chip>
                ))}
              </div>
            </CardHeader>
            <CardBody className='flex justify-center items-center overflow-visible py-2'>
              <Image
                alt={`Image de l'événement ${event.name}`}
                className='object-cover rounded-xl h-48 w-full'
                src={event.image}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  )
}
