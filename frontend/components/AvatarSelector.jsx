import React, { useState } from 'react'
import { Avatar } from '@nextui-org/react'

const avatars = [
  '/images/avatars/1.jpg',
  '/images/avatars/2.jpg',
  '/images/avatars/3.jpg',
  '/images/avatars/4.jpg'
]

function AvatarSelector ({ onSelect }) {
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0])

  return (
    <div>
      <h2 className='text-2xl font-bold text-center mb-4'>Choisissez votre avatar</h2>
      <div className='flex flex-row gap-3 items-center justify-center'>
        {avatars.map(avatar => (
          <Avatar
            key={avatar}
            src={avatar}
            alt='Quiz Avatar'
            isBordered
            size='lg' // You can vary sizes as needed or manage via state
            className={selectedAvatar === avatar ? 'selected' : ''}
            onClick={() => {
              setSelectedAvatar(avatar)
              onSelect(avatar)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default AvatarSelector
