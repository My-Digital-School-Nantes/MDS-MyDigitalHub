import React, { useState } from 'react'
import { Button } from '@nextui-org/react'

function PseudoForm ({ onSubmitPseudo }) {
  const [pseudo, setPseudo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmitPseudo(pseudo) // Trigger the callback with the pseudo
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <input
          type='text'
          id='pseudo'
          name='pseudo'
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          className='mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          placeholder='Votre pseudo'
          required
        />
      </div>
      <Button
        color='primary'
        className='text-sm font-medium'
        onClick={handleSubmit}
      >
        Confirmer
      </Button>
    </form>
  )
}

export default PseudoForm
