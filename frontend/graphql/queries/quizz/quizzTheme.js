import { gql } from '@apollo/client'

const QUIZZ_THEME = gql`
  query GetQuizzes{
    quizzes {
      data {
        id,
        attributes{
          Questions{
            title,
            id
          }
        }
      }
    }
  }
`

export {
  QUIZZ_THEME
}

