import { Pagination } from '@nextui-org/react'

export default function PaginationQuizz () {
  return (
    <>
      <div className='flex justify-center mt-8'>
        <Pagination showControls total={5} initialPage={1} />
      </div>
    </>
  )
}
