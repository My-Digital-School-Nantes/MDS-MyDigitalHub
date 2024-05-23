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

const CREATE_OFFER = gql`
mutation createOffer($title: String, $description: JSON, $skills: JSON, $education: JSON, $start_date: Date) {
  createOffer(data: {
    title: $title,
    description: $description,
    skills: $skills,
    education: $education,
    start_date: $start_date
  }) {
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
  GET_OFFERS, CREATE_OFFER
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
