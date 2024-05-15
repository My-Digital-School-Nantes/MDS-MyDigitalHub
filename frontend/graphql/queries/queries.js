import { gql } from '@apollo/client'

const GET_OFFERS = gql`
query {
  offers {
      data {
    attributes {
      title
      description 
      skills
      education
      start_date
      createdAt
      updatedAt
      publishedAt
    }
  }
}
}
`
export {
  GET_OFFERS
}

const CREATE_OFFER = gql`
mutation CreateOffer($title: String!, $description: String!, $skills: [String!]!, $education: String!, $startDate: Date!, $publishedAt: Date!) {
  createOffer(data: { title: $title, description: $description, skills: $skills, education: $education, start_date: $startDate, publishedAt: $publishedAt }) {
    data {
      id
      attributes {
        title
        description
        skills
        education
        start_date
        createdAt
        updatedAt
        publishedAt
      }
    }
  }
}
`

export {
  CREATE_OFFER
}
