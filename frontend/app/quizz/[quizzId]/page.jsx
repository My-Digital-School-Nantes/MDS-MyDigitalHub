'use client'

import { Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'

export default function QuizzIdPage ({ params }) {
  const quizData = {
    theme: "Histoire de l'art",
    description: "Testez vos connaissances sur les différents mouvements artistiques à travers l'histoire, des peintures rupestres à l'art moderne.",
    duration: '15 minutes'
  }

  return (
    <div className='flex justify-center items-center h-screen p-5'>
      <Card>
        <CardHeader className='flex justify-center items-center'>
          <h1 className='text-4xl my-8'>{quizData.theme}</h1>
        </CardHeader>

        <CardBody>
          <p>
            {quizData.description}
          </p>
          <p><strong>Durée estimée :</strong> {quizData.duration}</p>
          <p><strong>Lorem lorem</strong>Lorem lorem</p>
        </CardBody>

        <h3 className='text-4xl my-8'>Select avatar</h3>

        <CardFooter className='flex justify-center items-center'>
          <Button color='primary' auto ghost>
            Commencer le Quizz
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
