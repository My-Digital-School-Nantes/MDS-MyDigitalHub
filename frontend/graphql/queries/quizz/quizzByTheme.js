import { gql } from '@apollo/client'

const QUIIZZ_BY_THEME = gql`
  query GetQuizzesByTheme{
    quizzes {
      data {
        id,
        attributes{
          is_private,
          description,
          title,
          slug,
          quizz_theme {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export {
  QUIIZZ_BY_THEME
}

