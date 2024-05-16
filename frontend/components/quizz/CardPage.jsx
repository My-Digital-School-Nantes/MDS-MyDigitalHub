'use client'
import { Card, CardBody, CardFooter, CardHeader, Skeleton } from '@nextui-org/react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import AvatarManager from '../AvatarManager'
import PseudoManager from '../PseudoManager'

export default function CardPage ({ quizzData, avatars }) {
  const [url, setUrl] = useState('')

  const { data: session, status } = useSession()
  const router = useRouter()

  console.log(quizzData.attributes)

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  return (
    <>
      {status === 'loading'
        ? (
          <div className='flex justify-center items-center h-screen p-5'>
            <Card className='w-[400px] space-y-5 p-4' radius='lg'>
              <Skeleton className='rounded-lg'>
                <div className='h-24 rounded-lg bg-default-300' />
              </Skeleton>
              <div className='space-y-3'>
                <Skeleton className='w-3/5 rounded-lg'>
                  <div className='h-3 w-3/5 rounded-lg bg-default-200' />
                </Skeleton>
                <Skeleton className='w-4/5 rounded-lg'>
                  <div className='h-3 w-4/5 rounded-lg bg-default-200' />
                </Skeleton>
                <Skeleton className='w-2/5 rounded-lg'>
                  <div className='h-3 w-2/5 rounded-lg bg-default-300' />
                </Skeleton>
              </div>
            </Card>
          </div>
          )
        : session && status === 'authenticated'
          ? (
            <>
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
              <Card className='w-[400px] space-y-5 p-4' radius='lg'>
                <Skeleton className='rounded-lg'>
                  <div className='h-12 rounded-lg bg-default-300' />
                </Skeleton>
                <div className='space-y-3'>
                  <Skeleton className='w-3/5 rounded-lg'>
                    <div className='h-3 w-3/5 rounded-lg bg-default-200' />
                  </Skeleton>
                  <Skeleton className='w-4/5 rounded-lg'>
                    <div className='h-3 w-4/5 rounded-lg bg-default-200' />
                  </Skeleton>
                  <Skeleton className='w-2/5 rounded-lg'>
                    <div className='h-3 w-2/5 rounded-lg bg-default-300' />
                  </Skeleton>
                  {/* Ajout d'un skeleton pour un bouton */}
                  <Skeleton className='rounded-lg'>
                    <button className='h-10 w-full rounded-lg bg-default-200'>
                      {/* Vous pouvez laisser ceci vide ou ajouter un placeholder visuel */}
                    </button>
                  </Skeleton>
                  {/* Ajout d'un skeleton pour un input */}
                  <Skeleton className='rounded-lg'>
                    <input type='text' className='h-10 w-10 rounded-lg bg-default-200 p-2' placeholder=' ' readOnly />
                  </Skeleton>
                  {/* Ajout d'un skeleton rond */}
                  <Skeleton className='rounded-full'>
                    <div className='h-6 w-6 rounded-full bg-default-200' />
                  </Skeleton>
                </div>
              </Card>
            </>
            )
          : (
              router.replace('/auth/signin')
            )}
    </>

  )
}
