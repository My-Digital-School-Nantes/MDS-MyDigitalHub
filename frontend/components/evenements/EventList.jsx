import React from 'react'
import { Card, CardHeader, CardBody, Image, Chip } from '@nextui-org/react'

const evenements = [
  {
    eventId: 1,
    name: 'Super evenement de la mort qui tue sa grand mere ez eza e ',
    tags: ['devoir', 'sport', "vie d'école"],
    content: 'ezlahe jah e z lhazj enz,ae njza lza jkaje lazj kjeza je jklzj a ',
    image: '/assets/events/chat1.png',
    date: '12/03/2023'
  },
  {
    eventId: 2,
    name: 'event 2',
    tags: ['devoir', 'sport', "vie d'école"],
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
    date: '12/03/2023'
  },
  {
    eventId: 5,
    name: 'event 5',
    tags: ['devoir', 'sport', "vie d'école"],
    content: ' eklzajle kzakl jeza',
    image: '/assets/events/chat3.jpg',
    date: '12/03/2023'
  }
]

export function EventList () {
  return (
    <section className='container mx-auto w-fit p-6'>
      <h1 className='text-4xl font-bold mb-8'>Liste des évènements</h1>
      <div className='flex gap-6 flex-wrap justify-center'>
        {evenements.map(event => (
          <Card key={event.eventId} className='py-4 my-2 max-w-xs hover:-translate-y-3 cursor-pointer'>  {/* max-w-80 changed to max-w-xs for consistency */}
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
                className='object-cover rounded-xl h-48 w-full' // Changed width to w-full for responsiveness
                src={event.image}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  )
}
