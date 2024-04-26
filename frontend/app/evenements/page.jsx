import Calendar from '@/components/evenements/Calendar'
import { EventList } from '@/components/evenements/EventList'
import client from '@/graphql/apolloClient'
import { GET_EVENTS } from '@/graphql/queries/event'

export const dynamic = 'force-dynamic'

export const getData = async () => {
  try {
    const response = await client.query({
      query: GET_EVENTS
    })
    return response?.data?.events?.data
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}

export default async function Evenements () {
  const data = await getData()
  return (
    <section>
      <div className='text-center my-16 capitalize'>
        <h1 className='text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200'>
          Calendrier des
          <span className='bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text '> évènements </span>
        </h1>
      </div>
      <div className='flex justify-center'>
        <div className='w-3/4'>
          <Calendar />
        </div>
      </div>
      <EventList events={data} />
    </section>
  )
}
