'use client'
import React from 'react'
import { Input, Select, SelectItem, Button } from '@nextui-org/react'
import { LuSearch, LuTerminal, LuPencilLine, LuPalette, LuAreaChart } from 'react-icons/lu'

const tri = [
  { title: 'date', id: '1' },
  { title: 'popularité', id: '2' }
]

export default function Search ({ searchTerm, setSearchTerm }) {
  const handleSortChange = (value) => {
    console.log('Tri par:', value)
  }
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase())
  }

  return (
    <div className='flex flex-col items-center space-y-2'>
      <div className='flex items-center space-x-4'>
        <div className='flex items-center space-x-2'>
          <LuSearch className='text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0' />
          <Input
            label='Recherche'
            isClearable
            classNames={{
              label: 'text-black/50 dark:text-white/90',
              input: [
                'bg-transparent',
                'text-black/90 dark:text-white/90',
                'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                ''
              ],
              innerWrapper: 'bg-transparent',
              inputWrapper: [
                'shadow-xl',
                'bg-default-200/50',
                'dark:bg-default/60',
                'backdrop-blur-xl',
                'backdrop-saturate-200',
                'hover:bg-default-200/70',
                'dark:hover:bg-default/70',
                'group-data-[focused=true]:bg-default-200/50',
                'dark:group-data-[focused=true]:bg-default/60',
                '!cursor-text'
              ]
            }}
            radius='lg'
            placeholder='Recherchez un projet...'
            style={{ width: '500px' }}
            onChange={handleSearchChange}
            value={searchTerm}
          />
        </div>
        <Select
          label='Trier par'
          placeholder='Trier'
          className='max-w-xs'
          style={{ flexShrink: 0, width: '150px' }} // Empêcher le changement de taille
          onChange={(e) => handleSortChange(e.target.value)}
        >
          {tri.map((type) => (
            <SelectItem key={type.id} value={type.title}>
              {type.title}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div className='flex flex-wrap justify-center w-full'>
        <Button className='m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800'>
          <svg className='flex-shrink-0 size-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' /></svg>
          Tous les projets
        </Button>
        <Button className='m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border' startContent={<LuTerminal />}>
          DEV
        </Button>
        <Button className='m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border' startContent={<LuPencilLine />}>
          UX/UI
        </Button>
        <Button className='m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border' startContent={<LuPalette />}>
          DA
        </Button>
        <Button className='m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border' startContent={<LuAreaChart />}>
          Marketing
        </Button>
      </div>
    </div>
  )
}
