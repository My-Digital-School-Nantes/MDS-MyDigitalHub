'use client'

import { Button, Card, CardBody, CardFooter, CardHeader, Avatar } from '@nextui-org/react'
import React, { useState } from 'react'
import AvatarSelector from '@/components/AvatarSelector'
import PseudoForm from '@/components/forms/PseudoForm'

export default function QuizzIdPage ({ params }) {
  const quizData = {
    theme: "Histoire de l'art",
    description: "Testez vos connaissances sur les différents mouvements artistiques à travers l'histoire, des peintures rupestres à l'art moderne.",
    duration: '15 minutes'
  }

  const [userAvatar, setUserAvatar] = useState(null)
  const [userPseudo, setUserPseudo] = useState('')

  const handlePseudoSubmit = (pseudo) => {
    setUserPseudo(pseudo)
    console.log('Pseudo set to:', pseudo)
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

        <div className='space-y-6'>
          <PseudoForm onSubmitPseudo={handlePseudoSubmit} />
          {userPseudo && (
            <p className='text-center'>Welcome, {userPseudo}! Ready to start the quiz?</p>
          )}
        </div>

        <div className='flex justify-center items-center'>
          <div className='flex flex-col items-center space-y-4'>
            <AvatarSelector onSelect={setUserAvatar} />
            {userAvatar && (
              <div className='flex flex-col items-center'>
                <h3 className='text-lg font-bold'>VOUS</h3>
                <Avatar
                  src={userAvatar}
                  alt='Selected Avatar'
                  isBordered
                  color='primary'
                  size='lg'
                />
              </div>
            )}
          </div>
        </div>

        <CardFooter className='flex justify-center items-center'>
          <Button color='primary' auto ghost>
            Commencer le Quizz
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
