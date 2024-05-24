'use client'

import { Card, Skeleton } from '@nextui-org/react'

export default function LoadingAuthSignIn () {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <Card className='w-[400px] space-y-5 p-4' radius='lg'>
        <Skeleton className='w-full rounded-lg'>
          <div className='h-12 rounded-lg bg-default-300' />
        </Skeleton>
        <Skeleton className='w-full rounded-lg'>
          <div className='h-12 rounded-lg bg-default-300' />
        </Skeleton>
        <Skeleton className='w-full rounded-lg'>
          <div className='h-12 rounded-lg bg-default-300' />
        </Skeleton>
        <Skeleton className='w-3/5 rounded-lg'>
          <div className='h-10 rounded-lg bg-default-300' />
        </Skeleton>
      </Card>
    </div>
  )
}
