import Calendar from '@/components/evenements/Calendar'
import DraggableEvents from '@/components/evenements/DraggableEvents'
import { EventList } from '@/components/evenements/EventList'

export default function Evenements () {
  return (
    <section>
      <div className='text-center my-16'>
        <h1 className='text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200'>
          Calendrier des
          <span className='bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text '> évènements </span>
        </h1>
      </div>
      <div className='flex justify-center'>
        <div className='w-3/4'>
          <DraggableEvents />
          <Calendar />
        </div>
      </div>

      <EventList />
    </section>
  )
}
