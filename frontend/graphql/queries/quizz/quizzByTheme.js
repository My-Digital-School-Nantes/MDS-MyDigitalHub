import { gql } from '@apollo/client'

export const GET_QUIZZ_BY_THEME = gql`
query getQuizzesByTheme($themeName: String!){
  quizzes(filters: {quizz_theme: {slug: {eq: $themeName}}}){
    data{
      id
      attributes{
        name
        description
        slug
        quizz_theme{
          data{
            attributes{
              slug
            }
          }
        }
      }
    }
  }
}
`
