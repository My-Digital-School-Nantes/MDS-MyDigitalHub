import CardQuizz from '@/components/quizz/CardQuizz'
import PaginationQuizz from '@/components/quizz/PaginationQuizz'
import SkeletonCard from '@/components/quizz/SkeletonCard'

export default function page () {
  return (
    <>
      <h1 className='text-4xl text-center my-8'>Nos Quizz</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 md:p-0'>
        <CardQuizz />
        <CardQuizz />
        <CardQuizz showIcon />
        <CardQuizz />

        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>

      <PaginationQuizz />
    </>
  )
}
