'use client'
import React, { useState } from 'react'
import { Button, Modal, Input, ModalContent, ModalHeader, ModalBody, ModalFooter, Autocomplete, AutocompleteItem, Textarea, DatePicker } from '@nextui-org/react'
import { sports, niveau } from '../../../app/sante/datas'
import { now, getLocalTimeZone } from '@internationalized/date'

const ModalAnnonce = ({ isOpen, onOpenChange, onAdd }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [contact, setContact] = useState('')
  const [selectedNiveau, setSelectedNiveau] = useState('')
  const [selectedSport, setSelectedSport] = useState('')
  const [date, setDate] = useState(now(getLocalTimeZone()))

  const onSubmit = async (e) => {
    e.preventDefault()

    const dateISO = new Date(
      date.year,
      date.month - 1,
      date.day,
      date.hour,
      date.minute,
      date.second,
      date.millisecond
    ).toISOString()

    const formData = {
      title,
      description,
      contact,
      niveau: selectedNiveau,
      sport: selectedSport,
      date: dateISO
    }
    await onAdd(formData)
    onOpenChange(false)
  }

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement='top-center'
    >
      <form onSubmit={onSubmit}>
        <ModalContent>
          <ModalHeader className='flex flex-col gap-1'>Ajouter une annonces</ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              label='Titre'
              labelPlacement='outside'
              placeholder="Entrer un titre d'annonce"
              variant='bordered'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              key='bordered'
              variant='bordered'
              label='Description'
              labelPlacement='outside'
              placeholder='Entrer une description'
              className='col-span-12 md:col-span-6 mb-6 md:mb-0'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <DatePicker
              label='Date'
              labelPlacement='outside'
              variant='bordered'
              value={date}
              onChange={(newDate) => setDate(newDate)}
            />
            <Input
              autoFocus
              label='Contact'
              labelPlacement='outside'
              placeholder='Entrer votre numéro / mail'
              variant='bordered'
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <Autocomplete
              isRequired
              label='Niveau'
              labelPlacement='outside'
              defaultItems={niveau}
              variant='bordered'
              placeholder='Sélectionné un niveau'
              defaultSelectedKey='cat'
              className='max-w-xs'
              inputValue={selectedNiveau}
              onInputChange={(value) => setSelectedNiveau(value)}
            >
              {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
            </Autocomplete>
            <Autocomplete
              isRequired
              label='Sport'
              labelPlacement='outside'
              defaultItems={sports}
              variant='bordered'
              placeholder='Sélectionné un sport'
              defaultSelectedKey='cat'
              className='max-w-xs'
              inputValue={selectedSport}
              onInputChange={(value) => setSelectedSport(value)}
            >
              {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
            </Autocomplete>
          </ModalBody>
          <ModalFooter>
            <Button color='danger' variant='flat' onClick={() => onOpenChange(false)}>
              Fermer
            </Button>
            <Button color='primary' type='submit'>
              Enregistrer
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  )
}

export default ModalAnnonce
