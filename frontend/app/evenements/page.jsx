import Calendar from '@/components/evenements/calendar'
import { EventList } from '@/components/evenements/eventList'

export default function Evenements () {
  return (
    <section>
      <h1 className='text-4xl text-center my-8'>Calendrier</h1>
      <p>Salut à tous</p>
      <Calendar />
      <EventList />
    </section>
  )
}
