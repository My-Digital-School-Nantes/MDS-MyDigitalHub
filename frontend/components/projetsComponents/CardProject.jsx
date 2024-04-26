'use client'
import { Card, User, CardHeader, CardBody, Image, CardFooter, Button, Chip } from '@nextui-org/react'
import { LuThumbsUp } from 'react-icons/lu'
import Link from 'next/link'
import { toast } from 'react-toastify'

export const CardProject = (projet) => {
  projet = projet.projet
  const handleUpvote = () => {
    // TODO: Add upvote
    toast.success('Upvoted!')
  }
  return (
    <Card className='py-4'>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start gap-3'>
        <Link href={projet.slug} className='group block'>
          <div className='aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800'>
            <Image
              alt='Projet Image'
              className='group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl w-screen h-64'
              src={projet.image}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw%'
            />
          </div>
          <h1 className='relative inline-block text-xl capitalize font-semibold text-black pt-4 before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-primary-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white'>{projet.title}</h1>
        </Link>

      </CardHeader>
      <CardBody className='overflow-visible py-2'>
        <p className='mt-1 text-gray-600 dark:text-neutral-400'>
          {projet.description}
        </p>
        <p className='text-gray-600 dark:text-gray-400'>
          {projet.publishedDate}
        </p>
        <Chip radius='sm' color='primary'>{projet.category}</Chip>
      </CardBody>
      <CardFooter className='flex justify-between items-end'>
        <User
          name='Guillaume Troyaux'
          description='Developpeur Fullstack'
          avatarProps={{
            src: 'https://i.pravatar.cc/150?u=a04258114e29026702d'
          }}
        />
        <div className='flex gap-2 items-center'>
          <p className='text-primary text-xl'>{projet.vote}</p>
          <Button
            isIconOnly aria-label='upVote'
            variant='faded'
            onClick={handleUpvote}
          >
            <LuThumbsUp
              className='w-5 h-5'
            />
          </Button>
        </div>

      </CardFooter>
    </Card>
  )
}
