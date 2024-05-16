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
