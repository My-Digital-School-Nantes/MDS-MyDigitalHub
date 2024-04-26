const { gql } = require('@apollo/client')

export const GET_EVENTS = gql`
query getEvents {
  events {
    data{
      id,
      attributes{
        name,
        content,
        tags,
        date,
        image{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
}`
