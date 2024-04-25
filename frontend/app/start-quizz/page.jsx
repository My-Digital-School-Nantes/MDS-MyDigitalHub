'use client'
import React, { useState } from 'react'
import AvatarSelector from '@/components/AvatarSelector'

function StartQuiz () {
  const [userAvatar, setUserAvatar] = useState(null)

  return (
    <div>
      <AvatarSelector onSelect={setUserAvatar} />
      {userAvatar && (
        <div>
          <h3>You:</h3>
          <img src={userAvatar} alt='Selected Avatar' />
        </div>
      )}
      <button onClick={() => console.log('Start Quiz')}>Start Quiz</button>
    </div>
  )
}

export default StartQuiz
