'use client'
import CardQuizz from './CardQuizz'

// const quizzPerPage = 8
// const totalQuizz = 500
// const { currentPage, setPage, totalPages } = usePagination({
//   totalItems: totalQuizz,
//   itemsPerPage: quizzPerPage
// })

// const startIndex = (currentPage - 1) * quizzPerPage

export default function QuizzesList ({ data }) {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 md:p-0'>
        {/* <CardQuizz key={index} number={index} /> */}

        {data.map((quizz, index) => (
          <CardQuizz key={index} quizz={quizz} />
        ))}

      </div>

      {/* <PaginationQuizz
        total={totalPages}
        currentPage={currentPage}
        onPageChange={setPage}
      /> */}
    </div>
  )
}
