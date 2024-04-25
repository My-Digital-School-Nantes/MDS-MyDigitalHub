'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'

export default function Calendar () {
  return (
    <FullCalendar
      schedulerLicenseKey='CC-Attribution-NonCommercial-NoDerivatives'
      plugins={[
        dayGridPlugin,
        resourceTimelinePlugin,
        interactionPlugin,
        timeGridPlugin
      ]}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'resourceTimelineWeek,dayGridMonth,timeGridWeek'
      }}
      ressources={[
        { id: 'a', title: 'Partouze' }
      ]}
      initialEvents={[
        { title: 'Partouze', start: new Date(), resourceId: 'a' }
      ]}
      initialView='timeGridWeek' // Affichage de base
      editable // Pour activer les interactions d'events
      selectable // Pour activer la sélection des dates
      nowIndicator
      selectMirror
    />
  )
}
