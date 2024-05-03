'use client'

import React, { useState } from 'react'
import PseudoForm from '@/components/forms/PseudoForm'
import { Button } from '@nextui-org/react'

function PseudoManager () {
  const [userPseudo, setUserPseudo] = useState('')
  const [pseudoSubmitted, setPseudoSubmitted] = useState(false)

  const handlePseudoSubmit = (pseudo) => {
    setUserPseudo(pseudo)
    setPseudoSubmitted(true)
  }

  const handleEditPseudo = () => {
    setPseudoSubmitted(false)
  }

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
