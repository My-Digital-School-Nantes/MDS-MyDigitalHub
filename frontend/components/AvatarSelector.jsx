// components/AvatarSelector.js
import Image from 'next/image'
import React, { useState } from 'react'

const avatars = [
  '/images/avatars/1.jpg',
  '/images/avatars/2.jpg',
  '/images/avatars/3.jpg',
  '/images/avatars/4.jpg'
  // Add as many avatars as you like
]

function AvatarSelector ({ onSelect }) {
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0])

  return (
    <div>
      <h2>Choisissez votre avatar</h2>
      <div className='avatar-grid'>
        {avatars.map(avatar => (
          <Image
            key={avatar}
            src={avatar}
            alt='Quiz Avatar'
            className={`avatar ${selectedAvatar === avatar ? 'selected' : ''}`}
            width={100}
            height={24}
            onClick={() => {
              setSelectedAvatar(avatar)
              onSelect(avatar)
            }}
            style={{ cursor: 'pointer', border: selectedAvatar === avatar ? '2px solid blue' : 'none' }}
          />
        ))}
      </div>
    </div>
  )
}

export default AvatarSelector
