import { gql } from '@apollo/client'

export const GET_ANNONCES = gql`
query annonce {
    annonces{
        data{
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
