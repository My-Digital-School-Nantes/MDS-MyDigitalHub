import { gql } from '@apollo/client'

export const GET_QUIZZTHEME = gql`
query getQuizzesTheme{
  quizzThemes{
    data{
      id
      attributes{
        name
        slug
      }
    }
  }
}
`

export const GET_QUIZZ_QUESTION = gql`
query getQuizzQuestion($id: ID!) {
  quizz(id: $id) {
    data {
      id
      attributes {
        Questions {
          title
          questionText
          Responses {
            responseA
            responseB
            responseC
            responseD
            responseA_isCorrect
            responseB_isCorrect
            responseC_isCorrect
            responseD_isCorrect
          }
        }
      }
    }
  }
}
`
export const QUIZZ_INFOS = gql`
query GetQuizzes($id: ID!){
  quizz(id: $id){
    data{
      id
      attributes{
        name
        description
        time
      }
    }
  }
}
`
