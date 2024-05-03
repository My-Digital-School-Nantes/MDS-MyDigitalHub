import { gql } from '@apollo/client'

export const QUIIZZ_BY_THEME = gql`
  query getQuizzesTheme($themeName: String!){
    quizzThemes(filters: {url: {eq: $themeName}}){
      data{
        attributes{
          name
          url,
          quizzes{
            data{
              attributes{
                is_private,
                description,
                slug,
                name
              }
            }
          }
        }
      }
    }
  }
`
