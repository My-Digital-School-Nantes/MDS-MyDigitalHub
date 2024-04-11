'use client'

import { Input, Button } from '@nextui-org/react'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'

export default function LoginForm () {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const toggleVisibility = () => setIsPasswordVisible(!isPasswordVisible)

  const handleSubmit = (e) => {
    e.preventDefault()
    signIn('credentials', credentials)
  }

  return (
    <form className='flex flex-col items-center justify-center gap-4' onSubmit={handleSubmit}>
      <Input
        isRequired
        type='email'
        label='Email'
        name='email'
        value={credentials.email}
        onChange={handleChange}
        placeholder='prenom.nom@my-digital-school.org'
        className='max-w-xs'
      />
      <Input
        isRequired
        type={isPasswordVisible ? 'text' : 'password'}
        label='Mot de passe'
        name='password'
        value={credentials.password}
        onChange={handleChange}
        className='max-w-xs'
        endContent={
          <button className='focus:outline-none' type='button' onClick={toggleVisibility}>
            {isPasswordVisible
              ? (
                <FaEyeSlash className='text-2xl text-default-400 pointer-events-none' />
                )
              : (
                <FaEye className='text-2xl text-default-400 pointer-events-none' />
                )}
          </button>
        }
      />
      <Button
        type='submit'
        size='lg'
      >
        Se connecter
      </Button>
    </form>
  )
}
