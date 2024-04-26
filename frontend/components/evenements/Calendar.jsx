'use client'
import FullCalendar from '@fullcalendar/react'
import momentPlugin from '@fullcalendar/moment'
import dayGridPlugin from '@fullcalendar/daygrid'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import frLocale from '@fullcalendar/core/locales/fr'
import listPlugin from '@fullcalendar/list'
import Swal from 'sweetalert2'

export default function Calendar () {
  const handleEventClick = (clickInfo) => {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Voulez-vous supprimer cet événement ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2fb8c5',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le!',
      cancelButtonText: 'Non, annulez!'
    }).then((result) => {
      if (result.value) {
        clickInfo.event.remove() // Supprimer l'événement
        Swal.fire(
          'Supprimé!',
          'Votre événement a été supprimé.',
          'success'
        )
      }
    })
  }

  const handleDateSelect = (selectInfo) => {
    Swal.fire({
      title: 'Créer un événement',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Créer',
      confirmButtonColor: '#2fb8c5',
      cancelButtonText: 'Annuler',
      showLoaderOnConfirm: true,
      preConfirm: (eventName) => {
        if (!eventName) {
          Swal.showValidationMessage('Veuillez entrer le nom de l\'événement')
        }
        const calendarApi = selectInfo.view.calendar
        calendarApi.unselect() // clear date selection
        calendarApi.addEvent({
          title: eventName,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Événement créé!'
        })
      }
    })
  }
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
        momentPlugin,
        listPlugin
      ]}
      headerToolbar={{
        left: 'prev,next today',
        center: 'dayGridMonth listMonth',
        right: 'title'
      }}
      events={[
        {
          title: 'Soirée mousse',
          start: '2024-04-11',
          backgroundColor: 'green',
          borderColor: 'green'
        },
        {
          title: 'AAA',
          start: '2024-04-02',
          end: '2024-04-04'
        },
        {
          title: 'BBB',
          start: '2024-04-15',
          end: '2024-04-17',
          backgroundColor: 'purple',
          borderColor: 'purple'
        },
        {
          title: 'Examens math',
          start: '2024-04-20',
          backgroundColor: '#d33',
          borderColor: '#d33'
        },
        {
          title: 'Examens français',
          start: '2024-04-20',
          backgroundColor: '#d33',
          borderColor: '#d33'
        },
        {
          title: 'Examens devOps',
          start: '2024-04-20',
          backgroundColor: '#d33',
          borderColor: '#d33'
        },
        {
          title: 'Examens PWA',
          start: '2024-04-20',
          backgroundColor: '#d33',
          borderColor: '#d33'
        },
        {
          title: 'Examens roublardise',
          start: '2024-04-20',
          backgroundColor: '#d33',
          borderColor: '#d33'
        },
        {
          title: 'Examens finaux',
          start: '2024-04-20',
          backgroundColor: '#d33',
          borderColor: '#d33'
        }
      ]}
      eventColor='#2fb8c5'
      initialView='dayGridMonth' // Affichage de base
      editable // Pour activer les interactions d'events
      droppable // Pour activer le fait d'ajouter un élement via le drag&drop
      nowIndicator
      dayMaxEvents
      selectMirror
      height={850}
      dayCellContent={renderDayCellContent}
      selectable
      select={handleDateSelect}
      eventClick={handleEventClick}
    />
  )
}

function renderDayCellContent (dayCell) {
  const isToday = dayCell.isToday
  const dayCellStyle = isToday ? { backgroundColor: '#46c1ca', color: 'white' } : {}

  return (
    <div style={dayCellStyle} className='p-1 rounded-full'>
      <div className='rounded-full h-6 w-6 flex items-center justify-center' style={isToday ? { color: 'white' } : {}}>
        {dayCell.dayNumberText}
      </div>
    </div>
  )
}
