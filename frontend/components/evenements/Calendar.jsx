'use client'
import FullCalendar from '@fullcalendar/react'
import momentPlugin from '@fullcalendar/moment'
import dayGridPlugin from '@fullcalendar/daygrid'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import frLocale from '@fullcalendar/core/locales/fr'

export default function Calendar () {
  return (
    <FullCalendar
      locale={frLocale}
      schedulerLicenseKey='CC-Attribution-NonCommercial-NoDerivatives'
      plugins={[
        dayGridPlugin,
        resourceTimelinePlugin,
        resourceTimeGridPlugin,
        interactionPlugin,
        timeGridPlugin,
        momentPlugin
      ]}
      headerToolbar={{
        left: 'prev,next today',
        center: '',
        right: 'title'
      }}
      ressources={[
        { id: 'a', title: 'Test' }
      ]}
      initialEvents={[
        { title: 'Test', start: new Date(), resourceId: 'a' }
      ]}
      initialView='dayGridMonth' // Affichage de base
      editable // Pour activer les interactions d'events
      selectable // Pour activer la sélection des dates
      droppable // Pour activer le fait d'ajouter un élement via le drag&drop
      nowIndicator
      selectMirror
      height={850}
    />
  )
}
