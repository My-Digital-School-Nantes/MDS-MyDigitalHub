'use client'

import PseudoForm from '@/components/forms/PseudoForm'
import { Button } from '@nextui-org/react'
import { useGamer } from '@/context/GamerContext'

function PseudoManager () {
  const { userPseudo, handlePseudoSubmit, handleEditPseudo, pseudoSubmitted } = useGamer()

  return (
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
  )
}

export default PseudoManager
