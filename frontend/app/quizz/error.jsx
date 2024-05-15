'use client'
import Layer from '@/components/Layer'
import {
  Button,
  Link
} from '@nextui-org/react'

export default function NotFoundComponent () {
  return (
    <main className='container'>

      <div class='h-screen flex items-center'>
        <div class='container flex flex-col md:flex-row items-center justify-center px-5 '>
          <div class='max-w-md'>
            <div class='text-5xl font-dark font-bold'>404</div>
            <p class='text-2xl md:text-3xl font-light leading-normal'>
              Sorry we couldn't find this page.
            </p>
            <p class='mb-8'>But dont worry, you can find plenty of other things on our homepage.</p>

            <Button as={Link} color='primary' href='/' variant='flat'>
              Back to home
            </Button>

          </div>
          <div class='max-w-lg'>
            <Layer />
          </div>

        </div>
      </div>
    </main>
  )
}
