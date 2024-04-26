import { gql } from '@apollo/client'

export const GET_QUIZZES = gql`
query getQuizzes{
  quizzes {
    data {
      id
      attributes {
        name
      }
    }
  }
}
`

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
