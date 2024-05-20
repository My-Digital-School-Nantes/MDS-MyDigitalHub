import { gql } from '@apollo/client'

export const ADD_MUTATION = gql`
mutation AddAnnonce($title: String!, $description: String!, $date: DateTime!, $contact: String!, $niveau: ENUM_ANNONCE_NIVEAU!, $sport: ENUM_ANNONCE_SPORT!, $publishedAt: DateTime) {
  createAnnonce(data: {
      title: $title,
      description: $description,
      date: $date,
      contact: $contact,
      niveau: $niveau,
      sport: $sport,
    	publishedAt: $publishedAt
  }) {
    data {
      id
      attributes {
        title
        description
        date
        contact
        niveau
        sport
      } 
    }
  }
}
`
