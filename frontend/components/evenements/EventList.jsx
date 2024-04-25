import React from 'react'
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react'

const evenements = [
  {
    eventId: 1,
    name: 'event 1',
    content: "contenue t'asezaezae za vue",
    image: '/assets/events/chat1.png' // Exemple d'image pour chaque événement
  },
  {
    eventId: 2,
    name: 'event 2',
    content: "contenue t'as vue",
    image: '/assets/events/chat2.png'
  },
  {
    eventId: 3,
    name: 'event 3',
    content: "contenue t'as vue",
    image: '/assets/events/chat3.jpg'
  },
  {
    eventId: 4,
    name: 'event 4',
    content: "contenue t'as vue",
    image: '/assets/events/chat3.jpg'
  },
  {
    eventId: 5,
    name: 'event 5',
    content: "contenue t'as vue",
    image: '/assets/events/chat3.jpg'
  }
]

export function EventList () {
  return (
    <section className='container mx-auto w-fit'>
      <h1>Liste des évènements</h1>
      <div className='flex gap-6 flex-wrap justify-center'>
        {evenements.map(event => (
          <Card key={event.eventId} className='py-4 my-2'>
            <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
              <p className='text-tiny uppercase font-bold'>{event.name}</p>
              <small className='text-default-500'>{event.content}</small>
              <h4 className='font-bold text-large'>{event.name}</h4>
            </CardHeader>
            <CardBody className='overflow-visible py-2'>
              <Image
                alt={`Image de l'événement ${event.name}`}
                className='object-cover rounded-xl h-48 w-96'
                src={event.image}
                width={270}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  )
}
