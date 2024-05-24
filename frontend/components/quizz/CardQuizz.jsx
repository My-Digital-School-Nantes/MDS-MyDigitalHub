'use client'
import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link } from '@nextui-org/react'
import { MdOutlinePrivacyTip, MdTimer } from 'react-icons/md'

import Markdown from 'react-markdown'

export default function CardQuizz ({ quizz, slugTheme }) {
  return (
    <Card className='max-w-[400px] relative'>
      <CardHeader className='flex gap-3'>
        <Image
          alt='nextui logo'
          height={40}
          radius='sm'
          src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
          width={40}
        />
        <div className='flex flex-col'>
          <p className='text-md'>{quizz.attributes.name}</p>
          <p className='text-small text-default-500 flex items-center space-x-1'>
            <MdTimer />
            <span> {quizz.attributes.time} minutes</span>
          </p>
          {quizz.attributes.is_private && (
            <p className='text-small text-warning flex items-center space-x-1'>
              <MdOutlinePrivacyTip />
              <span> Ce quizz est privé</span>
            </p>
          )}
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <Markdown className='truncate'>
          {quizz.attributes.description}
        </Markdown>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          showAnchorIcon
          href={`${slugTheme}/${quizz.attributes.slug}`}
        >
          Discover the quiz.
        </Link>
      </CardFooter>
    </Card>
  )
}
