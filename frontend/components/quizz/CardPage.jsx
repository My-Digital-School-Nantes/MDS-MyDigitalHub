'use client'
import { Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import PseudoManager from '../PseudoManager'
import AvatarManager from '../AvatarManager'

export default function CardPage ({ quizzData }) {
  return (
    <div className='flex justify-center items-center h-screen p-5'>
      <Card>
        <CardHeader className='flex justify-center items-center'>
          <h1 className='text-4xl my-8'>{quizzData.attributes.name}</h1>
        </CardHeader>

        <CardBody>
          <p>
            {quizzData.attributes.description}
          </p>
          <p><strong>Durée estimée :</strong> {quizzData.attributes.time} minutes</p>
          <p><strong>Lorem lorem</strong>Lorem lorem</p>
        </CardBody>

        <PseudoManager />

        <AvatarManager />

        <CardFooter className='flex justify-center items-center space-y-6'>
          <Button color='primary' auto ghost>
            Commencer le Quizz
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
