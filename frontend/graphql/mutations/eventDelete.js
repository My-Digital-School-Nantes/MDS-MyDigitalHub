const { gql } = require('@apollo/client')

export const DELETE_EVENT = gql`
mutation deleteEvent($id: ID!) {
  deleteCalendarEvent(id: $id) {
    data {
      id
    }
  }
}`
