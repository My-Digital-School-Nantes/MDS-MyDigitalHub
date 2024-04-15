import { Pagination } from '@nextui-org/react'

export default function PaginationQuizz ({ total, currentPage, onPageChange }) {
  return (
    <div className='flex justify-center mt-8'>
      <Pagination
        showControls
        total={Math.ceil(total)}
        initialPage={currentPage}
        onChange={onPageChange}
      />
    </div>
  )
}
