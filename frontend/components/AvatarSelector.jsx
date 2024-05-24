'use client'
import React, { useState } from 'react'
import { Avatar } from '@nextui-org/react'

function AvatarSelector ({ onSelect, avatars }) {
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0])

  return (
    <div>
      <h2 className='text-2xl font-bold text-center mb-4'>Choisissez votre avatar</h2>
      <div className='flex flex-row gap-3 items-center justify-center'>
        {avatars.map(avatar => (
          <Avatar
            key={avatar.attributes.url}
            src={`http://localhost:1337${avatar.attributes.url}`}
            alt='Quiz Avatar'
            isBordered
            size='lg'
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
