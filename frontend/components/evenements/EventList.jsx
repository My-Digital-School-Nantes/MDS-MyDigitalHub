import React from 'react'
import { Card, CardHeader, CardBody, Image, Chip } from '@nextui-org/react'

const evenements = [
  {
    eventId: 1,
    name: 'Super evenement de la mort qui tue sa grand mere ez eza e ',
    categories: ['devoir', 'sport', "vie d'école"],
    content: 'ezlahe jah e z lhazj enz,ae njza lza jkaje lazj kjeza je jklzj a ',
    image: '/assets/events/chat1.png'
  },
  {
    eventId: 2,
    name: 'event 2',
    categories: ['devoir', 'sport', "vie d'école"],
    content: 'eklj aze lazje laj ',
    image: '/assets/events/chat2.png'
  },
  {
    eventId: 3,
    name: 'event 3',
    categories: ['devoir', 'sport', "vie d'école"],
    content: ' jlezaje azj kae jl',
    image: '/assets/events/chat3.jpg'
  },
  {
    eventId: 4,
    name: 'event 4',
    categories: ['devoir', 'sport', "vie d'école"],
    content: 'ejlk zajej azj ekla',
    image: '/assets/events/chat3.jpg'
  },
  {
    eventId: 5,
    name: 'event 5',
    categories: ['devoir', 'sport', "vie d'école"],
    content: ' eklzajle kzakl jeza',
    image: '/assets/events/chat3.jpg'
  }
]

export function EventList () {
  return (
    <section className='container mx-auto w-fit p-6'>
      <h1 className='text-4xl font-bold'>Liste des évènements</h1>
      <div className='flex gap-6 flex-wrap justify-center'>
        {evenements.map(event => (
          <Card key={event.eventId} className='py-4 my-2 max-w-xs'>  {/* max-w-80 changed to max-w-xs for consistency */}
            <CardHeader className='pb-0 pt-2 px-4 flex-col items-start gap-2'>
              <p className='text-large uppercase font-bold'>{event.name}</p>
              <h4 className='font-light text-secondary-200'>{event.content}</h4>
              <div className='flex gap-2 flex-wrap'>
                {event.categories.map(cate => (
                  <Chip key={cate} color='primary' variant='bordered'>{cate}</Chip>
                ))}
              </div>
            </CardHeader>
            <CardBody className='overflow-visible py-2'>
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
