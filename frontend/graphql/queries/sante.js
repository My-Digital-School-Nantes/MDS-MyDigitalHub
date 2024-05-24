import { gql } from '@apollo/client'

export const GET_ANNONCES = gql`
query annonce {
    annonces{
        data{
            id,
            attributes{
                title 
                description 
                date 
                contact 
                niveau 
                sport
            }
        }
    }
}
`

export const GET_CONTACTS = gql`
query contact {
    contacts{
        data{
            id,
            attributes{
                Nom 
                Metier 
                Mail 
                Telephone 
                image {
                    data {
                      attributes {
                        name
                        url
                        formats
                      }
                    }
                }
            }
        }
    }
}
`
