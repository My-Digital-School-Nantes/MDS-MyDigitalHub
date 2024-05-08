'use client'
import React from 'react'
import Link from 'next/link'
import { useGamer } from '@/context/GamerContext'
import { Avatar } from '@nextui-org/react'

function QuizResult () {
  const { userPseudo } = useGamer()
  const { userAvatar } = useGamer()
  console.log(userPseudo)

  return (
    <div className='flex flex-col items-center gap-10'>
      <h1 className='py-16 text-4xl sm:text-6xl font-bold  text-gray-800 dark:text-gray-200 '>
        Fin du quizz !
        <div className='flex flex-col items-center mt-5'>
          <div className='my-5'>
            <Avatar
              src={userAvatar && userAvatar.attributes ? `http://localhost:1337${userAvatar.attributes.url}` : undefined}
              alt='Selected Avatar'
              isBordered
              color='primary'
              size='lg'
            />
          </div>
          {userPseudo}
        </div>
      </h1>
    </div>
  )
}

export default QuizResult
