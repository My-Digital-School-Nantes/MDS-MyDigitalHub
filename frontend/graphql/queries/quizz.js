import { gql } from '@apollo/client'

export const GET_THEMES = gql`
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

export const GET_QUIZZ_QUESTIONS = gql`
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
export const GET_QUIZZ = gql`
query GetQuizzBySlug($slug: String!){
  quizzes(filters:{slug: {eq: $slug}}){
    data{
      id
      attributes{
        slug
        name
        description
        time
      }
    }
  }
}
`

export const GET_AVATARS = gql`
query GetAvatar {
  uploadFiles{
    data{
      attributes{
        name
        url
      }
    }
  }
}
`
