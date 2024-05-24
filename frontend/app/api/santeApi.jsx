import client from '@/graphql/apolloClient'
import { ADD_MUTATION } from '@/graphql/mutations/sante'
import { GET_ANNONCES, GET_CONTACTS } from '@/graphql/queries/sante'

export const addAnnonce = async (formData) => {
  try {
    const response = await client.mutate({
      mutation: ADD_MUTATION,
      variables: {
        title: formData.title,
        description: formData.description,
        date: formData.date,
        contact: formData.contact,
        niveau: formData.niveau,
        sport: formData.sport,
        publishedAt: new Date()
      }
    })
    const newAnnonceData = response?.data?.createAnnonce?.data
    return {
      id: newAnnonceData.id,
      attributes: newAnnonceData.attributes,
      __typename: 'AnnonceEntity'
    }
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}
export const getAnnonces = async () => {
  try {
    const response = await client.query({
      query: GET_ANNONCES
    })
    return response?.data?.annonces?.data
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}

export const getContacts = async () => {
  try {
    const response = await client.query({
      query: GET_CONTACTS
    })
    return response?.data?.contacts?.data
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}
