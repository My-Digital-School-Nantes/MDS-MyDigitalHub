'use client'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import AvatarManager from '../AvatarManager'
import PseudoManager from '../PseudoManager'
import LoadingAuthSignIn from './LoadingAuthSignIn'
import LoadingCardPage from './LoadingCardPage'

export default function CardPage ({ quizzData, avatars }) {
  const [url, setUrl] = useState('')

  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  function CardContent ({ quizzData, avatars, url }) {
    return (
      <div className='flex justify-center items-center h-screen p-5'>
        <Card>
          <CardHeader className='flex justify-center items-center'>
            <h1 className='text-4xl my-8'>{quizzData.attributes.name}</h1>
          </CardHeader>
          <CardBody>
            <p>{quizzData.attributes.description}</p>
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

  return (
    <>
      {/* Display the loading component if the status is "loading" */}
      {status === 'loading' && <LoadingCardPage />}

      {/* Display the card content if the user is authenticated or if the quiz is public */}
      {(session && status === 'authenticated') || quizzData.attributes.is_private === false
        ? (
          <CardContent quizzData={quizzData} avatars={avatars} url={url} />
          )
        : (
          /* Redirect to the sign-in page and display the authentication loading component */
            router.replace('/auth/signin') || <LoadingAuthSignIn />
          )}
    </>
  )
}
