const { gql } = require('@apollo/client')

export const CREATE_EVENT = gql`
mutation createEvent($data: CalendarEventInput!) {
  createCalendarEvent(data: $data) {
    data {
      id
      attributes {
        title
        content
        tags
        date_debut
        date_fin
        color
        image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}`

export const DELETE_EVENT = gql`
mutation deleteEvent($id: ID!) {
  deleteCalendarEvent(id: $id) {
    data {
      id
    }
  }
}`
