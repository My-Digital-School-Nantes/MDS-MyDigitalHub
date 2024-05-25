import { gql } from '@apollo/client'

export const GET_PROJECTS = gql`# Write your query or mutation here
query getProjects (
  $searchTerm: String
  ) {
  projects (
    filters: {
      or: [
        {title: { contains: $searchTerm }}
        {description: { contains: $searchTerm }}
      ]
    }
  ) {
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
        creator,
        creatorPhoto {
          data {
            attributes {
              name,
              url,
              formats
            }
          }}
      }
    }
  }
}`

export const GET_PROJECT = gql`
query GetProjectBySlug($slug: String) {
  projects (
    filters: {slug: {eq: $slug}}
  ){
    data {
    id,
    attributes {
      title,
      description,
      image {
        data {
          attributes {
            name
            url
            formats
          }
        }
      },
      vote,
      slug,
      category,
      tags,
      creator,
      creatorPhoto {
        data {
          attributes {
            name,
            url,
            formats
          }
        }}
    }
  }
  }
}`
