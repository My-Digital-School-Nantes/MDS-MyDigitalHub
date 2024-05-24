'use client'

import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export function QuizzQuestion ({ params }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userResponse, setUserResponse] = useState(false)
  const [userScore, setUserScore] = useState(0)
  const [nextQuestionIsDisabled, setnextQuestionIsDisabled] = useState(true)
  const response = params.Questions[currentQuestionIndex]?.Responses

  const [isSelected, setIsSelected] = useState({
    button1: { value: false, color: 'primary' },
    button2: { value: false, color: 'primary' },
    button3: { value: false, color: 'primary' },
    button4: { value: false, color: 'primary' }
  })

  const handleClick = (buttonName, answer) => {
    // Update state of isSelected for selected button
    setIsSelected((prevState) => {
      const newState = { ...prevState }

      // Reset value of all value
      Object.keys(newState).forEach((key) => {
        newState[key].color = 'primary'
        newState[key].value = false
      })

      // Update the right selected button value
      newState[buttonName].color = 'secondary'
      newState[buttonName].value = true
      setnextQuestionIsDisabled(false)
      setUserResponse(answer)

      return newState
    })
  }

  const nextQuestion = () => {
    if (userResponse === true) {
      setUserScore(userScore + 1)
    }
    setCurrentQuestionIndex(prevIndex => prevIndex + 1)
    setUserResponse(false)
    setnextQuestionIsDisabled(true)
    setIsSelected((prevState) => {
      const newState = { ...prevState }

      Object.keys(newState).forEach((key) => {
        newState[key].color = 'primary'
        newState[key].value = false
      })

      return newState
    })
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
                      <Button color={isSelected.button1.color} onClick={() => handleClick('button1', response.responseA_isCorrect)}>
                        {response.responseA}
                      </Button>
                      <Button color={isSelected.button2.color} onClick={() => handleClick('button2', response.responseB_isCorrect)}>
                        {response.responseB}
                      </Button>
                      <Button color={isSelected.button3.color} onClick={() => handleClick('button3', response.responseC_isCorrect)}>
                        {response.responseC}
                      </Button>
                      <Button color={isSelected.button4.color} onClick={() => handleClick('button4', response.responseD_isCorrect)}>
                        {response.responseD}
                      </Button>
                    </div>
                  </div>
                  <Button onClick={nextQuestion} disabled={nextQuestionIsDisabled}>Question suivante</Button>
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
