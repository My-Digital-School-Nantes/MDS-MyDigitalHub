import React, { useState } from 'react'

function PseudoForm ({ onSubmitPseudo }) {
  const [pseudo, setPseudo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmitPseudo(pseudo) // Pass the pseudo up to the parent component or handle it as needed
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label htmlFor='pseudo' className='block text-sm font-medium text-gray-700'>
          Entrer votre pseudo
        </label>
        <input
          type='text'
          id='pseudo'
          name='pseudo'
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          placeholder='Votre psuedo'
          required
        />
      </div>
      <button
        type='submit'
        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      >
        Start Quiz
      </button>
    </form>
  )
}

export default PseudoForm
