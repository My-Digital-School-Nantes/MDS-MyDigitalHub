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
  const [pseudoSubmitted, setPseudoSubmitted] = useState(false)

  const handlePseudoSubmit = (pseudo) => {
    setUserPseudo(pseudo)
    setPseudoSubmitted(true)
  }

  const handleEditPseudo = () => {
    setPseudoSubmitted(false) // This will allow the user to re-enter their pseudo
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
          {!pseudoSubmitted
            ? (
              <PseudoForm onSubmitPseudo={handlePseudoSubmit} />
              )
            : (
              <div className='text-center'>
                <h1 className='text-2xl font-bold'>Bienvenue, {userPseudo}!</h1>
                <p>Prêt pour le quiz, bababoy ?</p>
                <Button
                  color='primary'
                  className='text-sm font-medium'
                  onClick={handleEditPseudo}
                >
                  Changer de pseudo
                </Button>
              </div>
              )}
        </div>

        <div className='flex justify-center items-center space-y-6'>
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

        <CardFooter className='flex justify-center items-center space-y-6'>
          <Button color='primary' auto ghost>
            Commencer le Quizz
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
