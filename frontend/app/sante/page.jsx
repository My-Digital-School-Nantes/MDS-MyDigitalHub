'use client'
import { Button, Divider, useDisclosure } from '@nextui-org/react'

import CardCarousel from '@/components/card/CardCarousel'
import CardAnnonce from '@/components/card/CardAnnonce'
import ModalAnnonce from '@/components/modal/Modal'

import { LinearGradient } from 'react-text-gradients'

import { profils } from './profilDatas'
import { annonces } from './annonceDatas'

import client from '@/graphql/apolloClient'
import { GET_ANNONCES } from '@/graphql/queries/sante'

export const getAnnonces = async () => {
  try {
    const response = await client.query({
      query: GET_ANNONCES
    })
    return response?.data?.annonces?.data
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}

export default async function Sante() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const data = await getAnnonces()
  return (
    <>
      <div className='text-center pt-2 pb-10'>
        <LinearGradient gradient={['to left', '#ff68f0 ,#2fb8c5']} className='text-5xl font-bold'>
          Section Santé
        </LinearGradient>
      </div>

      <div className='m-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc urna eros, consectetur in leo a, mollis ornare nunc. Nullam ac quam libero. Vestibulum et tempor orci. In at metus quis nulla molestie fringilla. In hac habitasse platea dictumst. Duis quis lacus gravida ante placerat imperdiet vel et tortor. Cras ut tortor et arcu convallis elementum. Praesent velit urna, facilisis eget euismod vel, faucibus at tortor. Vivamus ac nisl ex. Morbi volutpat magna nec massa vehicula, sit amet tempor justo elementum.
        Curabitur tristique erat vel mattis lobortis. Ut in gravida ipsum. Phasellus consequat, felis sed pretium efficitur, magna risus ultrices nibh, eu vehicula tortor ipsum vel ligula. Nulla volutpat gravida finibus. Phasellus eget ultricies ipsum. Cras eget aliquam enim. Maecenas tempor facilisis metus, et tempor erat dapibus iaculis. Etiam condimentum magna libero, quis semper nisi vulputate quis. Duis sit amet risus eget magna hendrerit placerat. Curabitur ut erat eget elit dictum blandit sit amet eu tellus. Donec finibus purus sed purus fermentum imperdiet. Aliquam accumsan est sit amet nibh tempor, non fermentum mi molestie.
      </div>

      <div className='text-center pl-4'>
        <LinearGradient gradient={['to left', '#ff68f0 ,#2fb8c5']} className='text-3xl font-bold'>
          Contact Utile
        </LinearGradient>
      </div>
      <div className='m-8'>
        <CardCarousel cardsData={profils} />
      </div>
      <Divider className='my-4' />
      <div className='flex items-center justify-between'>
        <div className='w-28' />
        <div className='flex-grow text-center'>
          <LinearGradient gradient={['to left', '#ff68f0 ,#2fb8c5']} className='text-3xl font-bold'>
            Annonce partenaires de sport
          </LinearGradient>
        </div>
        <div className='pr-8'>
          <Button auto color='primary' onPress={onOpen}>Ajouter</Button>
        </div>
      </div>

      <ModalAnnonce isOpen={isOpen} onOpenChange={onOpenChange} />

      <div className='m-8'>
        <CardAnnonce cardsData={annonces} />
      </div>

    </>
  )
}
