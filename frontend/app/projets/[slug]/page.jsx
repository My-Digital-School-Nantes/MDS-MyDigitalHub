import { Card, CardFooter } from '@nextui-org/card'
import { getProject } from './getProjectAction'
import { Chip, Image, User } from '@nextui-org/react'
import Markdown from 'react-markdown'

export default async function Projets (props) {
  const { slug } = props.params
  const project = await getProject(slug)
  const projet = project[0].attributes
  console.log(project[0])
  console.log(slug)
  return (
    <div className='grid gap-6 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24 '>
      <div className='text-center'>
        <h1 className='text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200'>
          <span className='bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text '> {projet.title} </span>
        </h1>
      </div>
      <Card>
        <div className='flex justify-center relative'>
          <Image
            isBlurred
            src={'http://localhost:1337' + (projet.image && projet.image.data && projet.image.data[0].attributes.url)}
            fallbackSrc='https://via.placeholder.com/300x100'
            alt='NextUI Album Cover'
            className='p-5'
          />
        </div>
        <div className=' grid gap-4 p-4'>
          <Chip radius='sm' color='primary'>{projet.category}</Chip>
          <Markdown className='text-left'>{projet.description}</Markdown>
        </div>
        <CardFooter className='flex justify-between items-end'>
          <User
            name={projet.creator}
            description={projet.category}
            avatarProps={{
              src: 'http://localhost:1337' + projet?.creatorPhoto?.data?.attributes?.url
            }}
          />
        </CardFooter>
      </Card>

    </div>
  )
}
