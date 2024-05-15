'use client'
import { useState, useEffect } from 'react'
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
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default function Calendar () {
  const [events, setEvents] = useState([])

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:1337/api/calendar-events')
      const data = await response.json()

      const formattedEvents = data.data.map(event => ({
        title: event.attributes.title,
        start: event.attributes.date_debut,
        end: event.attributes.date_fin,
        id: event.id,
        backgroundColor: event.attributes.color,
        tags: event.attributes.tags,
        image: event.attributes.image,
        description: event.attributes.content
      }))

      setEvents(formattedEvents)
    } catch (error) {
      console.error('Erreur lors de la récupération des événements :', error)
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  const handleEventClick = clickInfo => {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Voulez-vous supprimer cet événement ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2fb8c5',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le!',
      cancelButtonText: 'Non, annulez!'
    }).then(async (result) => {
      if (result.value) {
        try {
          const response = await fetch(`http://localhost:1337/api/calendar-events/${clickInfo.event.id}`, {
            method: 'DELETE'
          })

          if (response.ok) {
            Swal.fire('Supprimé!', 'Votre événement a été supprimé.', 'success')
            fetchEvents()
          } else {
            throw new Error('Erreur lors de la suppression de l\'événement')
          }
        } catch (error) {
          console.error('Erreur lors de la suppression de l\'événement :', error)
        }
      }
    })
  }

  const handleDateSelect = async selectInfo => {
    const { startStr, endStr, allDay } = selectInfo

    const { value: eventName } = await Swal.fire({
      title: 'Créer un événement',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Créer',
      confirmButtonColor: '#2fb8c5',
      cancelButtonText: 'Annuler',
      showLoaderOnConfirm: true
    })

    if (!eventName) {
      Swal.showValidationMessage('Veuillez entrer le nom de l\'événement')
      return
    }

    const { value: description } = await Swal.fire({
      title: 'Ajouter une description',
      input: 'textarea',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'OK',
      confirmButtonColor: '#2fb8c5',
      cancelButtonText: 'Annuler',
      showLoaderOnConfirm: true
    })

    if (!description) {
      Swal.showValidationMessage('Veuillez entrer une description')
      return
    }

    const tagOptions = ['Vie d\'école', 'Divertissement', 'Sport']

    const tagCheckboxes = tagOptions.map(tag => (
      `<input type="checkbox" id="tag-${tag}" name="tags" value="${tag}">
       <label for="tag-${tag}">${tag}</label><br>`
    )).join('')

    const { value: formValues } = await MySwal.fire({
      title: 'Sélectionner les tags',
      html:
        `<form id="tags-form">
          ${tagCheckboxes}
         </form>`,
      focusConfirm: false,
      preConfirm: () => {
        const form = MySwal.getPopup().querySelector('#tags-form')
        const selectedTags = Array.from(form.querySelectorAll('input[name="tags"]:checked'))
          .map(tag => tag.value)
        if (selectedTags.length === 0) {
          MySwal.showValidationMessage('Veuillez sélectionner au moins un tag')
        }
        return selectedTags
      },
      confirmButtonText: 'OK',
      confirmButtonColor: '#2fb8c5',
      showCancelButton: true,
      cancelButtonText: 'Annuler',
      cancelButtonColor: '#d33'
    })

    if (!formValues) {
      return
    }

    const { value: color } = await Swal.fire({
      title: 'Sélectionnez une couleur',
      input: 'select',
      inputOptions: {
        '#d33': 'Rouge',
        '#28a701': 'Vert',
        '#2fb8c5': 'Bleu'
      },
      inputPlaceholder: 'Sélectionnez une couleur',
      confirmButtonText: 'OK',
      confirmButtonColor: '#2fb8c5',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      cancelButtonText: 'Annuler'
    })

    if (!color) {
      Swal.showValidationMessage('Veuillez sélectionner une couleur')
      return
    }

    const { value: file } = await Swal.fire({
      title: 'Ajouter une image',
      input: 'file',
      inputAttributes: {
        accept: 'image/*'
      },
      showCancelButton: true,
      confirmButtonText: 'OK',
      confirmButtonColor: '#2fb8c5',
      cancelButtonText: 'Annuler',
      showLoaderOnConfirm: true
    })

    if (!file) {
      Swal.showValidationMessage('Veuillez ajouter une image')
      return
    }

    const newEvent = {
      title: eventName,
      date_debut: startStr,
      date_fin: endStr,
      allDay,
      color,
      content: description,
      tags: formValues
    }

    const formData = new FormData()
    formData.append('data', JSON.stringify(newEvent))
    formData.append('files.image', file)

    try {
      const response = await fetch('http://localhost:1337/api/calendar-events', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        Swal.fire('Événement créé!')
        fetchEvents()
      } else {
        throw new Error('Erreur lors de la création de l\'événement')
      }
    } catch (error) {
      console.error('Erreur lors de la création de l\'événement :', error)
    }
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
      events={events}
      eventColor='#fff'
      initialView='dayGridMonth' // Affichage de base
      editable // Pour activer les interactions d'events
      droppable // Pour activer le fait d'ajouter un élement via le drag&drop
      nowIndicator
      dayMaxEvents
      selectMirror
      height={850}
      selectable
      dayCellContent={renderDayCellContent}
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
