'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import timeGridPlugin from '@fullcalendar/timegrid'

const events = [
  { title: 'Meeting', start: new Date() }
]

export default function Calendar () {
  return (
    <FullCalendar
      schedulerLicenseKey='CC-Attribution-NonCommercial-NoDerivatives'
      plugins={[
        resourceTimelinePlugin,
        dayGridPlugin,
        interactionPlugin,
        timeGridPlugin
      ]}
      events={events}
      eventContent={renderEventContent}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'resourceTimelineWeek,dayGridMonth,timeGridWeek'
      }}
      initialView='resourceTimelineWeek'
      nowIndicator
      editable
      selectable
      selectMirror
      resources={[
        { id: 'a', title: 'Auditorium A' },
        { id: 'b', title: 'Auditorium B', eventColor: 'green' },
        { id: 'c', title: 'Auditorium C', eventColor: 'orange' }
      ]}
      initialEvents={[
        { title: 'nice event', start: new Date(), resourceId: 'a' }
      ]}
    />
  )
}

function renderEventContent (eventInfo) {
  return (
    <>
      <b>
        {eventInfo.timeText}
      </b>
      <i>
        {eventInfo.event.title}
      </i>
    </>
  )
}
