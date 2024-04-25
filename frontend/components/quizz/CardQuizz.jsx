import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link } from '@nextui-org/react'
import { RiGitRepositoryPrivateLine } from 'react-icons/ri'

export default function CardQuizz ({ showIcon = false, slug }) {
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
          <p className='text-md'>NextUI {slug}</p>
          <p className='text-small text-default-500'>nextui.org</p>
        </div>
        {showIcon && (
          <div className='absolute top-0 right-0 p-4 text-primary'>
            <RiGitRepositoryPrivateLine size={24} />
          </div>
        )}
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          showAnchorIcon
          href={`/quizz/${slug}`}
        >
          Discover the quiz.
        </Link>
      </CardFooter>
    </Card>
  )
}
