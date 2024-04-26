'use client'

import { useState } from 'react'

const usePagination = ({ totalItems, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const setPage = (page) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  return {
    currentPage,
    totalPages,
    setPage
  }
}

export default usePagination
