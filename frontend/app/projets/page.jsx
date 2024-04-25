import { Card, CardHeader, CardBody, Image } from '@nextui-org/react'
const CARDS = [
  {
    title: 'Projet 1',
    slug: '1',
    image: '/projet/dopamine.jpg',
    description: 'Description du Projet 1',
    votes: 0,
    comments: [],
    publishedDate: '2024-04-25',
    category: 'Dev',
    tags: ['projet', 'backlog']
  },
  {
    title: 'Projet 2',
    slug: '2',
    image: '/projet/endorphine.webp',
    description: 'Description du Projet 2',
    votes: 0,
    comments: [],
    publishedDate: '2024-04-25',
    category: 'Dev',
    tags: ['projet', 'backlog']
  },
  {
    title: 'Projet 3',
    slug: '3',
    image: '/projet/dopamine.jpg',
    description: 'Description du Projet 3',
    votes: 0,
    comments: [],
    publishedDate: '2024-04-25',
    category: 'Dev',
    tags: ['projet', 'backlog']
  },
  {
    title: 'Projet 4',
    slug: '4',
    image: '/projet/endorphine.webp',
    description: 'Description du Projet 4',
    votes: 0,
    comments: [],
    publishedDate: '2024-04-25',
    category: 'Dev',
    tags: ['projet', 'backlog']
  },
  {
    title: 'Projet 5',
    slug: '5',
    image: '/projet/dopamine.jpg',
    description: 'Description du Projet 5',
    votes: 0,
    comments: [],
    publishedDate: '2024-04-25',
    category: 'Dev',
    tags: ['projet', 'backlog']
  }
]

export default function Projets () {
  return (
    <div className=''>
      <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24'>
        <div className='text-center'>
          <h1 className='text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200'>
            Découvrez les
            <span className='text-primary'> projets </span> de nos étudiants
          </h1>

          <p className='mt-3 text-gray-600 dark:text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            auctor, nulla nec ultricies.
          </p>
        </div>
      </div>
      <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24'>
        {/** Ajouter les cartes de projets ici **/}
        {CARDS.map((projet) => {
          return (
            <Card key={projet.slug} className='py-4'>
              <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
                <p className='text-tiny uppercase font-bold'>{projet.title}</p>
                <small className='text-default-500'>{projet.title}</small>
                <h4 className='font-bold text-large'>{projet.description}</h4>
              </CardHeader>
              <CardBody className='overflow-visible py-2'>
                <Image
                  alt='Card background'
                  className='object-cover rounded-xl'
                  src={projet.image}
                  width={270}
                />
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
