'use client'
import React, { useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, SelectItem, Select } from '@nextui-org/react'
import { CREATE_OFFER } from '@/graphql/queries/queries'
import client from '@/graphql/apolloClient'
import offerData from '../../../backend/src/api/offer/content-types/offer/schema.json'

const skillOptions = offerData.attributes.skills.options.map(skill => ({ label: skill, value: skill }))
const educationOptions = offerData.attributes.education.options.map(edu => ({ label: edu, value: edu }))

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

  const handleSelectChange = (name, values) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: values
    }))
  }

  const handleSubmit = async () => {
    try {
      const result = await client.mutate({
        mutation: CREATE_OFFER,
        variables: {
          title: formData.title,
          description: formData.description,
          skills: formData.skills,
          education: formData.education,
          start_date: formData.start_date
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
            <Select
              items={skillOptions}
              label='Choix des compétences'
              placeholder='Compétences requises'
              selectionMode='multiple'
              selectedKeys={new Set(formData.skills)}
              onSelectionChange={(keys) => handleSelectChange('skills', Array.from(keys))}
            >
              {skillOptions.map(skill => (
                <SelectItem key={skill.value} value={skill.value}>
                  {skill.label}
                </SelectItem>
              ))}
            </Select>
            <Select
              items={educationOptions}
              label='Choix du niveau'
              placeholder='Niveau post bac requis'
              selectedKeys={new Set(formData.education)}
              onSelectionChange={(keys) => handleSelectChange('education', Array.from(keys))}
            >
              {educationOptions.map(edu => (
                <SelectItem key={edu.value} value={edu.value}>
                  {edu.label}
                </SelectItem>
              ))}
            </Select>
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
