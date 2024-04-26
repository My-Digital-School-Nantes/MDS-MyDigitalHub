'use client'

import CardQuizz from '@/components/quizz/CardQuizz'
import PaginationQuizz from '@/components/quizz/PaginationQuizz'
import usePagination from '@/hooks/Quizz/usePagination'

export default function ThemePage () {
  const quizzPerPage = 8
  const totalQuizz = 500
  const { currentPage, setPage, totalPages } = usePagination({
    totalItems: totalQuizz,
    itemsPerPage: quizzPerPage
  })

  const startIndex = (currentPage - 1) * quizzPerPage

  return (
    <div>
      <h1 className='text-4xl text-center my-8'>Nos Quizz</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 md:p-0'>
        {Array.from({ length: quizzPerPage }, (_, i) => startIndex + i).map(index => (
          <CardQuizz key={index} number={index} />
        ))}
      </div>

      <PaginationQuizz
        total={totalPages}
        currentPage={currentPage}
        onPageChange={setPage}
      />
    </div>
  )
}
