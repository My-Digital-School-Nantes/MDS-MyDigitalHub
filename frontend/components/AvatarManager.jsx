'use client'

import React, { useState } from 'react'
import AvatarSelector from '@/components/AvatarSelector'
import { Avatar } from '@nextui-org/react'

function AvatarManager () {
  const [userAvatar, setUserAvatar] = useState(null)

  return (
    <div className='flex justify-center items-center space-y-6'>
      <div className='flex flex-col items-center space-y-4'>
        <AvatarSelector onSelect={setUserAvatar} />
        {userAvatar && (
          <div className='flex flex-col items-center'>
            <h3 className='text-lg font-bold'>VOUS</h3>
            <Avatar
              src={userAvatar}
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
