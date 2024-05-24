import { gql } from '@apollo/client'

const PROJECT_MUTATION = gql`
mutation IncrementVote($projectId: ID!) {
  incrementVote(projectId: $projectId) {
    id
    vote
  }
}
`
export {
  PROJECT_MUTATION
}
