import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link } from '@nextui-org/react'
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
          <p className='text-small text-default-500'>nextui.org</p>
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
