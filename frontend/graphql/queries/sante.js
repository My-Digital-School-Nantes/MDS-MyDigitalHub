import { gql } from '@apollo/client'

export const GET_ANNONCES = gql`
query annonce {
    annonces{
        data{
            id,
            attributes{
                Title 
                Description 
                Date 
                Contact 
                Niveau 
                Sport
            }
        }
    }
}
`
