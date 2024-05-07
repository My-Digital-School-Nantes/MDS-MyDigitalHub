import { gql } from '@apollo/client'

export const ADD_MUTATION = gql`
mutation AddAnnonce($title: String!, $description: String!, $date: DateTime!, $contact: String!, $niveau: String!, $sport: String!) {
  createAnnonce(input: {
    data: {
      Title: $title,
      Description: $description,
      Date: $date,
      Contact: $contact,
      Niveau: $niveau,
      Sport: $sport
    }
  }) {
    annonce {
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
