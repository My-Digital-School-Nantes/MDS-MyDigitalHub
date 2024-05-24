'use client'
import { Card, User, CardHeader, CardBody, Image, CardFooter, Button, Chip } from '@nextui-org/react'
import { LuThumbsUp } from 'react-icons/lu'
import Link from 'next/link'
import { toast } from 'react-toastify'
import Markdown from 'react-markdown'
import { IncrementVote } from '@/app/projets//[slug]/getProjectAction'

export const dynamic = 'force-dynamic'

export const CardProject = ({ projet }) => {
  const tagColors = {
    'Lean Start-up': 'success',
    'Projet école': 'primary',
    'Projet Alternance': 'secondary',
    'Projet Personnel': 'warning'
  }

  const handleUpvote = () => {
    const newVote = projet.vote + 1
    IncrementVote(projet.id, newVote)
    toast.success('Vote enregistré')
  }
  return (
    <Card className='py-4'>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start gap-3'>
        <Link href={`/projets/${projet.slug}`} className='group block'>
          <div className='overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800'>
            <Image
              alt='Projet Image'
              isZoomed
              className='rounded-2xl  h-64'
              src={'http://localhost:1337' + (projet.image && projet.image.data && projet.image.data[0].attributes.url)}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw%'
            />
          </div>
          <h1 className='relative inline-block text-xl capitalize font-semibold text-black pt-4 before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-primary-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white'>{projet.title}</h1>
        </Link>

        <div className='flex gap-3'>
          {
            projet.tags?.map((tag, index) => (
              <Chip key={index} radius='sm' color={tagColors[tag.trim()] || 'primary'}>{tag}</Chip>
            ))
          }
        </div>

      </CardHeader>
      <CardBody className='overflow-visible py-2 gap-2'>

        <Markdown className='truncate text-ellipsis'>{projet.description}</Markdown>

        <p className='text-gray-600 dark:text-gray-400'>
          {projet.publishedDate}
        </p>

      </CardBody>
      <CardFooter className='flex justify-between items-end'>
        <User
          name={projet.creator}
          description={projet.category}
          avatarProps={{
            src: 'http://localhost:1337' + projet?.creatorPhoto?.data?.attributes?.url
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
