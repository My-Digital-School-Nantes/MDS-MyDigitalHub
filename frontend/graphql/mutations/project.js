import { gql } from '@apollo/client'

const PROJECT_MUTATION = gql`
mutation IncrementVote($id: ID!, $newVote: Int!) {
  updateProject(
    id: $id,
    data: {
      vote: $newVote
    }
  ) {
    data {
      attributes {
        vote
      }
    }
  }
}

`
export {
  PROJECT_MUTATION
}
