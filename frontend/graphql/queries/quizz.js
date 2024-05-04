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
