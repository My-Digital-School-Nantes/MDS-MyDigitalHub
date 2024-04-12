import { Card, CardHeader, CardBody } from '@nextui-org/react'

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
        <Card className='py-4'>
          <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
            <p className='text-tiny uppercase font-bold'>Daily Mix</p>
            <small className='text-default-500'>12 Tracks</small>
            <h4 className='font-bold text-large'>Frontend Radio</h4>
          </CardHeader>
          <CardBody className='overflow-visible py-2'>
            etst
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
