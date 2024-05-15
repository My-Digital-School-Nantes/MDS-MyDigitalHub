const { gql } = require('@apollo/client')

export const GET_EVENTS = gql`
query getCalendarEvents {
  calendarEvents {
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
