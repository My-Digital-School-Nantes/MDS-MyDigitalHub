import { gql } from '@apollo/client'

export const GET_QUIZZTHEME = gql`
query getQuizzesTheme{
  quizzThemes{
    data{
      id
      attributes{
        name
        url
      }
    }
  }
}
`
