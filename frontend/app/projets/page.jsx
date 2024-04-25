'use client'
import React, { useState } from 'react'
import { Card, CardHeader, CardBody, Button, Input, Image } from '@nextui-org/react'
import { LuSearch } from 'react-icons/lu'
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
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase())
  }

  const filteredProjects = CARDS.filter((projet) =>
    projet.title.toLowerCase().includes(searchTerm)
  )
  return (
    <div className=''>
      <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24 '>
        <div className='text-center'>
          <h1 className='text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200'>
            Découvrez les
            <span className='bg-gradient-to-r from-primary to-blue-400  text-transparent bg-clip-text '> projets </span> de nos étudiants
          </h1>

          <p className='mt-3 text-gray-600 dark:text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            auctor, nulla nec ultricies.
          </p>
        </div>
        <div className='flex justify-center place-content-center items-center pt-4 w-full'>
          <Input
            label='Recherche'
            isClearable
            radius='lg'
            classNames={{
              label: 'text-black/50 dark:text-white/90',
              input: [
                'bg-transparent',
                'text-black/90 dark:text-white/90',
                'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                ''
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
            placeholder='Recherchez un projet...'
            startContent={
              <LuSearch className='text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0' />
}
            onChange={handleSearchChange}
          />
        </div>
        <div className='flex gap-3 justify-center items-center mt-5 sm:mt-10 w-full'>

          <Button className='m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border'>
            <svg className='flex-shrink-0 size-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' /></svg>
            Tous les projets
          </Button>
          <Button className='m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border'>
            <svg className='flex-shrink-0 size-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' /></svg>
            Challenge Start-up
          </Button>
          <Button className='m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border'>
            <svg className='flex-shrink-0 size-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' /></svg>
            Health
          </Button>
          <Button className='m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border'>
            <svg className='flex-shrink-0 size-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5' /><path d='M9 18h6' /><path d='M10 22h4' /></svg>
            Creative
          </Button>
          <Button className='m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border'>
            <svg className='flex-shrink-0 size-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z' /><path d='M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2' /><path d='M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2' /><path d='M10 6h4' /><path d='M10 10h4' /><path d='M10 14h4' /><path d='M10 18h4' /></svg>
            Environment
          </Button>
          <Button className='m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800' href='#'>
            <svg className='flex-shrink-0 size-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z' /></svg>
            Adventure
          </Button>

        </div>
      </div>

      <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12'>
        {/** Ajouter les cartes de projets ici **/}
        {filteredProjects.map((projet) => {
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
