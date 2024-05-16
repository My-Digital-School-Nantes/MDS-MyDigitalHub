'use client'
import React, { useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from '@nextui-org/react'
import { CREATE_OFFER } from '@/graphql/queries/queries'
import client from '@/graphql/apolloClient'

export default function AddJobOfferModal () {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    skills: '',
    education: '',
    start_date: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async () => {
    try {
      const result = await client.mutate({
        mutation: CREATE_OFFER,
        variables: {
          data: formData
        }
      })
      console.log('result FORMDATA titre: ', formData.title)
      console.log('Offer created:', result.data.createOffer)
      onClose()
    } catch (error) {
      console.error('Error creating offer:', error)
    }
  }

  return (
    <>
      <Button onPress={onOpen}>Ajouter</Button>
      <Modal
        backdrop='opaque'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: 'easeOut'
              }
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: 'easeIn'
              }
            }
          }
        }}
      >
        <ModalContent>
          <ModalHeader className='flex flex-col gap-1'>Ajouter une offre d'emploi</ModalHeader>
          <ModalBody>
            <Input name='title' placeholder='Titre' value={formData.title} onChange={handleChange} />
            <Input name='description' placeholder='Description' value={formData.description} onChange={handleChange} />
            <Input name='skills' placeholder='Compétences' value={formData.skills} onChange={handleChange} />
            <Input name='education' placeholder='Éducation' value={formData.education} onChange={handleChange} />
            <Input name='start_date' placeholder='Date de début' type='date' value={formData.start_date} onChange={handleChange} />
          </ModalBody>
          <ModalFooter>
            <Button color='danger' variant='light' onPress={onClose}>
              Fermer
            </Button>
            <Button color='primary' onPress={handleSubmit}>
              Ajouter
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
