import CardCarousel from '@/components/santeComponents/card/CardCarousel'
import { ListAnnonce } from '@/components/santeComponents/list/ListAnnonce'
import { Divider } from '@nextui-org/react'
import { getAnnonces, getContacts } from '@/app/api/santeApi'

export default async function Sante () {
  const annonces = await getAnnonces()
  const contacts = await getContacts()

  return (
    <>
      <div className='text-center my-16 capitalize'>
        <h1 className='text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200'>
          Section
          <span className='bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text '> Santé </span>
        </h1>
      </div>

      <div className='m-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc urna eros, consectetur in leo a, mollis ornare nunc. Nullam ac quam libero. Vestibulum et tempor orci. In at metus quis nulla molestie fringilla. In hac habitasse platea dictumst. Duis quis lacus gravida ante placerat imperdiet vel et tortor. Cras ut tortor et arcu convallis elementum. Praesent velit urna, facilisis eget euismod vel, faucibus at tortor. Vivamus ac nisl ex. Morbi volutpat magna nec massa vehicula, sit amet tempor justo elementum.
        Curabitur tristique erat vel mattis lobortis. Ut in gravida ipsum. Phasellus consequat, felis sed pretium efficitur, magna risus ultrices nibh, eu vehicula tortor ipsum vel ligula. Nulla volutpat gravida finibus. Phasellus eget ultricies ipsum. Cras eget aliquam enim. Maecenas tempor facilisis metus, et tempor erat dapibus iaculis. Etiam condimentum magna libero, quis semper nisi vulputate quis. Duis sit amet risus eget magna hendrerit placerat. Curabitur ut erat eget elit dictum blandit sit amet eu tellus. Donec finibus purus sed purus fermentum imperdiet. Aliquam accumsan est sit amet nibh tempor, non fermentum mi molestie.
      </div>
      <div className='text-center my-12 capitalize'>
        <h3 className='text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200'>
          Contact
          <span className='bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text '> Utile </span>
        </h3>
      </div>

      <div className='m-8'>
        <CardCarousel contacts={contacts} />
      </div>
      <Divider className='my-4' />

      <div className='m-8'>
        <ListAnnonce InitAnnonces={annonces} />
      </div>

    </>
  )
}
