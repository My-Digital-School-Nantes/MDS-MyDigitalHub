'use client'
import { Button, useDisclosure } from '@nextui-org/react'

import ModalAnnonce from '@/components/santeComponents/modal/Modal'

export default function Annonce ({ onAdd }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <div className='flex items-center justify-between'>
        <div className='w-28' />
        <div className='text-center my-12 capitalize'>
          <h3 className='text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200'>
            Annonce
            <span className='bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text '> partenaires de sport </span>
          </h3>
        </div>
        <div className='pr-8'>
          <Button auto color='primary' onPress={onOpen}>Ajouter</Button>
        </div>
      </div>

      <ModalAnnonce isOpen={isOpen} onOpenChange={onOpenChange} onAdd={onAdd} />

    </>
  )
}
