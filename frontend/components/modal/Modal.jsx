import { Button, Modal, Input, ModalContent, ModalHeader, ModalBody, ModalFooter, Checkbox, Link, Autocomplete, AutocompleteItem } from '@nextui-org/react'
import { animals } from '@/data/animalsDatas'

const ModalAnnonce = ({ isOpen, onOpenChange }) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement='top-center'
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>Log in</ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label='Titre'
                placeholder="Entrer un titre d\'annonce"
                variant='bordered'
              />
              <Input
                autoFocus
                label='Descirption'
                placeholder='Entrer une descirption'
                variant='bordered'
              />
              <Autocomplete
                isRequired
                label='Favorite Animal'
                defaultItems={animals}
                placeholder='Search an animal'
                defaultSelectedKey='cat'
                className='max-w-xs'
              >
                {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
              </Autocomplete>

              <div className='flex py-2 px-1 justify-between'>
                <Checkbox
                  classNames={{
                    label: 'text-small'
                  }}
                >
                  Remember me
                </Checkbox>
                <Link color='primary' href='#' size='sm'>
                  Forgot password?
                </Link>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color='danger' variant='flat' onPress={onClose}>
                Close
              </Button>
              <Button color='primary' onPress={onClose}>
                Sign in
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default ModalAnnonce
