'use client'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import PseudoManager from '../PseudoManager'
import AvatarManager from '../AvatarManager'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function CardPage ({ quizzData, avatars }) {
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

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
        </CardBody>

        <PseudoManager />

        <AvatarManager avatars={avatars} />

        <CardFooter className='flex justify-center items-center space-y-6'>
          <input type='hidden' value={quizzData.id} name='id' />
          <Link href={`${url}/game`}>Jouer</Link>
        </CardFooter>
      </Card>
    </div>
  )
}
