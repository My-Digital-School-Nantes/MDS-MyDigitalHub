import { gql } from '@apollo/client'

export const GET_PROJECTS = gql`
query getProjects {
  projects {
    data {
      id,
      attributes {
        title,
        description,
        image {
          data {
            attributes {
              name,
              url,
              formats
            }
          }
        },
        vote,
        slug,
        category,
        tags,
      }
    }
  }
}`
