'use client'

import { Button, Card } from '@nextui-org/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export function QuizzQuestion ({ params }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userResponse, setUserResponse] = useState(false)
  const [userScore, setUserScore] = useState(0)
  const response = params.Questions[currentQuestionIndex]?.Responses

  const [isSelected, setIsSelected] = useState({
    button1: { value: false, color: 'primary' },
    button2: { value: false, color: 'primary' },
    button3: { value: false, color: 'primary' },
    button4: { value: false, color: 'primary' }
  });

  const handleClick = (buttonName) => {
    // Mettre à jour l'état de isSelected pour le bouton spécifié
    setIsSelected((prevState) => {
      const newState = { ...prevState };
      
      // Réinitialiser la valeur de sélection de tous les boutons à false
      Object.keys(newState).forEach((key) => {
        newState[key].color = "primary";
        newState[key].value = false;
      });
      
      // Mettre à jour la valeur de sélection du bouton cliqué à true
      newState[buttonName].color = "secondary";
      newState[buttonName].value = true;
  
      return newState;
    });
  };
  
  const nextQuestion = () => {
    setUserScore(userScore + 1)
    setCurrentQuestionIndex(prevIndex => prevIndex + 1)
  }

  return (
    <div className='relative'>
      <div className='absolute right-0 top-5 text-lg sm:text-6lg font-bold'>
        <div className='flex flex-col items-end'>
          {currentQuestionIndex < params.Questions.length
            ? (
              <span>{`${currentQuestionIndex + 1}/${params.Questions.length}`}</span>
              )
            : <span>{`${currentQuestionIndex}/${params.Questions.length}`}</span>}
          <span>Score: {userScore}</span>
        </div>
      </div>
      <form className='flex justify-center items-center'>
        {params.Questions && params.Questions.length > 0 && (
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {response
              ? (
                <div className='flex flex-col items-center gap-20'>
                  <div className='flex flex-col items-center gap-20'>
                    <h1 className='py-16 text-4xl sm:text-6xl font-bold  text-gray-800 dark:text-gray-200 text-center'>
                      {params.Questions[currentQuestionIndex].questionText}
                    </h1>
                    <div className='grid grid-cols-2 gap-4'>
                      <Button color={isSelected.button1.color} onClick={() => handleClick('button1')}>
                        Button 1
                      </Button>
                      <Button color={isSelected.button2.color} onClick={() => handleClick('button2')}>
                        Button 2
                      </Button>
                      <Button color={isSelected.button3.color} onClick={() => handleClick('button3')}>
                        Button 3
                      </Button>
                      <Button color={isSelected.button4.color} onClick={() => handleClick('button4')}>
                        Button 4
                      </Button>
                    </div>
                  </div>
                  <button onClick={nextQuestion}>Question suivante</button>
                </div>
                )
              : (
                <div className='flex flex-col items-center gap-10'>
                  <h1 className='py-16 text-4xl sm:text-6xl font-bold  text-gray-800 dark:text-gray-200 '>
                    Fin du quizz
                  </h1>
                  <Link href='/quizz'>
                    Retouner à la page des quizz
                  </Link>
                </div>
                )}
          </motion.div>
        )}
      </form>
    </div>
  )
}
