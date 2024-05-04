'use client'

import { Card } from '@nextui-org/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export function QuizzQuestion ({ params }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userResponse, setUserResponse] = useState(false)
  const [userScore, setUserScore] = useState(0)
  const response = params.Questions[currentQuestionIndex]?.Responses

  const nextQuestion = (e) => {
    e.preventDefault()
    if (userResponse === true) {
      const radioButton = document.querySelector('input[name="userResponse"]:checked')
      if (radioButton) {
        radioButton.checked = false
      }
      setUserScore(userScore + 1)
    }
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
                      <Card className='px-5 py-4'>
                        <div className='flex flex-wrap justify-between items-center'>
                          <label>
                            {response.responseA}
                          </label>
                          <input
                            type='radio'
                            name='userResponse'
                            onChange={(e) => {
                              setUserResponse(response.responseA_isCorrect)
                            }}
                            required
                          />
                        </div>
                      </Card>
                      <Card className='px-5 py-4'>
                        <div className='flex flex-wrap justify-between items-center'>
                          <label>
                            {response.responseB}
                          </label>
                          <input
                            type='radio'
                            name='userResponse'
                            onChange={(e) => {
                              setUserResponse(response.responseB_isCorrect)
                            }}
                          />
                        </div>
                      </Card>
                      <Card className='px-5 py-4'>
                        <div className='flex flex-wrap justify-between items-center'>
                          <label>
                            {response.responseC}
                          </label>
                          <input
                            type='radio'
                            name='userResponse'
                            onChange={(e) => {
                              setUserResponse(response.responseC_isCorrect)
                            }}
                          />
                        </div>
                      </Card>
                      <Card className='px-5 py-4'>
                        <div className='flex flex-wrap justify-between items-center'>
                          <label>
                            {response.responseD}
                          </label>
                          <input
                            type='radio'
                            name='userResponse'
                            onChange={(e) => {
                              setUserResponse(response.responseD_isCorrect)
                            }}
                          />
                        </div>
                      </Card>
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
