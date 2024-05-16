import { gql } from '@apollo/client'

export const ADD_MUTATION = gql`
mutation AddAnnonce($title: String!, $description: String!, $date: DateTime!, $contact: String!, $niveau: ENUM_ANNONCE_NIVEAU!, $sport: ENUM_ANNONCE_SPORT!, $publishedAt: DateTime) {
  createAnnonce(data: {
      Title: $title,
      Description: $description,
      Date: $date,
      Contact: $contact,
      Niveau: $niveau,
      Sport: $sport,
    	publishedAt: $publishedAt
  }) {
    data {
      id
      attributes {
        Title
        Description
        Date
        Contact
        Niveau
        Sport
      } 
    }
  }
}
`
