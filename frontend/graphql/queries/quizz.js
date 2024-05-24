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
        is_private
        time
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
query getQuizzQuestion($quizzName: String!) {
  quizzes(filters: {slug: {eq: $quizzName}}) {
    data {
      id
      attributes {
        slug
        Questions {
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
        is_private
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
