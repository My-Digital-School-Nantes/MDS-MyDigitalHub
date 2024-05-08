import React, { createContext, useContext, useState } from 'react'

const GamerContext = createContext()

export const GamerProvider = ({ children }) => {
  const [userPseudo, setUserPseudo] = useState('')
  const [pseudoSubmitted, setPseudoSubmitted] = useState(false)
  const [userAvatar, setUserAvatar] = useState(null)

  const handlePseudoSubmit = (pseudo) => {
    setUserPseudo(pseudo)
    setPseudoSubmitted(true)
  }

  const handleEditPseudo = () => {
    setPseudoSubmitted(false)
  }

  return (
    <GamerContext.Provider value={{ userPseudo, handlePseudoSubmit, handleEditPseudo, pseudoSubmitted, userAvatar, setUserAvatar }}>
      {children}
    </GamerContext.Provider>
  )
}

// Custom hook to use the context
export const useGamer = () => useContext(GamerContext)
