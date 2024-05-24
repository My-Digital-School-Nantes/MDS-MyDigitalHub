'use client'

import CardQuizz from '@/components/quizz/CardQuizz'

export default function QuizzesList ({ data }) {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 md:p-0'>

        {data.map((item) => (
          <CardQuizz key={item.id} quizz={item} slugTheme={item.attributes.quizz_theme.data.attributes.slug} />
        ))}

      </div>

      {/* TODO: Add pagination */}

      {/* <PaginationQuizz
        total={totalPages}
        currentPage={currentPage}
        onPageChange={setPage}
      /> */}
    </div>
  )
}
