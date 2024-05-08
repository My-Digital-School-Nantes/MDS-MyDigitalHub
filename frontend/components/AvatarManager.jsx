'use client'

import React, { useState } from 'react'
import AvatarSelector from '@/components/AvatarSelector'
import { Avatar } from '@nextui-org/react'
import { useGamer } from '@/context/GamerContext'

function AvatarManager ({ avatars }) {
  const { userAvatar, setUserAvatar } = useGamer()

  return (
    <div className='flex justify-center items-center space-y-6'>
      <div className='flex flex-col items-center space-y-4'>
        <AvatarSelector onSelect={setUserAvatar} avatars={avatars} />
        {userAvatar && (
          <div className='flex flex-col items-center'>
            <h3 className='text-lg font-bold'>VOUS</h3>
            <Avatar
              src={`http://localhost:1337${userAvatar.attributes.url}`}
              alt='Selected Avatar'
              isBordered
              color='primary'
              size='lg'
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default AvatarManager
